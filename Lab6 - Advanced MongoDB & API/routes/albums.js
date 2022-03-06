const express = require("express");
const router = express.Router();
const data = require("../data");
const albumData = data.albums;
const { ObjectId } = require("mongodb");

router.get("/albums/:id", async (req, res) => {
  try {
    ObjectId(req.params.id);
  } catch (error) {
    return res.status(400).json({ error: "id is not valid ObjectId" });
  }

  if (!req.params.id) {
    return res.status(400).json({ error: "Id parameter is not provided" });
  }

  try {
    const album = await albumData.get(req.params.id);
    res.status(200).json(album);
  } catch (e) {
    res.status(404).json({ error: e });
  }
});

router.delete("/albums/:id", async (req, res) => {
  try {
    ObjectId(req.params.id);
  } catch (e) {
    res.status(400).json({ error: "id is not a valid ObjectId" });
    return;
  }

  try {
    await albumData.get(req.params.id);
  } catch (e) {
    res.status(404).json({ error: "Album not found in database" });
    return;
  }

  try {
    await albumData.remove(req.params.id);
    res.status(200).json({ albumId: req.params.id, deleted: true });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});
