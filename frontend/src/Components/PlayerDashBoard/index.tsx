import { Box, Paper } from "@mui/material";
import CharactersInGame from "../CharactersInGame";
import GameHistory from "../GameHistory";
import PlayerInfos from "../PlayerInfos";
import "./style.css";

export default function PlayerDashBoard() {
  return (
    <Box
      sx={{
        display: "grid",
        gridAutoFlow: "row",
        gridTemplateRows: "repeat(10, 1fr)",
        gap: 1,
        height: "100%",
      }}
    >
      <Box sx={{ gridRow: "1 / 8" }}>
        <Paper sx={{ height: "100%" }}>
          <PlayerInfos />
        </Paper>
      </Box>
      <Box sx={{ gridRow: "8 / 11" }}>
        <Paper sx={{ height: "100%" }}>
          <CharactersInGame />
        </Paper>
      </Box>
    </Box>
  );
}
