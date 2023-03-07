import { PlayerCharacter } from "./characters/PlayerCharacter";

export enum RoleEnum {
  Player = "Player",
  GM = "GM",
}

export enum UserNameEnum {
  Halim = "Halim",
  Pierre = "Pierre",
  Matthieu = "Matthieu",
}

export type User = {
  _id: string;
  name: UserNameEnum;
  role: RoleEnum;
  currentCharacter?: PlayerCharacter;
  characters?: PlayerCharacter[];
};
