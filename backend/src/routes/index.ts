import { Application } from "express";
import usersRoutes from "./userRoutes";
import authRoutes from "./authRoutes";
import gamesRoutes from "./gamesRoutes";

const setupRoutes = (app: Application) => {
  app.use("/users", usersRoutes);
  app.use("/auth", authRoutes);
  app.use("/games", gamesRoutes);
};

export default setupRoutes;
