import { socket } from ".";

export const socketEvents = (navigate: any, dices: any, setDices: any) => {
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

  socket.on("TRIPLEDICE", (resultDice) => {
    setDices(resultDice)
    console.log("TRIPLEDICE " + resultDice);
  });
  
};
