const bandRoutes = require("./bands");

const constructorMethod = (app) => {
  app.use("/", bandRoutes);
  app.use("*", (req, res) => {
    res.sendStatus(404);
  });
};

module.exports = constructorMethod;
