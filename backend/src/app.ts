import express from "express";
import { Socket } from "socket.io";
import setupRoutes from "./routes";
import { getTripleDiceScore } from "./function/getDice";
import {
  FamilyEnum,
  PlayerCharacter,
  UserNameEnum,
} from "./models/characters/PlayerCharacter";
import { getRandomCharacter } from "./function/getRandomCharacter";
import { DiceResult } from "./models/history/Dice";
import cors from "cors";
import { IUser } from "./models/User";
import mongoose from "mongoose";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import Logger from "./lib/winston";

//db INIT
dotenv.config();

const MongoDB_URI: string = process.env.MONGODB_URI!;
mongoose
  .connect(MongoDB_URI)
  .then(() => Logger.info("Connexion à MongoDB réussie !"))
  .catch((e: any) => Logger.error("Connexion à MongoDB échouée : " + e));

//Express INIT
const app = express();
app.use(cors());
app.use(express.json());
const server = http.createServer(app);
const PORT = process.env.PORT || 3333;
setupRoutes(app);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

//Socket INIT
const io = new Server(server, { cors: { origin: "*" } });

const characters: Array<PlayerCharacter> = [
  {
    id: 1,
    firstName: "Aelith",
    lastName: "Aelith",
    health: 10,
    maxHealth: 10,
    family: {
      fatherFamily: FamilyEnum.Brisefer,
      motherFamily: FamilyEnum.Brisefer,
    },
    stats: {
      agility: 10,
      fighting: 1,
      erudition: 1,
      influence: 1,
      toughness: 1,
      survival: 1,
    },
    userName: UserNameEnum.Pierre,
  },
];
const DicesResults: DiceResult[] = [];

io.on("connection", (socket: Socket) => {
  console.log("a user connected");
  socket.on("SET_USER", (user: IUser) => {
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
    Logger.info("Le " + user.role + " " + user.name + " est connecté");
  });

  socket.on("disconnect", () => {
    Logger.info("user disconnected");
  });

  socket.on("GET_CHARACTERS", () => {
    socket.emit("CHARACTERS", characters);
    Logger.info("GET_CHARACTERS");
    console.log(characters);
  });

  socket.on("HIT", () => {
    // characters.health -= 1;
    Logger.info("HIT");
    socket.emit("CHARACTERS", characters);
    Logger.info("EMIT CHARACTERS");
  });

  socket.on("GET_TRIPLEDICE", (user: IUser) => {
    console.log(user);
    DicesResults.push(getTripleDiceScore(user));
    console.log(DicesResults);
    io.emit("TRIPLEDICE", DicesResults);
  });

  socket.on("ATTACK_PLAYER", ({ playerId, value }) => {
    const playerIndex = characters.findIndex(
      (player) => player.id === playerId
    );
    if (characters[playerIndex].health > 0) {
      characters[playerIndex].health -= value;
      socket.emit("CHARACTERS", characters);
    }
    io.emit("CHARACTERS", characters);
  });
  socket.on("HEALTH_PLAYER", ({ playerId, value }) => {
    Logger.info("Player healing")
    console.log(playerId, value);
    const playerIndex = characters.findIndex(
      (player) => player.id === playerId
    );
    if (
      characters[playerIndex].health > 0 &&
      characters[playerIndex].health < characters[playerIndex].maxHealth
    ) {
      characters[playerIndex].health += value;
      socket.emit("CHARACTERS", characters);
    }
    io.emit("CHARACTERS", characters);
  });
});
