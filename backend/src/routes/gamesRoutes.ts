import { Router } from "express";
import auth from "../middleware/authGuard";
import {
  getGames,
  createGame,
  updateGameByName,
  getGameByName,
  deleteGameByName,
  joinGame,
} from "../controllers/gameCtrl";

const games = Router();

games.get("/", auth, getGames);

games.post("/", auth, createGame);

games.put("/:name", auth, updateGameByName);

games.get("/:name", auth, getGameByName);

games.delete("/:name", auth, deleteGameByName);

games.get("/:id/joinGame", auth, joinGame);

export default games;
