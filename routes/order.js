import { Router } from "express";
import {
  createOrder,
  getAllOrder,
  cancelOrder,
  getOrderById,
  completeOrder,
} from "../controllers/order.js";
import protect from "../middleware/authProtect.js";

const router = Router();

router.get("/order", protect, getAllOrder);

router.get("/order/:id", protect, getOrderById);

router.post("/order", protect, createOrder);

router.put("/order/cancel/:id", protect, cancelOrder);

router.put("/order/complete/:id", protect, completeOrder);

export default router;
