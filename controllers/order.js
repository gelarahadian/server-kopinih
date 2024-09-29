import Menu from "../models/menu.js";
import Order from "../models/order.js";

const getAllOrder = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.userId })
      .populate("user", "username email")
      .populate("orderItems.menu", "name price description");

    return res.json({
      message: "Orders fetched successfully",
      status: "success",
      data: orders,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json("Server Error");
  }
};

const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json("Order not found");
    }
    return res.json({
      message: "Order fetched successfully",
      status: "success",
      data: order,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json("Server Error");
  }
};

const createOrder = async (req, res) => {
  const { orderItems, tableNumber } = req.body;
  const userId = req.userId;

  if (!orderItems || !tableNumber) {
    return res.status(400).json("All fields are required");
  }

  try {
    const menuIds = orderItems.map((item) => item.menu);
    const menus = await Menu.find({ _id: { $in: menuIds } }).lean();

    if (menus.length !== menuIds.length) {
      return res.status(400).json("Invalid menu IDs");
    }

    const updatedOrderItems = orderItems.map((item) => {
      const menu = menus.find((m) => m._id.toString() === item.menu);
      return {
        ...item,
        price: menu ? menu.price * item.quantity : 0,
      };
    });

    const totalPrice = updatedOrderItems.reduce(
      (total, item) => total + item.price,
      0
    );

    const newOrder = new Order({
      user: userId,
      orderItems: updatedOrderItems,
      tableNumber,
      totalPrice,
    });

    await newOrder.save();

    const populatedOrder = await Order.findById(newOrder._id)
      .populate("user", "username email") // Populates user data with specific fields (e.g., name and email)
      .populate("orderItems.menu", "name price description");

    return res.status(201).json({
      message: "Order created successfully",
      status: "success",
      data: populatedOrder,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json("Server Error");
  }
};

const cancelOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { isCancelled: true },
      { new: true }
    );

    if (!order) {
      return res.status(404).json("Order not found");
    }

    return res.json({
      message: "Order canceled successfully",
      status: "success",
      data: order,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json("Server Error");
  }
};

const completeOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { isDelivered: true, isPaid: true, isCompleted: true },
      { new: true }
    );
    if (!order) {
      return res.status(404).json("Order not found");
    }
    return res.json({
      message: "Order completed successfully",
      status: "success",
      data: order,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json("Server Error");
  }
};
export { getAllOrder, getOrderById, createOrder, cancelOrder, completeOrder };
