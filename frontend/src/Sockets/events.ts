import useSocket from ".";
import { Character } from "../models/characters/Character";
import { DiceResult } from "../models/history/Dice";
import { User, RoleEnum } from "../models/User";
const socket = useSocket();
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

  socket.on("GAME", (game) => {
    //init list of characters in game
    const charactersInGame = game.players.map(
      (player: any) => player.currentCharacter
    );
    if (charactersInGame.length) {
      setCharacters(charactersInGame);
    }
    //init list of game history events
    //TODO
  });
};
