import { Router } from "express";
import {
  getUsers,
  createUser,
  getUserById,
  deleteUserById,
} from "../controllers/userCtrl";

import auth from "../middleware/authGuard";

const users = Router();
/**
 * @swagger
 * /users:
 *  get:
 *   description: Use to request all users
 *  responses:
 *  '200':
 *  description: A successful response
 * '401':
 * description: Unauthorized
 */
users.get("/", auth, getUsers);

users.post("/", createUser);

//update user by id
users.put("/:id", getUserById);

//delete user by id
users.delete("/:id", deleteUserById);

export default users;
