import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { EnemyCharacter } from '../../models/characters/EnemyCharacter'
import { LifeBarEnemy } from '../LifeBar'
import CancelIcon from '@mui/icons-material/Cancel'
import { emitRemoveMonster } from '../../Sockets/emit'
import { useGameStore } from '../../stores/GameStore'

interface Props {
  enemy: EnemyCharacter
}

export default function CardEnemy({
  enemy: { firstName, url, lastName, description, id, ...props },
}: Props) {
  const game = useGameStore((state: any) => state.game)

  function removeMonster() {
    try {
      emitRemoveMonster(id, game._id)
    } catch (error) {
      console.log(error)
    }
  }

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
        <LifeBarEnemy character={{ health: 100, maxHealth: 100 }} />
        <Typography variant='body2' color='text.secondary'>
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='cancel' onClick={removeMonster}>
          <CancelIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}
