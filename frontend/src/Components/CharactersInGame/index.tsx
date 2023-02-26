import * as React from 'react';
import { Box, Container } from "@mui/material";
import "./style.css"
import { useCharacterStore } from '../../stores/CharacterStore';
import { PlayerCharacter } from '../../models/characters/PlayerCharacter';



export default function CharactersInGame() {

  // Dans votre composant qui a besoin d'accéder aux données des "PlayerCharacter"
  const characters = useCharacterStore((state: any) => state.characters);
  const setCharacters = useCharacterStore((state: any) => state.setCharacters);


  return (
    <div className="charactersInGame">
      <Container>
        {characters.map((character: PlayerCharacter, index: number) => (
          <div key={index}>{character.lastName}</div>
        ))}
      </Container>
      <span>Coucou</span>
    </div>

  )
}