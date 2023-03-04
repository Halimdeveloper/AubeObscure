
import { Box, Grid } from "@mui/material";
import React from "react";
import EventGameMaster from "../../Components/EventGameMaster";
import GameHistory from "../../Components/GameHistory";
import InfosPlayersForGameMaster from "../../Components/InfosPlayersForGameMaster";
import ToolBar from "../../Components/ToolBar";

export default function GameMasterScene() {


    return (

        <Box
            sx={{
                display: 'grid',
                gridAutoFlow: 'row',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gridTemplateRows: 'repeat(10, 1fr)',
                height: 'calc(100vh - 64px)',
                gap: 1,
                mt: 1,
            }}
        >
            <Box sx={{ gridColumn: '1', gridRow: '1 / 10' }}><InfosPlayersForGameMaster /></Box>
            <Box sx={{ gridColumn: '2', gridRow: '1 / 10' }}><GameHistory /></Box>
            <Box sx={{ gridColumn: '3 / 5', gridRow: '1 / 10' }}><EventGameMaster /></Box>
            <Box sx={{ gridColumn: '1 / 5', gridRow: '10 / 11' }}><ToolBar /></Box>
        </Box>

    );
}
