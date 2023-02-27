import { Button } from "@mui/material";
import { getTripleDiceScore } from "../../../Sockets/emit";
import { useUserStore } from "../../../stores/UserStore";
import { toast } from "react-toastify";
import "./style.css"
import { useNavigate } from "react-router-dom";



export default function Dice() {
  const currentUser = useUserStore((state: any) => state.currentUser);
  const notify = (error: Error) => toast.error(`${error.message}`);
  const navigate = useNavigate();

  function rollDices() {
    try {
      getTripleDiceScore(currentUser);
    } catch (error: any) {
      navigate("/");
      notify(error);
    }
  }

  return (
    <>
      <Button onClick={() => { rollDices() }}>Dice 6</Button>
    </>
  );
}
