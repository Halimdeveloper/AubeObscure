import { Button } from "@mui/material";
import { getTripleDiceScore } from "../../../Sockets/emit";
import { useUserStore } from "../../../stores/UserStore";
import "./style.css"



export default function Dice() {
  const currentUser = useUserStore((state: any) => state.currentUser);

  return (
    <>
      <Button onClick={() => { getTripleDiceScore(currentUser) }}>Dice 6</Button>
    </>
  );
}
