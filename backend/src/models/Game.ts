import { Schema, model, ObjectId } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import { IUser } from "./User";

// 1. Create an interface representing a document in MongoDB.
export type IGame = {
  _id: ObjectId;
  name: string;
  description?: string;
  players: IUser[];
  gm: IUser | null;
};

// 2. Create a Schema corresponding to the document interface.
const gameSchema = new Schema<IGame>(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
    players: [{ type: Object, required: true }],
    gm: { type: Object },
  },
  { collection: "games" }
);

gameSchema.plugin(uniqueValidator);

// 3. Create a Model.
const Game = model<IGame>("Game", gameSchema);

export default Game;
