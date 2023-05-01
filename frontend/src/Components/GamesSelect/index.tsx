import React, { useEffect, useState } from "react";
import {
  Select,
  MenuItem,
  Box,
  Button,
  SelectChangeEvent,
  Typography,
  TextField,
} from "@mui/material";
import { Game } from "../../models/Game";

interface ActiveGamesProps {
  activeGames: Game[];
  onSelectGame: (gameId: string) => void;
  onCreateGame: (game: Game) => void;
}

const GamesSelect: React.FC<ActiveGamesProps> = ({
  activeGames,
  onSelectGame,
  onCreateGame,
}) => {
  const [selectedGame, setSelectedGame] = useState("");
  const [newGameName, setNewGameName] = useState("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedGame(event.target.value as string);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSelectGame(selectedGame);
  };

  const handleCreateGame = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onCreateGame({ name: newGameName });
  };

  useEffect(() => {
    if (activeGames.length === 1) {
      setSelectedGame(activeGames[0]._id);
    }
  }, [activeGames]);

  return (
    <div>
      <Typography variant='h6'>Parties en cours :</Typography>
      <Box component='form' onSubmit={handleSubmit}>
        <Select
          value={selectedGame}
          onChange={handleChange}
          label='Partie'
          fullWidth
          placeholder='Selectionner une partie'
        >
          {activeGames.map((game) => (
            <MenuItem key={game._id} value={game._id}>
              <Typography>{game.name}</Typography>
            </MenuItem>
          ))}
        </Select>
        <Button
          sx={{ my: 2 }}
          type='submit'
          variant='contained'
          color='primary'
          fullWidth
        >
          Rejoindre
        </Button>
      </Box>
      <Typography variant='h6'>Cree une partie :</Typography>
      <Box component='form' onSubmit={handleCreateGame}>
        <TextField
          fullWidth
          label='Nom de la nouvelle partie'
          variant='outlined'
          value={newGameName}
          onChange={(event) => setNewGameName(event.target.value)}
          sx={{ mr: 2 }}
        />
        <Button
          sx={{ my: 2 }}
          type='submit'
          variant='contained'
          color='primary'
          fullWidth
        >
          Creer
        </Button>
      </Box>
    </div>
  );
};

export default GamesSelect;
