
import PlayerDashBoard from "../../Components/PlayerDashBoard";
import ToolBar from "../../Components/ToolBar";
import "./style.css";

export default function PlayerScene() {

    return (

        <div className='mainGrid'>
            <div className="playerDashBoard">
                <PlayerDashBoard />
            </div>
            <div className="eventsBoard" />
            <div className="footer">
                <ToolBar />
            </div>
        </div>
    );
}
