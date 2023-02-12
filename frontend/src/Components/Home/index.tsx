import React, { useEffect, useState } from "react";
import "./style.css"
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
const socket = io("http://localhost:3333")




export default function Home() {
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [lastPong, setLastPong] = useState("");
    const [namePlayer, setNamePlayer] = useState("");
    const navigate = useNavigate();
    type User = {
        type: string,
        name: string,
    }
    useEffect(() => {
        socket.on('connect', () => {
            setIsConnected(true);
        });

        socket.on('disconect', () => {
            setIsConnected(false);
        });

        socket.on("CONFIRM_USER_SET", (user) => {
            if (user.type === "Player") {
                navigate("/player")
            }
            if (user.type === "GM") {
                navigate("/gameMaster")
            }
        });

        return () => {
            socket.off('connect');
            socket.off('disconect');
            socket.off('CONFIRM_USER_SET');
        };
    }, []);

    const setCurrentUser = (user: User) => {
        socket.emit("SET_USER", user)
    }

    return <div>
        <p>Quel est ton nom ?</p>
        <input type="text" name="name" value={namePlayer} onChange={e => setNamePlayer(e.target.value)} />

        <p>Connected: {'' + isConnected}</p>
        <p>Last pong: {lastPong || '-'}</p>
        <p>Choisis ton camp  {namePlayer} :</p>
        <button onClick={() => setCurrentUser({ type: "Player", name: namePlayer })}>Player</button>
        <button onClick={() => setCurrentUser({ type: "GM", name: namePlayer })}>GM</button>

    </div>
}
