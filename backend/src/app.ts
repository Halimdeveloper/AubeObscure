import express from "express";
import { Socket } from "socket.io";
import setupRoutes from "../routes";
import { getTripleDiceScore } from "./function/getDice";
import {
  FamilyEnum,
  PlayerCharacter,
  UserNameEnum,
} from "./models/characters/PlayerCharacter";
import { User } from "./models/User";
import { getRandomCharacter } from "./function/getRandomCharacter";
import { DiceResult } from "./models/history/Dice";
import clientPromise from "../db/db";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
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
console.log("Server started");

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

export async function getUsersFromDB() {
  const client = await clientPromise;
  const db = client.db("AubeObscureDB");
  const collection = db.collection("users");
  const users = await collection.find({}).toArray();

  console.log(JSON.parse(JSON.stringify(users)));
}

getUsersFromDB();
