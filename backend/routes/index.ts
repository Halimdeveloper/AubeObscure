import { Application } from "express";
const testRoutes = require("./test");

const setupRoutes = (app: Application) => {
  app.use("/", testRoutes);
};

export default setupRoutes;
