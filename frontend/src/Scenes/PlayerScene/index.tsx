

import { Grid } from "@mui/material";
import EventGameMaster from "../../Components/EventGameMaster";
import GameHistory from "../../Components/GameHistory";
import PlayerDashBoard from "../../Components/PlayerDashBoard";
import ToolBar from "../../Components/ToolBar";

export default function PlayerScene() {


    return (
        <>
            <Grid container spacing={2} >
                <Grid item xs={6}>
                    <Grid container spacing={2}>
                        <Grid item xs>
                            <PlayerDashBoard />
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
            <ToolBar />
        </>

    );
}
