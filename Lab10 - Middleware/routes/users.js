const express = require("express");
const router = express.Router();
const data = require("../data");
const userData = data.users;

router.get("/", async (req, res) => {
  let isAuthenticated = req.session.user;
  try {
    if (isAuthenticated) {
      res.redirect("/private");
    } else {
      res.render("screens/login");
    }
  } catch (e) {
    res.render("screens/error", { error: e });
  }
});

router.get("/signup", async (req, res) => {
  let isAuthenticated = req.session.user;
  try {
    if (isAuthenticated) {
      res.redirect("/private");
      return;
    } else {
      res.render("screens/signup");
    }
  } catch (e) {
    res.status(400).render("screens/signup", { error: e });
  }
});

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  if (!req.body || !username || !password) {
    res.status(400).render("screens/signup", {
      error:
        "Error 400: You must provide a username and password to create an account.",
    });
  }

  if (username.length < 4 || password.length < 6) {
    res.status(400).render("screens/signup", {
      error: "Error 400: Your username and/or password must be longer.",
    });
  }

  try {
    let reso = await userData.createUser(username, password);
    if (reso["userInserted"] === true) {
      res.redirect("/");
    }
  } catch (e) {
    {
      res.status(400).render("screens/signup", { error: e });
    }
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!req.body || !username || !password) {
    res.status(400).render("screens/login", {
      error:
        "Error 400: You must provide a username and password to create an account.",
    });
  }

  if (username.length < 4 || password.length < 6) {
    res.status(400).render("screens/login", {
      error: "Error 400: Your username and/or password must be longer.",
    });
  }

  try {
    let userRes = await userData.checkUser(username, password);
    if (userRes["authenticated"] === true) {
      req.session.user = { username: username };
      res.redirect("/private");
    }
  } catch (e) {
    res.status(400).render("screens/login", {
      error: "Error: 400: The username or password you entered is incorrect",
    });
  }
});

router.get("/private", async (req, res) => {
  let isAuthenticated = req.session.user;
  let username = req.session.user.username;
  if (isAuthenticated) {
    res.render("screens/private", { username: username });
  } else {
    res
      .status(403)
      .render("screens/login", { error: "User is not authenticated" });
  }
});

router.get("/logout", async (req, res) => {
  req.session.destroy();
  res.render("screens/logout");
});

module.exports = router;
