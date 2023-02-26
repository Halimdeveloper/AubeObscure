/* eslint-disable no-unused-vars */
import { Character } from "./Character";

export enum UserNameEnum {
  Halim,
  Pierre,
  Matthieu,
}

export interface PlayerCharacter extends Character {
  class: string;
  stats: {
    agility: number;
    fighting: number;
    erudition: number;
    toughness: number;
    survival: number;
  };
  userName: UserNameEnum;
}
