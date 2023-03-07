import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { PlayerCharacter } from "../../models/characters/PlayerCharacter";
import { useCharacterStore } from "../../stores/CharacterStore";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { attackPlayer, healthPlayer } from "../../Sockets/emit";
import { useEffect } from "react";
import LifeBar from "../LifeBar";

export default function infoPlayerForGameMaster() {
  const characters = useCharacterStore((state: any) => state.characters);
  const setCharacters = useCharacterStore((state: any) => state.setCharacters);

  useEffect(() => {
  }, []);

  return (
    <div className="infoPlayerForGameMaster">
      {characters &&
        characters.map((character: PlayerCharacter) => {
          return (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <Typography>
                    {character.firstName + " " + character.lastName}
                  </Typography>
                  <Box sx={{ flexGrow: 1 }}>
                    <LifeBar character={character} />
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                {Object.keys(character).map((key: string) => {
                  if (key === "stats") {
                    return Object.keys(character.stats).map((key: string) => {
                      return (
                        <Typography>
                          {key + " : " + character.stats[key]}
                        </Typography>
                      );
                    });
                  }

                  if (key === "family") {
                    return Object.keys(character.family).map((key: string) => {
                      return (
                        <Typography>
                          {key +
                            " : " +
                            character.family[
                            key as keyof {
                              fatherFamily: string;
                              motherFamily: string;
                            }
                            ]}
                        </Typography>
                      );
                    });
                  }

                  return (
                    <Typography>
                      {key + " : " + character[key as keyof PlayerCharacter]}
                    </Typography>
                  );
                })}
                <Button
                  variant="contained"
                  sx={{ mr: 2 }}
                  onClick={() => {
                    attackPlayer(character.id, 1);
                  }}
                >
                  Punch it !
                </Button>
                <Button
                  variant="contained"
                  onClick={() => {
                    healthPlayer(character.id, 1);
                  }}
                >
                  Health it !
                </Button>
              </AccordionDetails>
            </Accordion>
          );
        })}
    </div>
  );
}
