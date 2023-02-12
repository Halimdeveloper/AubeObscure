import express from "express";
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

io.on("connection", (socket: any) => {
  socket.on("ping", () => {
    socket.emit("pong", "pong");
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
