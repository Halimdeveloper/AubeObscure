import { Button, Typography } from "@mui/material";
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

  const characters:PlayerCharacter[] = useCharacterStore((state: any) => state.characters);
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
          .map((character: PlayerCharacter) => {
            return (
              <div key={character.id}>
                <Typography >{character.lastName}</Typography>
                <Typography >{character.firstName}</Typography>
                <Typography >{character.health + "/" + character.maxHealth}</Typography>
                <>  
                  {Object.keys(character.stats).map( (stat:string, index) => {
                    console.log(typeof stat)
                    return <Typography key={index}>{stat}: {character.stats[stat]}</Typography>
                  }) }
                </>
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
