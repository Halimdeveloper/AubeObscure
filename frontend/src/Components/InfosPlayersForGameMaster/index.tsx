import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { PlayerCharacter } from "../../models/characters/PlayerCharacter";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { attackPlayer, healthPlayer } from "../../Sockets/emit";
import { useEffect } from "react";
import { LifeBar } from "../LifeBar";
import { useGameStore } from "../../stores/GameStore";
import { Game } from "../../models/Game";
import { getGame } from "../../Sockets/emit";
import { toast } from "react-toastify";

export default function infoPlayerForGameMaster() {
  const game: Game = useGameStore((state: any) => state.game);
  const playerCharacters = game.players?.map(
    (player) => player.currentCharacter
  ) as PlayerCharacter[];
  try {
    useEffect(() => getGame(game._id), []);
  } catch (error) {
    toast.error("Outch, la game n'a pas pu etre trouvée");
  }

  useEffect(() => {}, []);

  return (
    <div className="infoPlayerForGameMaster">
      {playerCharacters &&
        playerCharacters.map((character: PlayerCharacter) => {
          return (
            <Accordion key={character.id}>
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
                        <Typography key={key}>
                          {key + " : " + character.stats[key]}
                        </Typography>
                      );
                    });
                  }

                  if (key === "family") {
                    return Object.keys(character.family).map((key: string) => {
                      return (
                        <Typography key={key}>
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
                    <Typography key={key}>
                      {key + " : " + character[key as keyof PlayerCharacter]}
                    </Typography>
                  );
                })}
                <Button
                  variant="contained"
                  sx={{ mr: 2 }}
                  onClick={() => {
                    attackPlayer(character.id, game._id, 1);
                  }}
                >
                  Punch it !
                </Button>
                <Button
                  variant="contained"
                  onClick={() => {
                    healthPlayer(character.id, game._id, 1);
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
