import React, { useEffect, useState } from "react";
import "./style.css";
import { setCurrentUser } from "../../Sockets/emit";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import { RoleEnum } from "../../models/User";

export default function Home() {
  const [userName, setUserName] = useState("");

  const setUserLocally = (event: SelectChangeEvent) => {
    setUserName(event.target.value as string);
  };

  return (
    <div className="bodyHome">
      <strong className="titreGlobal">Aube Obscure</strong>
      <div className="pHomeCss">
        <div>
          Vous êtes sur le point d'entrer dans un monde de ténèbres et de
          mystères, où la magie règne en maître et où chaque choix peut mener à
          la gloire ou à la mort. Aube Obscure est un jeu de rôle qui vous
          plongera dans un univers fantastique rempli de créatures étranges et
          de lieux mystérieux.
        </div>
        <div>
          En tant qu'aventurier, vous explorerez des donjons sombres et
          dangereux, combattrez des ennemis redoutables, résoudrez des énigmes
          complexes et découvrirez des trésors fabuleux. Vous devrez faire
          preuve de courage, de sagesse et d'habileté pour survivre dans ce
          monde impitoyable.
        </div>
        <div>
          Votre personnage est déterminé aléatoirement, adapté votre stratégie
          en fonction de votre ligné et de vos dons. Seul la persistence de vos
          connaissance et de vos objets sera transmis à vos descendants.
        </div>
        <div>
          Aube Obscure vous propose une expérience de jeu immersive, où la
          liberté de choix et l'imagination sont les seules limites. Alors,
          êtes-vous prêt à affronter les ténèbres ? Le sort du monde repose
          entre vos mains."
        </div>
      </div>
      <div className="formCss">
        <h2 className="titreSecond">Quel est ton nom ?</h2>
        {/* <input type="text" name="name" value={namePlayer} onChange={e => setNamePlayer(e.target.value)} /> */}
        <div className="formContainer">
          <FormControl fullWidth style={{ color: "rgba(7, 0, 124, 1)" }}>
            <InputLabel id="demo-simple-select-label">Votre nom :</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={userName}
              label="om"
              onChange={setUserLocally}
            >
              <MenuItem value={"Halim"}>Halim</MenuItem>
              <MenuItem value={"Pierre"}>Pierre</MenuItem>
              <MenuItem value={"Matthieu"}>Matthieu</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="buttonContainer">
          <Button
            style={{ fontSize: "1.5rem" }}
            variant="contained"
            onClick={() =>
              setCurrentUser({
                name: userName,
                role: RoleEnum.Player,
              })
            }
          >
            Player
          </Button>
          <Button
            style={{ fontSize: "1.5rem" }}
            variant="contained"
            onClick={() =>
              setCurrentUser({
                name: userName,
                role: RoleEnum.GM,
              })
            }
          >
            GM
          </Button>
        </div>
      </div>
      <div></div>
    </div>
  );
}
