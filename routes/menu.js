import { Router } from "express";
import {
  createMenu,
  deleteMenu,
  getAllMenu,
  getMenuById,
  updateMenu,
} from "../controllers/menu.js";
import protect from "../middleware/authProtect.js";
import { isAdmin } from "../middleware/admin.js";

const router = Router();

router.get("/menu", getAllMenu);

router.get("/menu/:id", getMenuById);

router.post("/menu", protect, isAdmin, createMenu);

router.put("/menu/:id", protect, isAdmin, updateMenu);

router.delete("/menu/:id", protect, isAdmin, deleteMenu);

export default router;
