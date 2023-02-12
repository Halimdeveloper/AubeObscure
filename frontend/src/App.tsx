import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Player from './Components/Player'
import MJ from './Components/MJ'
import './App.css'
import React from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/player" element={<div>Player</div>} />
      <Route path="/mj" element={<div>MJ</div>} />
    </Routes>
  )
}

export default App
