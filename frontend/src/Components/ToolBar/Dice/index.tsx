import { Button } from "@mui/material";
import { getTripleDiceScore } from "../../../Sockets/emit";
import { useUserStore } from "../../../stores/UserStore";
import { toast } from "react-toastify";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useGameStore } from "../../../stores/GameStore";
import CasinoIcon from "@mui/icons-material/Casino";

export default function Dice() {
  const currentUser = useUserStore((state: any) => state.currentUser);
  const game = useGameStore((state: any) => state.game);
  const navigate = useNavigate();

  function rollDices() {
    try {
      console.log("ROLL DICES TRIGGERED PAR :" + currentUser.name);
      getTripleDiceScore(currentUser, game._id);
    } catch (error: any) {
      console.log(error);
      toast.error("erreur lors du lancer de dé dans l'objet Dice");
    }
  }

  return (
    <>
      <Button
        onClick={() => {
          rollDices();
        }}
      >
        <CasinoIcon />
      </Button>
    </>
  );
}
