import { Box, Paper } from "@mui/material";
import CharactersInGame from "../CharactersInGame";
import GameHistory from "../GameHistory";
import PlayerInfos from "../PlayerInfos";
import "./style.css"



export default function PlayerDashBoard() {


    return (
        <>
            <Paper>
                <PlayerInfos />
            </ Paper>
            <Paper>
                <CharactersInGame />
            </Paper>
        </>
    );
}
