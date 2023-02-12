import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Player from './Components/Player'
import GameMaster from './Components/GameMaster'
import './App.css'
import React from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/player" element={<Player />} />
      <Route path="/gameMaster" element={<GameMaster />} />
    </Routes>
  )
}

export default App
