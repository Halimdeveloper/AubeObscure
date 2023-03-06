import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
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

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 1, height:"100%" }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  console.log("characters: " + characters.map((c) => c.firstName));

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
      <Box sx={{ p: 1, height:"100%" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Stats" {...a11yProps(0)} />
          <Tab label="Inventaire" {...a11yProps(1)} />
          <Tab label="Abilités" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0} >
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
                    Vie: {character.health + "/" + character.maxHealth}
                  </Typography>
                  <Card sx={{ height: "100%", position:"relative" }}>
                    <CardHeader title="Statistiques" className="paperStatsHeader" titleTypographyProps={{variant:'h6'}} sx={{ p:0 }} />
                    <CardContent className="paperStatsContent">
                      <Typography>
                        {Object.keys(character.stats).map(
                          (stat: string, index) => {
                            console.log(typeof stat);
                            return (
                              <Typography key={index}>
                                {stat}: {character.stats[stat]}
                              </Typography>
                            );
                          }
                        )}
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
    </>
  );
}

