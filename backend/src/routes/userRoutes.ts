import { Router } from "express";
import {
  getUsers,
  createUser,
  getUserById,
  deleteUserById,
} from "../controllers/userCtrl";

import auth from "../middleware/authGuard";

const users = Router();

users.get("/", auth, getUsers);

users.post("/", createUser);

//update user by id
users.put("/:id", getUserById);

//delete user by id
users.delete("/:id", deleteUserById);

export default users;
