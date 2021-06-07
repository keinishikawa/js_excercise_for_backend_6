const express = require("express");
const router = express.Router();

router
  .get("/", (req, res) => {
    res.render("top");
  })

  .get("/quiz", (req, res) => {
    res.render("quiz");
  });

module.exports = router;
