import {
  Avatar,
  Box,
  Chip,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import "./style.css";
import { useCharacterStore } from "../../stores/CharacterStore";
import {
  FamilyEnum,
  PlayerCharacter,
} from "../../models/characters/PlayerCharacter";
import { UserNameEnum } from "../../models/User";
import LifeBar from "../LifeBar";

export default function CharactersInGame() {
  // Dans votre composant qui a besoin d'accéder aux données des "PlayerCharacter"
  const characters: PlayerCharacter[] = useCharacterStore(
    (state: any) => state.characters
  );

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid item xs={12} md={6}>
        <Box sx={{ backgroundColor: "primary.main", borderRadius: ".25rem .25rem 0 0", height: "6%" }}>
          <Typography variant="h6" component="div" sx={{ px: 1 }} textAlign={"center"}>
            Personnages en jeu
          </Typography>
        </Box>

        <List dense={true} sx={{ display: "flex", flexWrap: "wrap" }}>
          {characters && characters.map((character: PlayerCharacter, index: number) => (
            <ListItem
              sx={{ width: "50%" }}
              key={index}
              onClick={() => console.log(character)}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Chip
                  avatar={
                    <Avatar src="https://freedesignfile.com/upload/2020/12/Viking-warrior-avatar-vector.jpg" />
                  }
                  label={character.firstName}
                  variant="outlined"
                />
                <LifeBar character={character} />
              </Box>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Box>
  );
}
