const { Router } = require("express");
const auth = require("./auth");

const api = Router().use(auth);

// router.get("/r", (req, res) => {
//   res.send("Hello, This is the about page");
// });

module.exports = api;
