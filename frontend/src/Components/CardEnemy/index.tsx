import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { EnemyCharacter } from "../../models/characters/EnemyCharacter";
import { LifeBarEnemy } from "../LifeBar";
import CancelIcon from "@mui/icons-material/Cancel";
import HeartIcon from "@mui/icons-material/Favorite";
import {
  emitEditEnemyCharacter,
  emitRemoveEnemyCharacter,
} from "../../Sockets/emit";
import { useGameStore } from "../../stores/GameStore";
import Slider from "@mui/material/Slider";
import { Box, Menu } from "@mui/material";
import { useEffect, useState } from "react";
import { Game } from "../../models/Game";
import { User } from "../../models/User";
import { useUserStore } from "../../stores/UserStore";

interface Props {
  enemy: EnemyCharacter
}

export default function CardEnemy({
  enemy: {
    firstName,
    url,
    lastName,
    description,
    id,
    health,
    maxHealth,
    ...props
  },
}: Props) {
  const game = useGameStore((state: any) => state.game) as Game;
  const currentUser = useUserStore((state: any) => state.currentUser) as User;
  const isGameMaster = useGameStore((state: any) => state.isGameMaster);
  // search  this item in the store
  const enemyCharacter = game.enemyCharacters.find(
    (e: EnemyCharacter) => e.id === id
  );

  const [temporaryHealth, setTemporaryHealth] = useState(health);

  function removeEnemyCharacter() {
    try {
      emitRemoveMonster(id, game._id)
      emitRemoveEnemyCharacter(id, game._id);
    } catch (error) {
      console.log(error)
    }
  }

  function saveEditLife() {
    enemyCharacter.health = temporaryHealth;
    emitEditEnemyCharacter(enemyCharacter, game._id);
  }

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card
      sx={{
        maxWidth: '30%',
        minWidth: '200px',
        margin: '1rem 0',
      }}
    >
      <CardHeader
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title={firstName}
        subheader={lastName ? lastName : 'Commun'}
      />
      <CardMedia
        component='img'
        height='300px'
        image={url}
        alt={firstName}
        sx={{
          aspectRatio: '1/1',
          maxWidth: '100%',
          margin: '0 auto',
        }}
      />
      <CardContent>
        <LifeBarEnemy character={{ health: health, maxHealth: maxHealth }} />
        <Typography variant='body2' color='text.secondary'>
          {description}
        </Typography>
      </CardContent>

      {isGameMaster(currentUser._id) && (
        <CardActions disableSpacing>
          <IconButton aria-label='cancel' onClick={removeEnemyCharacter}>
            <CancelIcon />
          </IconButton>
          <IconButton
            id='basic-button'
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup='true'
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <HeartIcon />
          </IconButton>
          <Menu
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={() => {
              handleClose(), saveEditLife();
            }}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Box sx={{ width: 300, padding: "30px 25px 0px 25px" }}>
              <Slider
                aria-label='Small steps'
                onChange={(e) => setTemporaryHealth(e.target.value)}
                value={temporaryHealth}
                step={1}
                marks
                min={0}
                max={maxHealth}
                valueLabelDisplay='on'
              />
            </Box>
          </Menu>
        </CardActions>
      )}
    </Card>
  )
}
