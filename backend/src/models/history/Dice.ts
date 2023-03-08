import HistoryEvent from "./HistoryEvent";
import { UserNameEnum } from "../User";
import { ObjectId } from "mongoose";

export interface DiceResult extends HistoryEvent {
  dice1: number;
  dice2: number;
  userid: ObjectId;
  userName: string;
}
