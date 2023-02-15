import React from "react";
import MainGrid from "./Grid/grid";
import BasicGrid from "./Grid/grid";

interface Props {
    players: Array<{
        firstName: string;
        lastName: string;
        age: number;
    }>;
}


export default function gameMaster() {

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


    function toto(players: any) {
        return players.map((player: any) => {
            return (<li key={player.firstName + player.lastName}>{player.firstName} {player.lastName}</li>)
        })
    }

    function handleChange(event: any) {
        console.log(event.target.value);
    }


    return (
            // <BasicGrid />
        <MainGrid players={players}/>

    )
}

