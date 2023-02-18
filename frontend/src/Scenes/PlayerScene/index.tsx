
import PlayerDashBoard from "../../Components/PlayerDashBoard";
import ToolBar from "../../Components/ToolBar";
import "./style.css";

export default function PlayerScene() {

    type Player = {
        firstName: string
        lastName: string
        age: number

    }
    const players: Array<Player> = [{
        firstName: "Gandalf",
        lastName: "LeGris",
        age: 56
    },
    {
        firstName: "Arthur",
        lastName: "LeBlanc",
        age: 32
    },
    {
        firstName: "Zoro",
        lastName: "LeRoux",
        age: 25
    }]

    return (

<div className='mainGrid'>
      <div className="playerDashBoard">
        <PlayerDashBoard />
      </div>
      <div className="eventsBoard"/>
      <div className="footer">
        <ToolBar />
      </div>
    </div>
    );
}
