import { socket } from ".";
import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();

export const socketEvents = () => {
  socket.on("connect", () => {
    console.log("Socket is connected: " + socket.connected);
  });

  socket.on("disconnect", () => {
    console.log("Socket is disconnected: " + !socket.connected);
  });

  socket.on("CONFIRM_USER_SET", (user) => {
    if (user.type === "Player") {
      //   navigate("/player");
      console.log("User is a player");
    }
    if (user.type === "GM   ") {
      //   navigate("/gameMaster");
      console.log("User is a GM");
    }
  });
};
