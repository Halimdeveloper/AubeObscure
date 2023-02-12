import { Application } from "express";
const testRoutes = require("./test");

const setupRoutes = (app: Application) => {
  app.use("/test", testRoutes);
  
};

export default setupRoutes;
