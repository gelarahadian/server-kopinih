import { Router } from "express";
import auth from "./auth.js";
import multer from "multer";

const upload = multer();

const api = Router().use(auth);

// router.get("/r", (req, res) => {
//   res.send("Hello, This is the about page");
// });

export default Router().use("/api", upload.none(), api);
