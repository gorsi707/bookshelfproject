var express = require("express");
var router = express.Router();
const bookController = require("../controller/bookController");

router.post("/submitbook", bookController.newbook);

router.get("/submitform", (req, res) => {
  res.render("submitbook");
});

router.get("/bookdetails/:id", bookController.singlebook);

router.post("/notechanges", (req, res) => {
  console.log("i got hit", req.body);
});

module.exports = router;
