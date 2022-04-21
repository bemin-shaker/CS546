const showRoute = require("./maze");

const constructorMethod = (app) => {
  app.use("/", showRoute);
  app.use("*", (req, res) => {
    res.status(404);
  });
};

module.exports = constructorMethod;
