import { socket } from "./index";
import { User } from "../models/User";

export const setCurrentUser = (currentUser: User) => {
  if (!currentUser.name) {
    throw new Error("User name is required");
  }
  socket.emit("SET_USER", currentUser);
};

export const getTripleDiceScore = (currentUser: User) => {
  if (!currentUser.name) {
    throw new Error("User name is required");
  }
  socket.emit("GET_TRIPLEDICE", currentUser);
};

export const attackPlayer = (playerId: number, value?: number) => {
  socket.emit("ATTACK_PLAYER", { playerId, value });
};

export const healthPlayer = (playerId: number, value?: number) => {
  socket.emit("HEALTH_PLAYER", { playerId, value });
};

export const getCharaters = () => {
  socket.emit("GET_CHARACTERS");
};
