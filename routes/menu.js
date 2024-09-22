import { Router } from "express";
import { createMenu } from "../controllers/menu.js";

const router = Router();

router.get("/menu", (req, res) => {});

router.get("/menu/:id", (req, res) => {});

router.post("/menu", createMenu);

router.put("/menu/:id", (req, res) => {});

router.delete("/menu/:id", (req, res) => {});

export default router;
