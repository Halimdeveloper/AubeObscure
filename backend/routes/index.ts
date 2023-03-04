import { Application } from "express";
const testRoutes = require("./test");
const usersRoutes = require("./users");

const setupRoutes = (app: Application) => {
  app.use("/", testRoutes);
  app.use("/users", usersRoutes);
};

export default setupRoutes;
