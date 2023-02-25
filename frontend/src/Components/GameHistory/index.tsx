import * as React from 'react';
import { Box } from "@mui/material";
import "./style.css"
import { Container } from '@mui/material';
import { useDiceStore } from '../../stores/DiceStore';
import { usePlayerStore } from '../../stores/PlayerStore';


export default function GameHistory() {
  // Dans votre composant qui a besoin d'accéder aux données de "dices"
  const dices = useDiceStore((state:any) => state.dices);
  const setDices = useDiceStore((state:any) => state.setDices);

// Dans votre composant qui a besoin d'accéder aux données des "PlayerCharacter"
  const players = usePlayerStore((state:any) => state.playerCharacters);
  const setPlayers = usePlayerStore((state:any) => state.setPlayerCharacters);
  console.log(players);
  console.log(dices);

  return (
        <div className="gameHistory">
      <h1>Historique</h1>
      <Container className='historyBox' maxWidth="sm" disableGutters={true}>
        {dices.map((dice, index) => (
          <React.Fragment key={index}>
            Toto obtient le jet {dice} 
            {/* TODO: changer le player en réel input et ne pas le print quand dice n'est pas encore print */}
            <br/>
          </React.Fragment>
        ))}
      </Container>
      <Container>
      {players.map((player, index) => (
        <div key={index}>{player.lastName}</div>          
        ))}
      </Container>
    </div>

  )
}
