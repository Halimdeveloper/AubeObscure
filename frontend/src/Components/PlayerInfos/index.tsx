import { Button } from "@mui/material";
import "./style.css";
import { getCharaters } from "../../Sockets/emit";
import { useEffect } from "react";
import { useCharacterStore } from "../../stores/CharacterStore";
import { Character } from "../../models/characters/Character";
import { PlayerCharacter } from "../../models/characters/PlayerCharacter";
import { useUserStore } from "../../stores/UserStore";

export default function PlayerInfos() {
  useEffect(() => {
    getCharaters();
  }, []);

  const characters = useCharacterStore((state: any) => state.characters);
  const setCharacters = useCharacterStore((state: any) => state.setCharacters);
  const currentUser = useUserStore((state: any) => state.currentUser);

  return (
    <div className="playerInfos">
      <div>
        <h1>Name</h1>
        <h2>Stats</h2>
        {characters
          .filter(
            (character: PlayerCharacter) =>
              character.userName === currentUser.name
          )
          .map((character: Character) => {
            return (
              <div key={character.id}>
                <h3>{character.lastName}</h3>
                <h4>{character.firstName}</h4>
                <h4>{character.health + "/" + character.maxHealth}</h4>
              </div>
            );  
          })}
      </div>
      <div className="playerButton">
        <Button variant="outlined">Stats</Button>
        <Button variant="outlined">Inventaire</Button>
      </div>
    </div>
  );
}
