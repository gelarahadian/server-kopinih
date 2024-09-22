import { Router } from "express";
import { signIn, signUp } from "../controllers/auth.js";
import multer from "multer";

const upload = multer();
const router = Router();

router.post("/auth/sign-up", signUp);

router.post("/auth/sign-in", signIn);

export default router;
