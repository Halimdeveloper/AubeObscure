import { Request, Response } from "express";
import User from "../models/User";
import Game from "../models/Game";
import Logger from "../lib/winston";
import { getRandomCharacter } from "../function/getRandomCharacter";

export const getGames = async (req: Request, res: Response) => {
  const query = req.query;
  if (query.inGame) {
    const games = await Game.find({ inGame: query.inGame });
    res.send(games);
  } else {
    const games = await Game.find();
    res.send(games);
  }
};

export const createGame = async (req: Request, res: Response) => {
  const game = new Game({
    name: req.body.name,
    players: [],
    gm: null,
  });
  try {
    await game.save();
    const games = await Game.find();
    res.status(201).send(games);
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const updateGameByName = async (req: Request, res: Response) => {
  const game = await Game.findOne({ name: req.params.name });
  game &&
    game
      .updateOne(
        //with $set
        { $set: { ...req.body } }
      )
      .then(() => res.status(200).json({ message: "Objet modifié !" }))
      .catch((error) => res.status(400).json({ error }));
};

export const getGameByName = async (req: Request, res: Response) => {
  const game = await Game.findOne({ name: req.params.name });
  res.send(game);
};

export const deleteGameByName = async (req: Request, res: Response) => {
  const game = await Game.findOne({ name: req.params.name });
  game &&
    game
      .deleteOne()
      .then(() => res.status(200).json({ message: "Objet supprimé !" }))
      .catch((error: Error) => res.status(400).json({ error }));
};

export const joinGame = async (req: any, res: Response) => {
  try {
    const role = req.query.role;
    const game = await Game.findById(req.params.id);
    if (!game) {
      Logger.error("Game not found !");
      return res.status(400).json({ error: "Game not found !" });
    }
    const user = await User.findById(req.auth.userId);
    if (!user) {
      Logger.error("User not found !");
      return res.status(400).json({ error: "User not found !" });
    }
    const player = game.players.find(({ _id }) => {
      return `${_id}` === `${user._id}`;
    });
    const gm = `${game.gm}` === `${user._id}`;

    if (!role) {
      Logger.error("Role not found !");
      return res.status(400).json({ error: "Role not found !" });
    }

    if (player || gm) {
      Logger.info("User already in game !");
      return res.status(200).send({
        role: player ? "Player" : "GM",
        message: "User already in game !",
        game: game,
      });
    }

    if (role === "Player") {
      const randomCharacter = getRandomCharacter(user);
      user.characters.push(randomCharacter);
      user.currentCharacter = randomCharacter;
      game.players.push(user);
      await game.save();
      return res
        .status(200)
        .send({ message: "Player added to game !", game: game });
    } else if (role === "GM") {
      //get info of player in token and add it to game
      game.gm = user;
      await game.save();
      return res
        .status(200)
        .send({ message: "GM added to game !", game: game });
    }
  } catch (error) {
    Logger.error(error);
  }
};
  