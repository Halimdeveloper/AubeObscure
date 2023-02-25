import { createContext } from 'react';
import { PlayerCharacter } from '../models/characters/PlayerCharacter';

type CharactersContextType = {
    playerCharacters: PlayerCharacter[];

    setPlayerCharacters: any;
}

const CharactersContext = createContext(
    {} as CharactersContextType
);

export default CharactersContext;