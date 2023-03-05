import { Box, Tab, Tabs, Typography } from "@mui/material";
import "./style.css";
import { getCharaters } from "../../Sockets/emit";
import { useEffect } from "react";
import { useCharacterStore } from "../../stores/CharacterStore";
import { Character } from "../../models/characters/Character";
import { PlayerCharacter } from "../../models/characters/PlayerCharacter";
import { useUserStore } from "../../stores/UserStore";
import React from "react";

export default function PlayerInfos() {
  useEffect(() => {
    getCharaters();
  }, []);

  const characters: PlayerCharacter[] = useCharacterStore(
    (state: any) => state.characters
  );
  const setCharacters = useCharacterStore((state: any) => state.setCharacters);
  const currentUser = useUserStore((state: any) => state.currentUser);

  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "primary.main",
          borderRadius: ".25rem .25rem 0 0",
          height: "5.7%",
        }}
      >
        <Typography sx={{ px: 1 }} variant="h6" textAlign={"center"}>
          Personnage joueur
        </Typography>
      </Box>
      <Box sx={{ p: 1 }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Stats" />
          <Tab label="Inventaire" />
          <Tab label="Abilités" />
        </Tabs>
        {characters
          .filter(
            (character: PlayerCharacter) =>
              character.userName === currentUser.name
          )
          .map((character: PlayerCharacter) => {
            return (
              <div key={character.id}>
                <Typography>{character.lastName}</Typography>
                <Typography>{character.firstName}</Typography>
                <Typography>
                  {character.health + "/" + character.maxHealth}
                </Typography>
                <>
                  {Object.keys(character.stats).map((stat: string, index) => {
                    console.log(typeof stat);
                    return (
                      <Typography key={index}>
                        {stat}: {character.stats[stat]}
                      </Typography>
                    );
                  })}
                </>
              </div>
            );
          })}
      </Box>
    </>
  );
}
