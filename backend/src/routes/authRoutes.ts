import { signin, signup } from "../controllers/authCtrl";
import { Router } from "express";

const authRoutes = Router();

authRoutes.post("/signin", signin);
authRoutes.post("/signup", signup);

export default authRoutes;
