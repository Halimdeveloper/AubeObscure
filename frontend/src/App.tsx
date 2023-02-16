import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Player from "./Components/Player";
import GameMaster from "./Components/GameMaster";
import React, { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./Components/global/Topbar";
import CharactersContext from "./Context/CharactersContext";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [userCharacter, setUserCharacter] = useState({
    firstName: "",
    lastName: "",
    life: 0,
    lifeMax: 0,
  });

  return (
    <CharactersContext.Provider value={{
      userCharacter,
      setUserCharacter,
    }}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/player" element={<Player />} />
                <Route path="/gameMaster" element={<GameMaster />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </CharactersContext.Provider>
  );
}

export default App;
