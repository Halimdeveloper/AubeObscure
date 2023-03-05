import { Application } from "express";
const usersRoutes = require("./users");

const setupRoutes = (app: Application) => {
  app.use("/users", usersRoutes);
};

export default setupRoutes;
