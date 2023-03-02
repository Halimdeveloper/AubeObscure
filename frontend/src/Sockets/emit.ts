import { socket } from "./index";
import { User } from "../models/User";

export const emitCurrentUser = (currentUser: User) => {
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

export const getCharaters = () => {
  socket.emit("GET_CHARACTERS");
};
