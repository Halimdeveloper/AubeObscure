import { socket } from ".";
import { Character } from "../models/characters/Character";
import { User, RoleEnum } from "../models/User";

export const socketEvents = (
  navigate: any,
  dices: any,
  setDices: any,
  users: User[],
  setUsers: any,
  characters: Character[],
  setCharacters: any,
  currentCharacter: User,
  setCurrentCharacter: any
) => {
  socket.on("connect", () => {
    console.log("Socket is connected: " + socket.connected);
  });

  socket.on("disconnect", () => {
    console.log("Socket is disconnected: " + !socket.connected);
  });

  socket.on("CONFIRM_USER_SET", (response) => {
    
    if (response.currentUser.role === RoleEnum.Player) {
      navigate("/player");
    }
    if (response.currentUser.role === RoleEnum.GM) {
      navigate("/gameMaster");
    }
  });

  socket.on("TRIPLEDICE", (resultDice) => {
    setDices(resultDice);
  });

  socket.on("CHARACTERS", (characters) => {
    setCharacters(characters);
  });
};
