import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import React from "react";
import RadioBtn from "../RadioBtn"
import ButtonRow from "./ButtonRow";

export default function gameMaster() {

    const handleLeftClick = () => {
        // votre logique pour le bouton gauche
    };

    const handleRightClick = () => {
        // votre logique pour le bouton droit
    };

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


    return <div>
        <h1>Bienvenue Maître </h1>
        <div>Voici les listes des joueurs du jour :<div>{toto(players)}</div></div> { /* stat + classe/atout/malus */}
        {/* <div>{RadioBtn("Gandalf", "Prout", "caca")}</div> */}
        <RadioBtn x="1" y="test2" z="test3" onChange={handleChange} />
        <p>Voici ce que les joueurs mort ont ramener au village :</p>
        <p>Voici ou vous en êtes dans l'histoire :</p>
        <p>Lancer la partie</p>
        <div>
            <ButtonRow
                leftButtonText={['Bouton gauche 1', 'Bouton gauche 2', 'Bouton gauche 3', 'Bouton gauche 4']}
                rightButtonText={['Bouton droit 1', 'Bouton droit 2', 'Bouton droit 3', 'Bouton droit 4']}
            />
        </div>
    </div>

}

