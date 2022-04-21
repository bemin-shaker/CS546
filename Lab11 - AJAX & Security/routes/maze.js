const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.render("maze/form");
  } catch (e) {
    res.status(400).json({ message: e });
    return;
  }
});

module.exports = router;
