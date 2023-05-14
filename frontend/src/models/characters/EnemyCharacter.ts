import { Character } from "./Character";

export interface EnemyCharacter extends Character {
  _id: string;
  type: string;
  difficulty: number;
  url: string;
  description: string;
}
