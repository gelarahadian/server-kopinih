import { Router } from "express";
import multer from "multer";

import auth from "./auth.js";
import menu from "./menu.js";

const upload = multer();

const api = Router().use(auth).use(menu);

// router.get("/r", (req, res) => {
//   res.send("Hello, This is the about page");
// });

export default Router().use("/api", upload.none(), api);
