export function getTripleDiceScore (): string {
    const Dice1 = Math.round(6*Math.random())
    const Dice2 = Math.round(6*Math.random())
    const Dice3 = Math.round(6*Math.random())

  return ` ${Dice1} | ${Dice2} | ${Dice3} = ${Dice1+Dice2+Dice3} `
}
  
