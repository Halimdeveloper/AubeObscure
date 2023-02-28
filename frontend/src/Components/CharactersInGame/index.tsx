import * as React from "react";
import {
  Avatar,
  Box,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import "./style.css";
import { useCharacterStore } from "../../stores/CharacterStore";
import { PlayerCharacter } from "../../models/characters/PlayerCharacter";
import { Character } from "../../models/characters/Character";

export default function CharactersInGame() {
  // Dans votre composant qui a besoin d'accéder aux données des "PlayerCharacter"
  const characters: Character[] = useCharacterStore(
    (state: any) => state.characters
  );
  const setCharacters = useCharacterStore((state: any) => state.setCharacters);

  function generate(element: React.ReactElement) {
    return characters.map((character) => React.cloneElement(element));
  }

  return (
    // (
    //   <div className="charactersInGame">
    //     {characters.map((character: PlayerCharacter, index: number) => (
    //       <Container key={index} onClick={() => console.log("oui monsieur")}>
    //         <div>{character.firstName}</div>
    //       </Container>
    //     ))}
    //   </div>
    // );
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid item xs={12} md={6}>
        <Typography variant="h6" component="div">
          Personnages en jeu
        </Typography>
        <List dense={true}>
          {characters.map( (character: PlayerCharacter, index: number) => (
            <ListItem key={index} onClick={() => console.log(character)}>
              <ListItemAvatar>
                    <Avatar  src="https://freedesignfile.com/upload/2020/12/Viking-warrior-avatar-vector.jpg"/>
                  </ListItemAvatar>
              <ListItemText primary={character.firstName}
                    secondary={character.family["fatherFamily"] + "-" + character.family["motherFamily"]} />
            </ListItem>
          ) ) }
        </List>
      </Grid>
    </Box>
  );
}
