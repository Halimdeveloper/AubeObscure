import { Character } from "./Character";

export interface PlayerCharacter extends Character {
  level: number;
  experience: number;
  class: string;
  stats: {};
}