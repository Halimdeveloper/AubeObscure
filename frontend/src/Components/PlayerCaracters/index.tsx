import * as React from 'react';
import { Box } from "@mui/material";
import { io } from "socket.io-client"; 
import Player from '../Player';
import { useContext, useEffect } from 'react';
import CharactersContext from '../../Context/CharactersContext';

const socket = io("http://localhost:3333")

export default function PlayerCaracters() {
  const { userCharacter, setUserCharacter } = useContext(CharactersContext)

  useEffect(() => {
    socket.on("CHARACTERS", (characteres) => {
      console.log(characteres)
      setUserCharacter(characteres)
    })

    socket.emit("GET_CHARACTERS", {})

    return () => {
      socket.off("CHARACTERS")
    }
  }, [])



  return (
    <Box>
      <h1>My Characteres</h1>
      <p>{userCharacter.lastName}</p>
      <p>{userCharacter.firstName}</p>
      <p>{userCharacter.life + '/' + userCharacter.lifeMax}</p>

    </Box>
  )
}

