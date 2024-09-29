import { Router } from "express";
import { me, signIn, signUp } from "../controllers/auth.js";
import protect from "../middleware/authProtect.js";

const router = Router();

router.get("/me", protect, me);

router.post("/auth/sign-up", signUp);

router.post("/auth/sign-in", signIn);

export default router;
