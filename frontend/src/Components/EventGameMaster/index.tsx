import { Box, Paper, Typography } from "@mui/material";

export default function EventGameMaster() {
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
            Événements du jeu
          </Typography>
        </Box>
        <Box sx={{ height: "96%" }}></Box>
      </Paper>
    </>
  );
}
