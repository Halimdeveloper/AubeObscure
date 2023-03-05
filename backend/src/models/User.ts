/* eslint-disable no-unused-vars */
import { Schema, model } from "mongoose";
import { PlayerCharacter } from "./characters/PlayerCharacter";
import uniqueValidator from "mongoose-unique-validator";

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
  name: string;
  role?: RoleEnum;
  currentCharacter?: PlayerCharacter;
  characters?: PlayerCharacter[];
  inGame?: boolean;
  password: string;
};

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true, unique: true },
    role: { type: String },
    currentCharacter: { type: Object },
    characters: { type: Array },
    inGame: { type: Boolean },
    password: { type: String, required: true },
  },
  { collection: "users" }
);

userSchema.plugin(uniqueValidator);

// 3. Create a Model.
const User = model<IUser>("User", userSchema);

export default User;
