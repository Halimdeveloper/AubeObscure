import { User } from "./User";

export type Game = {
  _id: string;
  name: string;
  description?: string;
  players?: User[];
  gm?: User;
};
