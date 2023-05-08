import useSocket from ".";
import { User } from "../models/User";
import { EnemyCharacter } from "../models/characters/EnemyCharacter";

const socket = useSocket();
export const getTripleDiceScore = (currentUser: User, gameId: string) => {
  console.log("GET TRIPLE DICE: " + currentUser.name, gameId);
  if (!currentUser) {
    throw new Error("User name is required");
  }
  socket.emit("GET_TRIPLEDICE", { currentUser, gameId });
};

export const attackPlayer = (
  characterId: number,
  gameId: string,
  value?: number
) => {
  socket.emit("ATTACK_PLAYER", { characterId, gameId, value });
};

export const healthPlayer = (
  characterId: number,
  gameId: string,
  value?: number
) => {
  socket.emit("HEALTH_PLAYER", { characterId, gameId, value });
};


export const getGame = (gameId: string) => {
  socket.emit("GET_GAME", gameId);
};

export const addEnemyCharacterInEvent = (
  enemyCharacter: EnemyCharacter,
  gameId: string
) => {
  socket.emit("ADD_ENEMY_CHARACTER_IN_EVENT", { enemyCharacter, gameId });
};

export const emitRemoveEnemyCharacter = (
  enemyCharacterId: number,
  gameId: string
) => {
  socket.emit("REMOVE_ENEMY_CHARACTER", { enemyCharacterId, gameId });
};

export const emitEditEnemyCharacter = (
  enemyCharacter: EnemyCharacter,
  gameId: string,
  type?: string
) => {
  socket.emit("EDIT_ENEMY_CHARACTER", { enemyCharacter, gameId, type });
};
