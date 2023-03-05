import { Application } from "express";
import usersRoutes from "./users";

const setupRoutes = (app: Application) => {
  app.use("/users", usersRoutes);
};

export default setupRoutes;
