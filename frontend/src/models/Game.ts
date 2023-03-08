import { User } from "./User";

export type Game = {
  id?: string;
  name: string;
  description?: string;
  players?: User[];
  gm?: User;
};
