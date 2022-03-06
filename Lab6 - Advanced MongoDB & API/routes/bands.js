const express = require("express");
const router = express.Router();
const data = require("../data");
const bandData = data.bands;
const { ObjectId } = require("mongodb");

router.get("/bands", async (req, res) => {
  try {
    let bandList = await bandData.getAll();
    let bands = [];
    for (let band of bandList) {
      bands.push({ _id: band._id, name: band.name });
    }
    res.status(200).json(bands);
  } catch (e) {
    res.sendStatus(400).json({ error: e });
  }
});

router.post("/bands", async (req, res) => {
  let bandInfo = req.body;

  try {
    const newBand = await bandData.create(
      bandInfo.name,
      bandInfo.genre,
      bandInfo.website,
      bandInfo.recordLabel,
      bandInfo.bandMembers,
      bandInfo.yearFormed
    );
    res.status(200).json(newBand);
    return;
  } catch (e) {
    res.status(400).json({ error: e });
    return;
  }
});

router.get("/bands/:id", async (req, res) => {
  try {
    ObjectId(req.params.id);
  } catch (e) {
    res.status(400).json({ error: "_id is not valid ObjectId" });
    return;
  }

  try {
    const band = await bandData.get(req.params.id);
    res.status(200).json(band);
    return;
  } catch (e) {
    res.status(404).json({ error: e });
    return;
  }
});

router.put("/bands/:id", async (req, res) => {
  let bandInfo = req.body;
  try {
    await bandData.get(req.params.id);
  } catch (e) {
    res.status(404).json({ error: e });
    return;
  }

  try {
    const band = await bandData.update(
      req.params.id.toString(),
      bandInfo.name,
      bandInfo.genre,
      bandInfo.website,
      bandInfo.recordLabel,
      bandInfo.bandMembers,
      bandInfo.yearFormed
    );
    res.status(200).json(band);
    return;
  } catch (e) {
    res.status(404).json({ error: e });
    return;
  }
});

router.delete("/bands/:id", async (req, res) => {
  try {
    await bandData.get(req.params.id);
  } catch (e) {
    return res.status(404).json({ error: e });
  }

  try {
    await bandData.remove(req.params.id);
    res.status(200).json({ bandId: req.params.id, deleted: true });
  } catch (e) {
    res.status(400).json({ error: e });
  }
});

module.exports = router;
