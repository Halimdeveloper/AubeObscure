import React, { useEffect, useState } from "react";
import "./style.css";
import { setCurrentUser } from "../../Sockets/emit";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import { RoleEnum, UserNameEnum } from "../../models/User";
import { Box, Card, Typography } from "@mui/material";
import { Container } from "@mui/material";

export default function Home() {
  const [userName, setUserName] = useState("");

  const setUserLocally = (event: SelectChangeEvent) => {
    setUserName(event.target.value as string);
  };

  return (
    <div className="bodyHome">
      <Container maxWidth="md" sx={{ p: 2 }}>
        <Typography variant="h1" fontSize="4rem" fontWeight={500}>
          Aube Obscure
        </Typography>
      </Container>

      <Container maxWidth="md">
        <Box sx={{ display: "grid", gap: 2 }}>
          <Card elevation={3} sx={{ p: 2 }}>
            <Box sx={{py:1}}>
              <Typography align="justify">
                Vous êtes sur le point d'entrer dans un monde de ténèbres et de
                mystères, où la magie règne en maître et où chaque choix peut
                mener à la gloire ou à la mort. Aube Obscure est un jeu de rôle
                qui vous plongera dans un univers fantastique rempli de
                créatures étranges et de lieux mystérieux.
              </Typography>
            </Box>
            <Box sx={{py:1}}>
              <Typography align="justify">
                En tant qu'aventurier, vous explorerez des donjons sombres et
                dangereux, combattrez des ennemis redoutables, résoudrez des
                énigmes complexes et découvrirez des trésors fabuleux. Vous
                devrez faire preuve de courage, de sagesse et d'habileté pour
                survivre dans ce monde impitoyable.
              </Typography>
            </Box>
            <Box sx={{py:1}}>
              <Typography align="justify">
                Votre personnage est déterminé aléatoirement, adapté votre
                stratégie en fonction de votre ligné et de vos dons. Seul la
                persistence de vos connaissance et de vos objets sera transmis à
                vos descendants. Aube Obscure vous propose une expérience de jeu
                immersive, où la liberté de choix et l'imagination sont les
                seules limites. Alors, êtes-vous prêt à affronter les ténèbres ?
                Le sort du monde repose entre vos mains."
              </Typography>
            </Box>
          </Card>
          <Card elevation={3} sx={{ p: 2 }}>
            <Typography variant="h5" sx={{ pb: 2 }}>
              Identifie-toi :
            </Typography>
            <Box sx={{ py: 2 }}>
              {/* <input type="text" name="name" value={namePlayer} onChange={e => setNamePlayer(e.target.value)} /> */}
              <div className="formContainer">
                <FormControl fullWidth style={{ color: "rgba(7, 0, 124, 1)" }}>
                  <InputLabel id="name-select-label">Votre nom</InputLabel>
                  <Select
                    labelId="name-select-label"
                    id="name-select"
                    value={userName}
                    label="Votre nom"
                    onChange={setUserLocally}
                  >
                    <MenuItem value={"Halim"}>Halim</MenuItem>
                    <MenuItem value={"Pierre"}>Pierre</MenuItem>
                    <MenuItem value={"Matthieu"}>Matthieu</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </Box>
            <div className="buttonContainer">
              <Button
                variant="contained"
                onClick={() =>
                  setCurrentUser({
                    name: UserNameEnum[userName],
                    role: RoleEnum.Player,
                  })
                }
                sx={{ mr: 1 }}
              >
                Joueur
              </Button>
              <Button
                variant="contained"
                onClick={() =>
                  setCurrentUser({
                    name: UserNameEnum[userName],
                    role: RoleEnum.GM,
                  })
                }
                sx={{ ml: 1 }}
              >
                Maître de jeu
              </Button>
            </div>
          </Card>
        </Box>
      </Container>
    </div>
  );
}
