import { Application } from "express";
import usersRoutes from "./userRoutes";
import authRoutes from "./authRoutes";

const setupRoutes = (app: Application) => {
  app.use("/users", usersRoutes);
  app.use("/auth", authRoutes);
};

export default setupRoutes;
