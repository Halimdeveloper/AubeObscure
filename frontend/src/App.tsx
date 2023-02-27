import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Components/Home";
import { useEffect, useMemo } from "react";
import PlayerScene from "./Scenes/PlayerScene";
import GameMasterScene from "./Scenes/GameMasterScene";
import { useDiceStore } from "./stores/DiceStore";
import { useUserStore } from "./stores/UserStore";
import { socketEvents } from "./Sockets/events";
import { useCharacterStore } from "./stores/CharacterStore";
import { User } from "./models/User";
import { Character } from "./models/characters/Character";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { themeOptions } from "./themes/theme";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AppBar, Box, Button, CssBaseline, IconButton, Toolbar, Typography } from "@mui/material";

function App() {
  const navigate = useNavigate();
  const dices = useDiceStore((state: any) => state.dices);
  const setDices = useDiceStore((state: any) => state.setDices);
  const users = useUserStore((state: any) => state.users);
  const setUsers = useUserStore((state: any) => state.setUsers);
  const currentUser = useUserStore((state: any) => state.currentUser);
  const setCurrentUser = useUserStore((state: any) => state.setCurrentUser);
  const characters = useCharacterStore((state: any) => state.characters);
  const setCharacters = useCharacterStore((state: any) => state.setCharacters);

  const initSockets = (
    navigate: (arg0: string) => void,
    dices: any,
    setDices: (arg0: any) => void,
    users: User[],
    setUsers: (arg0: any) => void,
    currentUser: User,
    setCurrentUser: (arg0: any) => void,
    characters: Character[],
    setCharacters: (arg0: any) => void
  ) => {
    socketEvents(
      navigate,
      dices,
      setDices,
      users,
      setUsers,
      currentUser,
      setCurrentUser,
      characters,
      setCharacters
    );
  };
  useEffect(() => {
    initSockets(
      navigate,
      dices,
      setDices,
      users,
      setUsers,
      currentUser,
      setCurrentUser,
      characters,
      setCharacters
    );
  }, [
    navigate,
    dices,
    setDices,
    users,
    setUsers,
    currentUser,
    setCurrentUser,
    characters,
    setCharacters,
  ]);

  const theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Aube Obscure
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player" element={<PlayerScene />} />
        <Route path="/gameMaster" element={<GameMasterScene />} />
      </Routes>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
