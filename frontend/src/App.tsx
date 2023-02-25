import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Components/Home";
import { useEffect } from "react";
import PlayerScene from "./Scenes/PlayerScene";
import GameMasterScene from "./Scenes/GameMasterScene";
import { useDiceStore } from "./stores/DiceStore";
import { useUserStore } from "./stores/UserStore";
import { socketEvents } from "./Sockets/events";
import { useCharacterStore } from "./stores/CharacterStore";


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
    navigate: any,
    dices: any,
    setDices: any,
    users: any,
    setUsers: any,
    characters: any,
    setCharacters: any,
    currentUser: any,
    setCurrentUser: any
  ) => {
    socketEvents(navigate, dices, setDices, users, setUsers, characters, setCharacters, currentUser, setCurrentUser);
  };
  useEffect(() => {
    initSockets(navigate, dices, setDices, users, setUsers, characters, setCharacters, currentUser, setCurrentUser);
  }, []);

  return (
    <div className="app">
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/player" element={<PlayerScene />} />
          <Route path="/gameMaster" element={<GameMasterScene />} />
        </Routes>
      </main>
    </div>

  );
}

export default App;
