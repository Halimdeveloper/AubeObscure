/* eslint-disable no-unused-vars */
import { Schema, model } from "mongoose";
import { PlayerCharacter } from "./characters/PlayerCharacter";

export enum RoleEnum {
  Player = "Player",
  GM = "GM",
}

export enum UserNameEnum {
  Pierre = "Pierre",
  Halim = "Halim",
  Matthieu = "Matthieu",
}
// 1. Create an interface representing a document in MongoDB.
export type IUser = {
  name: UserNameEnum;
  role: RoleEnum;
  currentCharacter?: PlayerCharacter;
  characters?: PlayerCharacter[];
};

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    currentCharacter: { type: Object },
    characters: { type: Array },
  },
  { collection: "users" }
);

// 3. Create a Model.
const User = model<IUser>("User", userSchema);

export default User;
