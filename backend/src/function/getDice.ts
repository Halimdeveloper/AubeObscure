import { IUser } from "src/models/User";
import { DiceResult } from "src/models/history/Dice";

export function getTripleDiceScore(user: IUser): DiceResult {
  const dice = {
    sides: 6,
    roll: function () {
      const randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    },
  };

  return {
    dice1: dice.roll(),
    dice2: dice.roll(),
    userName: user.name,
    timeStamp: Date.now(),
    id: Date.now(),
    type: "dice",
  };
}
