import express, { response } from "express";
import { Socket } from "socket.io";
import setupRoutes from "../routes";
import { getTripleDiceScore } from "./function/getDice";
import {
  FamilyEnum,
  PlayerCharacter,
  UserNameEnum,
} from "./models/characters/PlayerCharacter";
import { DiceResult } from "./models/Dice";
import { User } from "./models/User";
import { getRandomCharacter } from "./function/getRandomCharacter";

const app = express();
const http = require("http");
const server = http.createServer(app);
const PORT = process.env.PORT || 3333;
setupRoutes(app);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

const { Server } = require("socket.io");
const io = new Server(server, { cors: { origin: "*" } });

const characters: Array<PlayerCharacter> = [];
const DicesResults: DiceResult[] = [];

io.on("connection", (socket: Socket) => {
  console.log("a user connected");
  socket.on("SET_USER", (user: User) => {
    const aliveCharacters = characters.filter(
      (character) => character.health > 0 && character.userName == user.name
    );
    if (aliveCharacters.length > 1) {
      throw new Error("Plus d'un personnage est vivant pour cet utilisateur");
    } else if (aliveCharacters.length === 0) {
      characters.push(getRandomCharacter(user));
    }
    const response = {
      currentUser: user,
    };
    socket.emit("CONFIRM_USER_SET", response);
    console.log("Le " + user.role + " " + user.name + " est connecté");
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("GET_CHARACTERS", () => {
    socket.emit("CHARACTERS", characters);
    console.log("GET_CHARACTERS");
    console.log(characters);
  });

  socket.on("HIT", () => {
    // characters.health -= 1;
    console.log("HIT");
    socket.emit("CHARACTERS", characters);
    console.log("EMIT CHARACTERS");
  });

  socket.on("GET_TRIPLEDICE", (user: User) => {
    console.log(user);
    DicesResults.push(getTripleDiceScore(user));
    console.log(DicesResults);
    io.emit("TRIPLEDICE", DicesResults);
  });
});
