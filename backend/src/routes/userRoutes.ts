import { Router } from "express";
import {
  getUsers,
  createUser,
  getUserById,
  deleteUserById,
} from "../controllers/userCtrl";

const users = Router();

users.get("/", getUsers);

users.post("/", createUser);

//update user by id
users.put("/:id", getUserById);

//delete user by id
users.delete("/:id", deleteUserById);

export default users;
