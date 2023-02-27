import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Components/Home";
import { useEffect } from "react";
import PlayerScene from "./Scenes/PlayerScene";
import GameMasterScene from "./Scenes/GameMasterScene";
import { useDiceStore } from "./stores/DiceStore";
import { useUserStore } from "./stores/UserStore";
import { socketEvents } from "./Sockets/events";
import { useCharacterStore } from "./stores/CharacterStore";
import { User } from "./models/User";
import { Character } from "./models/characters/Character";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
    socketEvents(navigate, dices, setDices, users, setUsers, currentUser, setCurrentUser, characters, setCharacters);
  };
  useEffect(() => {
    initSockets(navigate, dices, setDices, users, setUsers, currentUser, setCurrentUser, characters, setCharacters);
  }, [
    navigate, dices, setDices, users, setUsers, currentUser, setCurrentUser, characters, setCharacters
  ]);

  return (
    <div className="app">
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/player" element={<PlayerScene />} />
          <Route path="/gameMaster" element={<GameMasterScene />} />
        </Routes>
        <ToastContainer />
      </main>
    </div>

  );
}

export default App;
