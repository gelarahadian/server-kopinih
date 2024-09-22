import { Router } from "express";
import {
  createMenu,
  deleteMenu,
  getAllMenu,
  getMenuById,
  updateMenu,
} from "../controllers/menu.js";

const router = Router();

router.get("/menu", getAllMenu);

router.get("/menu/:id", getMenuById);

router.post("/menu", createMenu);

router.put("/menu/:id", updateMenu);

router.delete("/menu/:id", deleteMenu);

export default router;
