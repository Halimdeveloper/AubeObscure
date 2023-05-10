import { Box, Paper, Typography } from "@mui/material";
import "./style.css";
import { DiceResult } from "../../models/history/Dice";
import HistoryEvent from "../../models/history/HistoryEvent";
import { useGameStore } from "../../stores/GameStore";
import { useEffect, useState } from "react";

export default function GameHistory() {
  const game = useGameStore((state: any) => state.game);
  const [history, setHistory] = useState<HistoryEvent[]>([]);

  useEffect(() => {
    setHistory(game.events);
  }, [game.events]);

  return (
    <>
      <Paper sx={{ height: "100%" }}>
        <Box
          sx={{
            backgroundColor: "primary.main",
            borderRadius: ".25rem .25rem 0 0",
            height: "4%",
          }}
        >
          <Typography sx={{ px: 1 }} variant="h6" textAlign={"center"}>
            Historique
          </Typography>
        </Box>
        <Box sx={{ overflowY: "scroll", height: "96%" }}>
          {history &&
            history.map((event: HistoryEvent) => {
              switch (event.type) {
                case "dice6":
                  const dice = event as DiceResult;
                  return (
                    <Typography
                      variant="body2"
                      sx={{ color: "primary.main", py: 0.5, mx: 1 }}
                      key={event.id}
                    >{`${dice.userName}: ${dice.dice1} + ${dice.dice2} = ${
                      dice.dice1 + dice.dice2
                    }`}</Typography>
                  );
                case "combat":
                  return (
                    <Typography
                      variant="body2"
                      key={event.id}
                      sx={{ py: 0.5, mx: 1 }}
                    >{`Combat Event Test Message`}</Typography>
                  );
                default:
                  return null;
              }
            })}
        </Box>
      </Paper>
    </>
  );
}
