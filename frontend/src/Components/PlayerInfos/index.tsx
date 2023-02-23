import { Button } from "@mui/material"
import "./style.css"


export default function PlayerInfos() {



  return (
    <div className="playerInfos">
      <div>
      <h1>Name</h1>
      <h2>Stats</h2>
      </div>
      <div className="playerButton">
      <Button variant="outlined" color="success" style={{ backgroundColor: "black" }} >Stats</Button>
      <Button variant="outlined" color="success" style={{ backgroundColor: "black" }}>Inventaire</Button>
      </div>
    </div>

  )
}

