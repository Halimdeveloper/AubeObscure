import { socket } from ".";
import { Character } from "../models/characters/Character";
import { DiceResult } from "../models/Dice";
import { User, RoleEnum } from "../models/User";

export const socketEvents = (
  navigate: (arg0: string) => void,
  dices: any,
  setDices: (arg0: any) => void,
  users: User[],
  setUsers: (arg0: any) => void,
  currentUser: User,
  setCurrentUser: (arg0: any) => void,
  characters: Character[],
  setCharacters: (arg0: any) => void
) => {
  socket.on("connect", () => {
    console.log("Socket is connected: " + socket.connected);
  });

  socket.on("disconnect", () => {
    console.log("Socket is disconnected: " + !socket.connected);
  });

  socket.on("CONFIRM_USER_SET", (response) => {
    setCurrentUser(response.currentUser);

    if (response.currentUser.role === RoleEnum.Player) {
      navigate("/player");
    }
    if (response.currentUser.role === RoleEnum.GM) {
      navigate("/gameMaster");
    }
  });

  socket.on("TRIPLEDICE", (resultDice: DiceResult[]) => {
    setDices(resultDice);
  });

  socket.on("CHARACTERS", (characters) => {
    setCharacters(characters);
  });
};
