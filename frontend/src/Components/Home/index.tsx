import React, { useEffect, useState } from "react";
import "./style.css"
import { setCurrentUser } from "../../Sockets/emit";
import { User } from "../../models/User";




export default function Home() {
    const [namePlayer, setNamePlayer] = useState("");



    const sendNamePlayerToServer = (user: User) => {
        setCurrentUser(user)
    }

    return <div>
        <p>Quel est ton nom ?</p>
        <input type="text" name="name" value={namePlayer} onChange={e => setNamePlayer(e.target.value)} />

        <p>Choisis ton camp  {namePlayer} :</p>
        <button onClick={() => sendNamePlayerToServer({ type: "Player", name: namePlayer })}>Player</button>
        <button onClick={() => sendNamePlayerToServer({ type: "GM", name: namePlayer })}>GM</button>

    </div>
}
