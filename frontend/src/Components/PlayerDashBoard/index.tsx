import CharactersInGame from "../CharactersInGame";
import GameHistory from "../GameHistory";
import PlayerInfos from "../PlayerInfos";
import "./style.css"



export default function PlayerDashBoard() {


    return (
        <>
            <div className="playerInfosContainer">
                <PlayerInfos />
                <GameHistory />
            </div>
            <CharactersInGame />
        </>
    );
}
