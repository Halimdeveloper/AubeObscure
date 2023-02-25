import express from "express";
import { Socket } from "socket.io";
import setupRoutes from "../routes";
import { getTripleDiceScore } from "./function/Dice";
import type { PlayerCharacter } from "./models/characters/PlayerCharacter";

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
      address: 10,
      fights: 10,
      erudition: 10,
      toughness: 10,
      survival: 10,
    },
  },
];

io.on("connection", (socket: Socket) => {
  console.log("a user connected");
  socket.on("SET_USER", (user) => {
    socket.emit("CONFIRM_USER_SET", user);
    console.log("Le " + user.type + " " + user.name + " est connecté");
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
