import { UserNameEnum } from "../User";
import { Character } from "./Character";

export interface PlayerCharacter extends Character {
  class: string;
  stats: {
    agility: number;
    fighting: number;
    erudition: number;
    influence: number;
    toughness: number;
    survival: number;
  };
  userName: UserNameEnum;
}
