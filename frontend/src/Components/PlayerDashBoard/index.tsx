import { Box } from "@mui/material";
import { flexbox, height } from "@mui/system";
import React from "react";
import CharactersInGame from "../CharactersInGame";
import PlayerCreationForm from "../forms/PlayerCreationForm";
import GameHistory from "../GameHistory";
import PlayerCharacters from "../PlayerCharacters";
import PlayerInfos from "../PlayerInfos";
import "./style.css"



export default function PlayerDashBoard() {


    return (
        <>
            <div className="playerInfosContainer">
                <PlayerInfos />
                <GameHistory />
            </div>
            <CharactersInGame />
        </>
    );
}
