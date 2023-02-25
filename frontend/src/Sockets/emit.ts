import { socket } from "./index";
import { User } from "../models/User";

export const setCurrentUser = (user: User) => {
  socket.emit("SET_USER", user);
};

export const addClientToQueue = () => {
  socket.emit("addClientIdToQueue");
};

export const getQueueLength = () => {
  socket.emit("queueLengthToSocket");
};

export const removeUserFromQueue = () => {
  socket.emit("removeUserFromQueue");
};

export const getTripleDiceScore = () => {
  socket.emit("GET_TRIPLEDICE");
};
