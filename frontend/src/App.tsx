import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './Components/Home'
import Player from './Components/Player'
import GameMaster from './Components/GameMaster'
import './App.css'
import React from 'react'
import io from 'socket.io-client'




function App() {
  const socket = io("http://localhost:3333")
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState("");
  const [namePlayer, setNamePlayer] = useState("");
  const navigate=useNavigate();
  type User={
    type:string,
    name:string,
  }
  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on('pong', () => {
      setLastPong("coucou");
    });

    socket.on("confirmUserSet",(user) => {
      // navigate("./lapagedesjoueursquivontsefairedefoncer")
      console.log("c'est ok")
    if (user.type === "Player") {
      navigate("/player")
    }
    else {
      navigate("/gameMaster")
    }
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('pong');
    };
  }, []);
 
  const sendPing = () => {
    console.log('Sending ping');
    socket.emit('ping');
  }
  const setCurrentUser = (user:User) => {
  socket.emit("setUser",user)
  }
  return (
    <div>
      <p>Quel est ton nom ?</p>
    <input type="text" name="name" value={namePlayer} onChange={e => setNamePlayer(e.target.value)}/> 

      <p>Connected: {'' + isConnected}</p>
      <p>Last pong: {lastPong || '-'}</p>
      <button onClick={sendPing}>Send ping</button>
      <p>Choisis ton camp  {namePlayer} :</p>
      <button onClick={() => setCurrentUser({type:"Player", name:namePlayer})}>Player</button>
      <button onClick={() => setCurrentUser({type:"GM" , name:namePlayer})}>GM</button>

     
  
      
    </div>
  );
}

export default App
