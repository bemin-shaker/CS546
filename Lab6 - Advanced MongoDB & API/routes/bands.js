const express = require("express");
const router = express.Router();
const data = require("../data");
const bands = data.bands;

router.get("/bands/:id", async (req, res) => {
  const idNum = Number(req.params.id);
  try {
    const user = await userData.getUserById(idNum);
    res.json(user);
  } catch (e) {
    res.status(404).json(e);
  }
});

router.get("/bands", async (req, res) => {
  try {
    const userList = await userData.getAllUsers();
    res.json(userList);
  } catch (e) {
    res.status(500).send();
  }
});

router.post("/bands/", async (req, res) => {});

router.post("/bands/:id", async (req, res) => {});

router.delete("/bands/:id", async (req, res) => {});
