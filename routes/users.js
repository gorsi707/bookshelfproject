var express = require("express");
var router = express.Router();

const userController = require("../controller/userController");

router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/sign-in", (req, res) => {
  res.render("login");
});

router.post("/submit", userController.register);

router.post("/login", userController.login);

module.exports = router;
