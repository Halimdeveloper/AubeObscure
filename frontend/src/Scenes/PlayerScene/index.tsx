
import { Box } from "@mui/material";
import React from "react";
import MainGrid from "../../Components/GameMaster/Grid/grid";
import PlayerCharacters from "../../Components/PlayerCharacters";

export default function PlayerScene() {
    type Player = {
        firstName: string
        lastName: string
        age: number

    }
    const players: Array<Player> = [{
        firstName: "Gandalf",
        lastName: "LeGris",
        age: 56
    },
    {
        firstName: "Arthur",
        lastName: "LeBlanc",
        age: 32
    },
    {
        firstName: "Zoro",
        lastName: "LeRoux",
        age: 25
    }]

    return (
        <grid> 


            

        </grid>
    );
}
