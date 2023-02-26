import { Character } from "./Character";

export interface EnemyCharacter extends Character {
  type: string;
  difficulty: number;
}