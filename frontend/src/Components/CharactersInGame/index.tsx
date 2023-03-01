import * as React from "react";
import {
  Avatar,
  Box,
  Chip,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import "./style.css";
import { useCharacterStore } from "../../stores/CharacterStore";
import {
  FamilyEnum,
  PlayerCharacter,
} from "../../models/characters/PlayerCharacter";
import { Character } from "../../models/characters/Character";
import { UserNameEnum } from "../../models/User";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

export default function CharactersInGame() {
  // Dans votre composant qui a besoin d'accéder aux données des "PlayerCharacter"
  const characters: PlayerCharacter[] = useCharacterStore(
    (state: any) => state.characters
  );
  const setCharacters = useCharacterStore((state: any) => state.setCharacters);

  function generate(element: React.ReactElement) {
    return characters.map((character) => React.cloneElement(element));
  }

  const charactersHardCoded: PlayerCharacter[] = [
    {
      id: 1,
      firstName: "Haliiiiiim",
      lastName: "Haliiiiiim",
      health: 4,
      maxHealth: 5,
      family: {
        fatherFamily: FamilyEnum.Astrebrume,
        motherFamily: FamilyEnum.Astrebrume,
      },
      stats: {
        agility: 10,
        fighting: 8,
        erudition: 6,
        influence: 4,
        toughness: 7,
        survival: 9,
      },
      userName: UserNameEnum.Matthieu,
    },
    {
      id: 1,
      firstName: "Haliiiiiim",
      lastName: "Haliiiiiim",
      health: 4,
      maxHealth: 5,
      family: {
        fatherFamily: FamilyEnum.Astrebrume,
        motherFamily: FamilyEnum.Astrebrume,
      },
      stats: {
        agility: 7,
        fighting: 9,
        erudition: 5,
        influence: 8,
        toughness: 6,
        survival: 7,
      },
      userName: UserNameEnum.Matthieu,
    },
    {
      id: 1,
      firstName: "Haliiiiiim",
      lastName: "Haliiiiiim",
      health: 4,
      maxHealth: 5,
      family: {
        fatherFamily: FamilyEnum.Astrebrume,
        motherFamily: FamilyEnum.Astrebrume,
      },
      stats: {
        agility: 6,
        fighting: 7,
        erudition: 9,
        influence: 10,
        toughness: 8,
        survival: 5,
      },
      userName: UserNameEnum.Matthieu,
    },
    {
      id: 1,
      firstName: "Haliiiiiim",
      lastName: "Haliiiiiim",
      health: 4,
      maxHealth: 5,
      family: {
        fatherFamily: FamilyEnum.Astrebrume,
        motherFamily: FamilyEnum.Astrebrume,
      },
      stats: {
        agility: 8,
        fighting: 10,
        erudition: 4,
        influence: 6,
        toughness: 9,
        survival: 7,
      },
      userName: UserNameEnum.Matthieu,
    },
  ];

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  }));

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid item xs={12} md={6}>
        <Typography variant="h6" component="div" sx={{ px: 1 }}>
          Personnages en jeu
        </Typography>
        <List dense={true} sx={{ display: "flex", flexWrap: "wrap" }}>
          {/* {characters.map((character: PlayerCharacter, index: number) => ( */}
          {charactersHardCoded.map(
            (character: PlayerCharacter, index: number) => (
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
                  <BorderLinearProgress variant="determinate" value={50} sx={{ mt:1 }} />
                </Box>
              </ListItem>
            )
          )}
        </List>
      </Grid>
    </Box>
  );
}
