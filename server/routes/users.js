// File Name: users.js | Student Name: Zachery Cardoza | Student Id: 301183433 | Oct 23rd, 2021
var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Placeholder");
});

module.exports = router;
