import * as React from 'react';
import { Box } from "@mui/material";
import "./style.css"
import { useState } from 'react';
import { initSockets, socket } from '../../Sockets';
import { Container } from '@material-ui/core';





export default function GameHistory() {

  const [dices, setDices] = useState([null]);

  React.useEffect(() => {
    initSockets( null,dices, setDices)
  }, [[initSockets]])



  return (
        <div className="gameHistory">
      <h1>Historique</h1>
      <Container className='historyBox' maxWidth="sm" disableGutters={true}>{dices.map((dice, index) => (
          <React.Fragment key={index}>
            Le player obtient le jet {dice} 
            {/* TODO: changer le player en réel input et ne pas le print quand dice n'est pas encore print */}
            <br/>
          </React.Fragment>
        ))}</Container>
    </div>

  )
}
