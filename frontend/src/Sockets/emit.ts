import { socket } from "./index";
import { User } from "../models/User";

export const setCurrentUser = (currentUser: User) => {
  socket.emit("SET_USER", currentUser);
};

export const getTripleDiceScore = (currentUser: User) => {
  socket.emit("GET_TRIPLEDICE", currentUser);
};

export const getCharaters = () => {
  socket.emit("GET_CHARACTERS");
};
