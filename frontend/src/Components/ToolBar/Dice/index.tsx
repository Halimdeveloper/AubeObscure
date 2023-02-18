import { Button } from "@mui/material";
import { getTripleDiceScore } from "../../../Sockets/emit";
import "./style.css"



export default function Dice() {


    return (
        <>
        
        <Button onClick={()=>{getTripleDiceScore()}}>Dice 6 

        </Button>
        </>
    );
}
