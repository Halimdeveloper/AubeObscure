import express, { response } from "express";
import { Socket } from "socket.io";
import setupRoutes from "../routes";
import { getTripleDiceScore } from "./function/Dice";
import {
  PlayerCharacter,
  UserNameEnum,
} from "./models/characters/PlayerCharacter";
import { User } from "./models/User";

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

const characters: Array<PlayerCharacter> = [
  {
    id: 1,
    firstName: "Pierre",
    lastName: "TheBoss",
    health: 20,
    maxHealth: 30,
    class: "warrior",
    stats: {
      agility: 10,
      fighting: 10,
      erudition: 10,
      toughness: 10,
      survival: 10,
    },
    userName: UserNameEnum.Halim,
  },
];

io.on("connection", (socket: Socket) => {
  console.log("a user connected");
  socket.on("SET_USER", (user: User) => {
    const response = {
      users: characters,
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
    characters.health -= 1;
    console.log("HIT");
    socket.emit("CHARACTERS", characters);
    console.log("EMIT CHARACTERS");
  });

  const Allresult: Array<string> = [];
  socket.on("GET_TRIPLEDICE", () => {
    const result = getTripleDiceScore();
    Allresult.push(result);
    console.log("TRIPLEDICE hit", Allresult);
    socket.emit("TRIPLEDICE", Allresult);
  });
});
