const express = require("express");
const router = express.Router();
const showData = require("../data/maze");

router.get("/", async (req, res) => {
  try {
    res.render("maze/index", { title: "Show Finder" });
  } catch (e) {
    res.status(404).send({ error: e });
  }
});

router.post("/searchShows", async (req, res) => {
  let searchTerm = req.body.showSearchTerm;

  if (
    !searchTerm ||
    typeof searchTerm != "string" ||
    searchTerm.trim().length == 0
  ) {
    res.status(400).render("maze/error", {
      error: "Error 400: search term is not a valid string or is empty.",
      class: "error",
    });
  }

  try {
    const shows = await showData.search(req.body.showSearchTerm);
    if (!shows) {
      res.status(404).render("maze/error", {
        error: `We're sorry, but no results were found for ${showSearchTerm}`,
        class: "error-not-found",
      });
      return;
    }
    res.render("maze/search", {
      shows: shows,
      showSearchTerm: req.body.showSearchTerm,
      title: "Shows Found",
    });
  } catch (e) {
    res.status(404).render("maze/error", { error: e });
  }
});

router.get("/show/:id", async (req, res) => {
  let showId = req.params.id;
  try {
    const show = await showData.find(showId);
    if (!show) {
      res.status(404).render("maze/error", {
        error: "Error 404: No show data found",
        class: "error-not-found",
      });
      return;
    }

    res.render("maze/shows", {
      show: show,
      title: show.name,
      sum: show.summary
        .replace("<p>", "")
        .replace("</p>", "")
        .replace("<b>", "")
        .replace("</b>", "")
        .replace("<span>", "")
        .replace("</span>", "")
        .replace("<p >", "")
        .replace("< /p>", "")
        .replace("<span >", "")
        .replace("< /span>", "")
        .replace("<p><span>", "")
        .replace("</span></p>", "")
        .replace("<br/>", "")
        .replace("<br />", ""),
    });
  } catch (e) {
    res.status(404).render("maze/error", {
      error: "Id is not valid",
      class: "error",
    });
  }
});

module.exports = router;
