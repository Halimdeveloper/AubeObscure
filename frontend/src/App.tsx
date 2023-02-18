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
import { socket, initSockets } from "./Sockets";
import PlayerScene from "./Scenes/PlayerScene";
import GameMasterScene from "./Scenes/GameMasterScene";





function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [userCharacter, setUserCharacter] = useState({
    firstName: "",
    lastName: "",
    life: 0,
    lifeMax: 0,
  });
  const navigate = useNavigate()



  useEffect(() => {
    initSockets(navigate)
  }, [[initSockets]])


  return (
    <CharactersContext.Provider value={{
      userCharacter,
      setUserCharacter,
    }}>
      <SocketContext.Provider value={socket}>
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
      </SocketContext.Provider>
    </CharactersContext.Provider>
  );
}

export default App;
