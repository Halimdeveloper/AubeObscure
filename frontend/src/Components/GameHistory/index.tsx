import * as React from "react";
import { Box, Paper, Typography, useTheme } from "@mui/material";
import "./style.css";
import { useDiceStore } from "../../stores/DiceStore";
import { DiceResult } from "../../models/history/Dice";
import HistoryEvent from "../../models/history/HistoryEvent";

export default function GameHistory() {
  // Dans votre composant qui a besoin d'accéder aux données de "dices"
  const dices: DiceResult[] = useDiceStore((state: any) => state.dices);
  //test 
  const combatHistory: HistoryEvent[] = [
    {
      id: 1,
      type: "combat",
      timeStamp: 1234123,
    }
  ]



  const history: HistoryEvent[] = [

    ...dices,
    ...combatHistory,
  ].sort((a, b) => a.timeStamp - b.timeStamp)


  return (
    <Paper sx={{ m: 1 }}>
      <Typography sx={{ m: 1 }} variant="h5" textAlign={'center'}>Historique</Typography>
      <Box >
        {history.map((event) => {
          console.log(event)
          switch (event.type) {
            case "dice":
              const dice = event as DiceResult
              return (
                <Typography sx={{ color: 'primary.main', py: .5, mx: 1 }} >{`${dice.userName}: ${dice.dice1} + ${dice.dice2} = ${dice.dice1 + dice.dice2}`}</Typography>
              );
            case "combat":
              return (<Typography sx={{ py: .5, mx: 1 }} >{`Combat Event Test Message`}</Typography>)
            default:
              return null
          }
        })}
      </Box>
    </Paper >
  );
}
