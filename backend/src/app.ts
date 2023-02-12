import express from "express";
import { Socket } from "socket.io";
import setupRoutes from "../routes";

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

io.on("connection", (socket: Socket) => {
  console.log("a user connected");
  socket.on("SET_USER", (user) => {
    socket.emit("CONFIRM_USER_SET", user);
    console.log("Le " + user.type + " " + user.name + " est connecté");
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
