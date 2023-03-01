import { UserNameEnum } from "../User";
import { Character } from "./Character";

export type stats = {
  [key: string]: number;
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
    [agility:string]: number;
    fighting: number;
    erudition: number;
    influence: number;
    toughness: number;
    survival: number;
  };
  userName: UserNameEnum;
}
