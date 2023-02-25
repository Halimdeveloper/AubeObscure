/* eslint-disable no-unused-vars */
import { PlayerCharacter } from "./characters/PlayerCharacter";

export enum RoleEnum {
  Player,
  GM,
}

export enum UserNameEnum {
  Halim,
  Pierre,
  Matthieu,
}

export type User = {
  name: UserNameEnum;
  role: RoleEnum;
  currentCharacter?: PlayerCharacter;
  characters?: PlayerCharacter[];
};
