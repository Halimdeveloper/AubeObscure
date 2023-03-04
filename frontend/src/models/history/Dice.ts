import HistoryEvent from "./HistoryEvent";
import { UserNameEnum } from "../User";

export interface DiceResult extends HistoryEvent {
  dice1: number;
  dice2: number;
  userName: UserNameEnum;
}
