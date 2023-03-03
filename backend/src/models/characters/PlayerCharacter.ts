/* eslint-disable no-unused-vars */
import { Character } from "./Character";


export enum UserNameEnum {
  Halim = "Halim",
  Pierre = "Pierre",
  Matthieu = "Matthieu",
}


export enum FamilyEnum {
  Brisefer = "Brisefer",
  Astrebrume = "Astrebrume",
  Fulgurine = "Fulgurine",
  Clairebene = "Clairebene",
}

export interface PlayerCharacter extends Character {
  family: {
    fatherFamily: FamilyEnum;
    motherFamily: FamilyEnum;
  };
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
