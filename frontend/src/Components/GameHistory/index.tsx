import * as React from "react";
import { Box } from "@mui/material";
import "./style.css";
import { Container } from "@mui/material";
import { useDiceStore } from "../../stores/DiceStore";
import { useUserStore } from "../../stores/UserStore";
import { DiceResult } from "../../models/Dice";

export default function GameHistory() {
  // Dans votre composant qui a besoin d'accéder aux données de "dices"
  const dices: DiceResult[] = useDiceStore((state: any) => state.dices);


  return (
    <div className="gameHistory">
      <h1>Historique</h1>

      <Container className="historyBox" maxWidth="sm" disableGutters={true}>
        {dices.map((dice: DiceResult, id) => (
          <Box className="historyItem" key={id}>
            <p>{`${dice.userName}: ${dice.dice1} + ${dice.dice2} = ${dice.dice1 + dice.dice2}`}</p>
          </Box>
        ))
        }
      </Container>
    </div>
  );
}
