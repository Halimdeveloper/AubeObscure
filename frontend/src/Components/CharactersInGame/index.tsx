import * as React from 'react';
import { Box, Container } from "@mui/material";
import "./style.css"
import { usePlayerStore } from '../../stores/PlayerStore';
import { PlayerCharacter } from '../../models/characters/PlayerCharacter';



export default function CharactersInGame() {

  // Dans votre composant qui a besoin d'accéder aux données des "PlayerCharacter"
  const players = usePlayerStore((state: any) => state.playerCharacters);
  const setPlayers = usePlayerStore((state: any) => state.setPlayerCharacters);


  return (
    <div className="charactersInGame">
      <Container>
        {players.map((player: PlayerCharacter, index: number) => (
          <div key={index}>{player.lastName}</div>
        ))}
      </Container>
      <span>Coucou</span>
    </div>

  )
}