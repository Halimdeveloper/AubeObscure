import { Button } from "@mui/material"
import "./style.css"
import { getCharaters } from "../../Sockets/emit"
import { useEffect } from "react"
import { useCharacterStore } from "../../stores/CharacterStore"
import { Character } from "../../models/characters/Character"


export default function PlayerInfos() {


  useEffect(() => {
    getCharaters()
  }, [])

  const characters = useCharacterStore((state: any) => state.characters)
  const setCharacters = useCharacterStore((state: any) => state.setCharacters)

  return (
    <div className="playerInfos">
      <div>
        <h1>Name</h1>
        <h2>Stats</h2>
        {characters.map((character: Character) => {
          return (
            <div key={character.id}>
              <h3>{character.lastName}</h3>
              <h4>{character.firstName}</h4>
              <h4>{character.health + '/' + character.maxHealth}</h4>

            </div>
          )
        })
        }
      </div>
      <div className="playerButton">
        <Button variant="outlined" color="success" style={{ backgroundColor: "black" }} >Stats</Button>
        <Button variant="outlined" color="success" style={{ backgroundColor: "black" }}>Inventaire</Button>
      </div>
    </div>

  )
}

