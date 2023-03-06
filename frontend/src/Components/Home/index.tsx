import React, { useEffect, useState } from "react";
import "./style.css";
import { setCurrentUser } from "../../Sockets/emit";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import { RoleEnum, User, UserNameEnum } from "../../models/User";
import { Box, Card, Typography } from "@mui/material";
import { Container } from "@mui/material";
import axios from "axios";
import { Login } from "@mui/icons-material";
import AuthComponent from "../Auth/authComponent";
import useApi from "../../services/axiosSingleton";
import { toast } from "react-toastify";
import GamesSelect from "../GamesSelect";
import { Game } from "../../models/Game";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const api = useApi();
  const navigate = useNavigate();
  const [idUser, setIdUser] = useState(0);
  const [games, setGames] = useState([]);
  const [role, setRole] = useState(RoleEnum.Player);

  const handleLogin = (username: string, password: string) => {
    // TODO: Appeler une API ou authentifier l'utilisateur localement avec les informations d'identification fournies
    // console.log(`Logging in with username '${username}' and password '${password}'`);

    console.log("username", username);
    api.post("/auth/signin", {
      name: username,
      password: password,
    }).then(({ data }) => {
      setIdUser(data.userId);
      api.defaults.headers.authorization = `Bearer ${data.token}`;
      api.get("/games").then(({ data }) => {
        console.log("data", data);
        setGames(data);
      }).catch((err) => {
        toast.error("Erreur lors de la connexion");
      }
      );

    }).catch((err) => {
      toast.error("Erreur lors de la connexion");
    }
    );


  };

  const handleSignup = (username: string, password: string) => {
    // TODO: Appeler une API ou enregistrer l'utilisateur localement avec les informations d'identification fournies
    console.log(`Signing up with username '${username}' and password '${password}'`);
  };

  const handleGamesSelect = (nameGame: string) => {
    //call api to enter in this game
    api.get(`/games/${nameGame}/joinGame?role=${role}`).then(({ data }) => {
      if (role === RoleEnum.Player) {
        navigate("/player");
      } else {
        navigate("/master");
      }
    }).catch((err) => {
      if (err.response.status === 401) {
        toast.error("Action non autorisée");
      }
      else {
        toast.error("Une erreur est survenue");
      }

    }
    );
  }

  const handleCreateNewGame = (game: Game) => {
    api.post("/games", game).then(({ data }) => {
      console.log("data", data);
      setGames(data);
    }).catch((err) => {
      toast.error("Erreur lors de la connexion");
    }
    );
  }




  return (
    <div>
      <Container maxWidth="md" sx={{ p: 2 }}>
        <Typography variant="h1" fontSize="4rem" fontWeight={500}>
          Aube Obscure
        </Typography>
      </Container>

      <Container maxWidth="md">
        <Box sx={{ display: "grid", gap: 2 }}>
          <Card elevation={3} sx={{ p: 2 }}>
            <Box sx={{ py: 1 }}>
              <Typography align="justify">
                Vous êtes sur le point d'entrer dans un monde de ténèbres et de
                mystères, où la magie règne en maître et où chaque choix peut
                mener à la gloire ou à la mort. Aube Obscure est un jeu de rôle
                qui vous plongera dans un univers fantastique rempli de
                créatures étranges et de lieux mystérieux.
              </Typography>
            </Box>
            <Box sx={{ py: 1 }}>
              <Typography align="justify">
                En tant qu'aventurier, vous explorerez des donjons sombres et
                dangereux, combattrez des ennemis redoutables, résoudrez des
                énigmes complexes et découvrirez des trésors fabuleux. Vous
                devrez faire preuve de courage, de sagesse et d'habileté pour
                survivre dans ce monde impitoyable.
              </Typography>
            </Box>
            <Box sx={{ py: 1 }}>
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
            <Box sx={{ py: 1 }}>
              <Typography align="justify">
                Aube Obscure vous propose une expérience de jeu immersive, où la
                liberté de choix et l'imagination sont les seules limites.
                Alors, êtes-vous prêt à affronter les ténèbres ? Le sort du
                monde repose entre vos mains."
              </Typography>
            </Box>
          </Card>
          <Card elevation={3} sx={{ p: 2 }}>
            {!idUser && <AuthComponent onLogin={handleLogin} onSignup={handleSignup} />}
            {idUser ? <GamesSelect activeGames={games} onSelectGame={handleGamesSelect} onCreateGame={handleCreateNewGame} /> : null}
          </Card>
        </Box>
      </Container>
    </div>
  );
}
