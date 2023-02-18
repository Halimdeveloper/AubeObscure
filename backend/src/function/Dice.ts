export function getTripleDiceScore (): string {
    let Dice1 = Math.round(6*Math.random())
    let Dice2 = Math.round(6*Math.random())
    let Dice3 = Math.round(6*Math.random())

  return ` ${Dice1} | ${Dice2} | ${Dice3} = ${Dice1+Dice2+Dice3} `
}
  
