import { User } from "src/models/User";
import { DiceResult } from "src/models/Dice";

export function getTripleDiceScore(user: User): DiceResult {
  const dice = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    },
  };

  return {
    dice1: dice.roll(),
    dice2: dice.roll(),
    userName: user.name,
    timestamp: Date.now(),
  };
}
