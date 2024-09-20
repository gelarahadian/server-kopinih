const { Router } = require("express");

const router = Router();

router.post("/sign-up", (req, res) => {
  res.send("This is the registration page");
});

router.post("/sign-in", (req, res) => {
  res.send("This is the signin page");
});

module.exports = router;
