import { PlayerCharacter } from "./characters/PlayerCharacter";

export type User = {
  name: string;
  type: string;
  currentCharacter: PlayerCharacter;
  characters: PlayerCharacter[];
};
