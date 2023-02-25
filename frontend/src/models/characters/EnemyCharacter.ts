import { Character } from "./Character";

export interface EnemyCharacter extends Character {
  type: string;
  strength: number;
  isBoss: boolean;
}