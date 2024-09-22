import Menu from "../models/menu.js";

const getAllMenu = async (req, res) => {
  try {
    const menu = await Menu.find();

    return res.status(200).json({
      message: "Menu fetched successfully",
      status: "success",
      data: menu,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json("Server Error");
  }
};

const getMenuById = async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.id);

    if (!menu) {
      return res.status(404).json("Menu not found");
    }

    return res.status(200).json({
      message: "Menu fetched successfully",
      status: "success",
      data: menu,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json("Server Error");
  }
};

const createMenu = async (req, res) => {
  const { name, description, price, category } = req.body;

  try {
    if (!name || !description || !price || !category) {
      return res.status(400).json("All fields are required");
    }

    // check if menu exists
    const existingMenu = await Menu.findOne({ name });

    if (existingMenu) {
      return res.status(400).json("Menu already exists");
    }

    const menu = new Menu({ name, description, price, category });
    await menu.save();

    return res.status(201).json({
      message: "Menu created successfully",
      status: "success",
      data: menu,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Server Error");
  }
};

const updateMenu = async (req, res) => {
  try {
    const menu = await Menu.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    await menu.save();

    if (!menu) {
      return res.status(404).json("Menu not found");
    }

    return res.status(200).json({
      message: "Menu updated successfully",
      status: "success",
      data: menu,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json("Server Error");
  }
};

const deleteMenu = async (req, res) => {
  try {
    const menu = await Menu.findByIdAndDelete(req.params.id);
    if (!menu) {
      return res.status(404).json("Menu not found");
    }

    return res.status(200).json({
      message: "Menu deleted successfully",
      status: "success",
      data: menu,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json("Server Error");
  }
};

export { getAllMenu, getMenuById, createMenu, updateMenu, deleteMenu };
