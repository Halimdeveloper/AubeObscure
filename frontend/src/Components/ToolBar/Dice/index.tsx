import { Button } from "@mui/material";
import { getTripleDiceScore } from "../../../Sockets/emit";
import { useUserStore } from "../../../stores/UserStore";
import { toast } from "react-toastify";
import "./style.css"
import { useNavigate } from "react-router-dom";



export default function Dice() {
  const currentUser = useUserStore((state: any) => state.currentUser);
  const navigate = useNavigate();

  function rollDices() {
    try {
      console.log("ROLL DICES TRIGGERED PAR :" + currentUser.name);
      getTripleDiceScore(currentUser.name);
    } catch (error: any) {
      console.log(error);
      toast.error("erreur lors du lancer de dé dans l'objet Dice");
    }
  }

  return (
    <>
      <Button onClick={() => { rollDices() }}>Dice 6</Button>
    </>
  );
}
