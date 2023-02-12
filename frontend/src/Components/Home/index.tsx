import React from "react";
import "./style.css"
import { useNavigate } from "react-router-dom";



export default function Home() {
    const navigate = useNavigate();


    const goToPlayer = (): void => {
        navigate("/player");
    }
    const goToMJ = (): void => {
        navigate("/mj");
    }

    return <div>
        <h1>Welcom</h1>
        <button className="customBtn" onClick={goToPlayer}>Player</button>
        <button className="customBtn" onClick={goToMJ}>MJ</button>

    </div>;
}
