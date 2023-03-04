import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Typography } from '@mui/material';
import { PlayerCharacter } from '../../models/characters/PlayerCharacter';
import { useCharacterStore } from '../../stores/CharacterStore';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { attackPlayer, getCharaters, healthPlayer } from '../../Sockets/emit';
import { useEffect } from 'react';
import LifeBar from '../LifeBar';


export default function infoPlayerForGameMaster() {
    const { characters } = useCharacterStore();
    const setCharacters = useCharacterStore((state: any) => state.setCharacters);

    useEffect(() => {
        console.log(getCharaters())
        setCharacters(getCharaters())
    }, [])

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
                            <LifeBar charactere={character} />
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

