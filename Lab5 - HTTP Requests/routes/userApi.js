const express = require("express");
const router = express.Router();
const data = require("../data");
const userData = data.users;

router.get("/people/:id", async (req, res) => {
  const idNum = Number(req.params.id);
  try {
    const user = await userData.getUserById(idNum);
    res.json(user);
  } catch (e) {
    res.status(404).json(e);
  }
});

router.get("/people", async (req, res) => {
  try {
    const userList = await userData.getAllUsers();
    res.json(userList);
  } catch (e) {
    res.status(500).send();
  }
});

router.get("/work/:id", async (req, res) => {
  const idNum = Number(req.params.id);
  try {
    const work = await userData.getWorkById(idNum);
    res.json(work);
  } catch (e) {
    res.status(404).json(e);
  }
});

router.get("/work", async (req, res) => {
  try {
    const workList = await userData.getAllWork();
    res.json(workList);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
