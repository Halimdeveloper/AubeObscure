
import { Box, Grid } from "@mui/material";
import React from "react";
import EventGameMaster from "../../Components/EventGameMaster";
import GameHistory from "../../Components/GameHistory";
import InfosPlayersForGameMaster from "../../Components/InfosPlayersForGameMaster";

export default function GameMasterScene() {


    return (
        <Grid container spacing={2} >
            <Grid item xs={6}>
                <Grid container spacing={2}>
                    <Grid item xs>
                        <InfosPlayersForGameMaster />
                    </Grid>
                    <Grid item xs>
                        <GameHistory />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid item xs={12}>
                    <EventGameMaster />
                </Grid>
            </Grid>
        </Grid >

    );
}
