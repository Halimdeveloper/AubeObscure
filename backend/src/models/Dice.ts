import { UserNameEnum } from "./User";

export type DiceResult = {
  dice1: number;
  dice2: number;
  userName: UserNameEnum;
  timestamp: number;
};
