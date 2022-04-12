const session = require("express-session");
const express = require("express");
const app = express();
const static = express.static(__dirname + "/public");
const exphbs = require("express-handlebars");
const configRoutes = require("./routes");

app.use(express.json());
app.use("/public", static);
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    name: "AuthCookie",
    secret: "some secret string!",
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/private", (req, res, next) => {
  if (!req.session.user) {
    res
      .status(403)
      .render("screens/signup", { error: "Error 403: User is not logged in" });
  } else {
    next();
  }
});

app.use((req, res, next) => {
  if (req.session.user) {
    console.log(
      `[${new Date().toUTCString()}] ${req.method} ${
        req.originalUrl
      } User Authenticated`
    );
  } else {
    console.log(
      `[${new Date().toUTCString()}] ${req.method} ${
        req.originalUrl
      } User Not Authenticated`
    );
  }
  next();
});

app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

configRoutes(app);

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log("Your routes will be running on http://localhost:3000");
});
