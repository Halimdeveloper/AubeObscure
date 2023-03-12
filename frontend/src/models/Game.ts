import { EnemyCharacter } from "./characters/EnemyCharacter";
import { NonPlayerCharacter } from "./characters/NonPlayerCharacter";
import { PlayerCharacter } from "./characters/PlayerCharacter";
import { User } from "./User";

export type Game = {
  _id: string;
  name: string;
  description?: string;
  players?: User[];
  gm?: User;
  playerCharacters: PlayerCharacter[];
  nonPlayerChatacters: NonPlayerCharacter[];
  enemyCharacters: EnemyCharacter[];
};
