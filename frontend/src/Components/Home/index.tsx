import { useState } from "react";
import "./style.css";
import { RoleEnum } from "../../models/User";
import {
  Box,
  Card,
  FormControlLabel,
  Radio,
  RadioGroup,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { Container } from "@mui/material";
import AuthComponent from "../Auth/authComponent";
import useApi from "../../services/axiosSingleton";
import { toast } from "react-toastify";
import GamesSelect from "../GamesSelect";
import { Game } from "../../models/Game";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../stores/UserStore";
import { useGameStore } from "../../stores/GameStore";

export default function Home() {
  const api = useApi();
  const navigate = useNavigate();
  const [idUser, setIdUser] = useState(0);
  const [games, setGames] = useState([]);
  const [role, setRole] = useState(RoleEnum.Player);
  const setCurrentUser = useUserStore((state: any) => state.setCurrentUser);
  const setGame = useGameStore((state: any) => state.setGame);

  const handleLogin = (username: string, password: string) => {
    api
      .post("/auth/signin", {
        name: username,
        password: password,
      })
      .then(({ data }) => {
        console.log("DATA INDEX.TSX HOME : ");
        console.log(JSON.stringify(data));
        setIdUser(data.user._id);
        api.defaults.headers.authorization = `Bearer ${data.token}`;
        //set current user in store
        setCurrentUser(data.user);
        console.log("CURRENT USER SET/RESET");
        //Get all games
        api
          .get("/games")
          .then(({ data }) => {
            setGames(data);
          })
          .catch((err) => {
            toast.error("Erreur lors de la connexion");
            console.log("Erreur Home : index.tsx l.39");
            console.log(err);
          });
      })
      .catch((err) => {
        toast.error("Erreur lors de la connexion");
        console.log("Erreur Home : index.tsx l.46");
        console.log(err);
      });
  };

  const handleSignup = (username: string, password: string) => {
    // TODO: Appeler une API ou enregistrer l'utilisateur localement avec les informations d'identification fournies
    console.log(
      `Signing up with username '${username}' and password '${password}'`
    );
  };

  const handleGameSelect = (gameId: string) => {
    //call api to enter in this game
    console.log(gameId);
    api
      .get(`/games/${gameId}/joinGame?role=${role}`)
      .then(({ data }) => {
        setGame({
          _id: gameId,
        });
        if (data.role === RoleEnum.Player) {
          navigate("/player");
        } else {
          navigate("/gameMaster");
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          toast.error("Action non autoris??e");
        } else {
          toast.error("Une erreur est survenue");
          console.log("Erreur Home : index.tsx l.73");
          console.log(err);
        }
      });
  };

  const handleCreateNewGame = (game: Game) => {
    api
      .post("/games", game)
      .then(({ data }) => {
        setGames(data);
        toast.success(`La partie ${game.name}`);
      })
      .catch((err) => {
        toast.error("Erreur lors de la connexion");
      });
  };

  const handleChange = (event: SelectChangeEvent<string>) => {
    setRole(event.target.value as any);
  };

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
                Vous ??tes sur le point d'entrer dans un monde de t??n??bres et de
                myst??res, o?? la magie r??gne en ma??tre et o?? chaque choix peut
                mener ?? la gloire ou ?? la mort. Aube Obscure est un jeu de r??le
                qui vous plongera dans un univers fantastique rempli de
                cr??atures ??tranges et de lieux myst??rieux.
              </Typography>
            </Box>
            <Box sx={{ py: 1 }}>
              <Typography align="justify">
                En tant qu'aventurier, vous explorerez des donjons sombres et
                dangereux, combattrez des ennemis redoutables, r??soudrez des
                ??nigmes complexes et d??couvrirez des tr??sors fabuleux. Vous
                devrez faire preuve de courage, de sagesse et d'habilet?? pour
                survivre dans ce monde impitoyable.
              </Typography>
            </Box>
            <Box sx={{ py: 1 }}>
              <Typography align="justify">
                Votre personnage est d??termin?? al??atoirement, adapt?? votre
                strat??gie en fonction de votre lign?? et de vos dons. Seul la
                persistence de vos connaissance et de vos objets sera transmis ??
                vos descendants. Aube Obscure vous propose une exp??rience de jeu
                immersive, o?? la libert?? de choix et l'imagination sont les
                seules limites. Alors, ??tes-vous pr??t ?? affronter les t??n??bres ?
                Le sort du monde repose entre vos mains."
              </Typography>
            </Box>
            <Box sx={{ py: 1 }}>
              <Typography align="justify">
                Aube Obscure vous propose une exp??rience de jeu immersive, o?? la
                libert?? de choix et l'imagination sont les seules limites.
                Alors, ??tes-vous pr??t ?? affronter les t??n??bres ? Le sort du
                monde repose entre vos mains."
              </Typography>
            </Box>
          </Card>
          <Card elevation={3} sx={{ p: 2 }}>
            {!idUser && (
              <AuthComponent onLogin={handleLogin} onSignup={handleSignup} />
            )}

            {idUser ? (
              <>
                <RadioGroup
                  row
                  sx={{ justifyContent: "center" }}
                  defaultValue={RoleEnum.Player}
                  name="radio-buttons-group"
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value={RoleEnum.Player}
                    control={<Radio />}
                    label="Joueur"
                  />
                  <FormControlLabel
                    value={RoleEnum.GM}
                    control={<Radio />}
                    label="Ma??tre de jeu"
                  />
                </RadioGroup>
                <GamesSelect
                  activeGames={games}
                  onSelectGame={handleGameSelect}
                  onCreateGame={handleCreateNewGame}
                />
              </>
            ) : null}
          </Card>
        </Box>
      </Container>
    </div>
  );
}
