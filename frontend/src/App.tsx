import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Components/Home";
import { useEffect } from "react";
import PlayerScene from "./Scenes/PlayerScene";
import GameMasterScene from "./Scenes/GameMasterScene";
import { useDiceStore } from "./stores/DiceStore";
import { usePlayerStore } from "./stores/PlayerStore";
import { socketEvents } from "./Sockets/events";
import { useCharacterStore } from "./stores/CharacterStore";


function App() {

  const navigate = useNavigate();
  const dices = useDiceStore((state: any) => state.dices);
  const setDices = useDiceStore((state: any) => state.setDices);
  const players = usePlayerStore((state: any) => state.players);
  const setPlayers = usePlayerStore((state: any) => state.setPlayers);
  const characters = useCharacterStore((state: any) => state.characters);
  const setCharacters = useCharacterStore((state: any) => state.setCharacters);

  const initSockets = (
    navigate: any,
    dices: any,
    setDices: any,
    players: any,
    setPlayers: any,
    characters: any,
    setCharacters: any
  ) => {
    socketEvents(navigate, dices, setDices, players, setPlayers, characters, setCharacters);
  };
  useEffect(() => {
    initSockets(navigate, dices, setDices, players, setPlayers, characters, setCharacters);
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
