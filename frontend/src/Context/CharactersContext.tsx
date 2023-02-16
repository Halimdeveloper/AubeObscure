import { createContext } from 'react';

type CharactersContextType = {
    userCharacter: {
        firstName: string;
        lastName: string;
        life: number;
        lifeMax: number;
    };

    setUserCharacter: React.Dispatch<React.SetStateAction<{
        firstName: string;
        lastName: string;
        life: number;
        lifeMax: number;

    }>>;
};

const CharactersContext = createContext(
    {} as CharactersContextType
);

export default CharactersContext;