import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Typography } from '@mui/material';
import { PlayerCharacter } from '../../models/characters/PlayerCharacter';
import { useCharacterStore } from '../../stores/CharacterStore';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from "@mui/material/styles";
import LinearProgress, {
    linearProgressClasses,
} from "@mui/material/LinearProgress";
import { attackPlayer, getCharaters, healthPlayer } from '../../Sockets/emit';
import { useEffect } from 'react';


export default function infoPlayerForGameMaster() {
    const { characters } = useCharacterStore();
    const setCharacters = useCharacterStore((state: any) => state.setCharacters);

    useEffect(() => {
        console.log(getCharaters())
        setCharacters(getCharaters())
    }, [])


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
        <div className="infoPlayerForGameMaster">
            {characters && characters.map((character: PlayerCharacter) => {
                return (
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography sx={{ minWidth: '50%' }}>{character.firstName + ' ' + character.lastName}</Typography>
                            <Box sx={{ flexGrow: 1 }}>
                                <BorderLinearProgress variant="determinate" value={character.health / character.maxHealth * 100} sx={{ mt: 1 }} />
                            </Box>

                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                            <Button variant="contained" sx={{ mr: 2 }} onClick={() => { attackPlayer(character.id, 1) }}>Punch it !</Button>
                            <Button variant="contained" onClick={() => { healthPlayer(character.id, 1) }}>Health it !</Button>
                        </AccordionDetails>
                    </Accordion>
                )
            })
            }
        </div>

    )
}

