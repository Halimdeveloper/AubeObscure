import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Components/Home";
import Player from "./Components/PlayerDashBoard";
import GameMaster from "./Components/GameMaster";
import React, { useEffect, useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./Components/global/Topbar";
import CharactersContext from "./Contexts/CharactersContext";
import SocketContext from "./Contexts/SocketContext";
import PlayerScene from "./Scenes/PlayerScene";
import GameMasterScene from "./Scenes/GameMasterScene";
import { PlayerCharacter } from "./models/characters/PlayerCharacter";
import DicesContext from "./Contexts/DicesContext";
import { useDiceStore } from "./stores/DiceStore";
import { usePlayerStore } from "./stores/PlayerStore";
import { socketEvents } from "./Sockets/events";
import { socket } from "./Sockets";


function App() {

  const [theme, colorMode] = useMode();
  const navigate = useNavigate();

  const initSockets = (navigate: any) => {
    
    const dices = useDiceStore((state:any) => state.dices);
    const setDices = useDiceStore((state:any) => state.setDices);
    const players = usePlayerStore((state:any) => state.players);
    const setPlayers = usePlayerStore((state:any) => state.setPlayers);

    socketEvents(navigate, dices, setDices, players, setPlayers);
  };
  
initSockets(navigate);

  return (
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="app">
              <main className="content">
                <Topbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/player" element={<PlayerScene />} />
                  <Route path="/gameMaster" element={<GameMasterScene />} />
                </Routes>
              </main>
            </div>
          </ThemeProvider>
        </ColorModeContext.Provider>
  );
}

export default App;
