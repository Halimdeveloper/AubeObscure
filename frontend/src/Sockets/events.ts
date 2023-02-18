import { socket } from ".";
export const socketEvents = (navigate: any) => {
  socket.on("connect", () => {
    console.log("Socket is connected: " + socket.connected);
  });

  socket.on("disconnect", () => {
    console.log("Socket is disconnected: " + !socket.connected);
  });

  socket.on("CONFIRM_USER_SET", (user) => {
    if (user.type === "Player") {
      navigate("/player");
    }
    if (user.type === "GM") {
      navigate("/gameMaster");
    }
  });
};
