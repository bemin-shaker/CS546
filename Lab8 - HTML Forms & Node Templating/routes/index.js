const showRoutes = require("./maze");

const constructorMethod = (app) => {
  app.use("/", showRoutes);
  app.use("*", (req, res) => {
    res.status(404).render("maze/error", { error: "Invalid URL" });
  });
};

module.exports = constructorMethod;
