import { Application } from "express";
import usersRoutes from "./userRoutes";

const setupRoutes = (app: Application) => {
  app.use("/users", usersRoutes);
};

export default setupRoutes;
