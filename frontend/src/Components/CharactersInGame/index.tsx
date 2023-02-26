import * as React from "react";
import { Box, Container } from "@mui/material";
import "./style.css";
import { useCharacterStore } from "../../stores/CharacterStore";
import { PlayerCharacter } from "../../models/characters/PlayerCharacter";

export default function CharactersInGame() {
  // Dans votre composant qui a besoin d'accéder aux données des "PlayerCharacter"
  const characters = useCharacterStore((state: any) => state.characters);
  const setCharacters = useCharacterStore((state: any) => state.setCharacters);

  return (
    <div className="charactersInGame">
      {characters.map((character: PlayerCharacter, index: number) => (
        <Container key={index} onClick={() => console.log("oui monsieur")}>
          <div>{character.firstName}</div>
        </Container>
      ))}
    </div>
  );
}
