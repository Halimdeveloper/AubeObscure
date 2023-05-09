import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Modal,
  Typography,
} from '@mui/material'
import { addEnemyCharacterInEvent } from '../../../Sockets/emit'
import { toast } from 'react-toastify'
import './style.css'
import { useGameStore } from '../../../stores/GameStore'
import CoronavirusIcon from '@mui/icons-material/Coronavirus'
import { useState } from 'react'
import { useEffect } from 'react'
import useApi from '../../../services/axiosSingleton'
import { EnemyCharacter } from '../../../models/characters/EnemyCharacter'
import { Game } from '../../../models/Game'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70vw',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export default function Enemy() {
  const api = useApi()
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [monster, setMonster] = useState<EnemyCharacter[]>([])
  const game = useGameStore((state: any) => state.game) as Game

  useEffect(() => {
    if (open) {
      api.get('/enemyCharacters').then((res) => {
        setMonster(res.data)
      })
    }
  }, [open])

  function sendMonsterToBattle(monster: EnemyCharacter) {
    try {
      addEnemyCharacterInEvent(monster, game._id)
      toast.success('Monstre ajouté au combat')
      handleClose()
    } catch (error) {
      // eslint-disable-next-line quotes
      toast.error("erreur lors de l'ajout du monstre au combat")
    }
  }

  return (
    <>
      {' '}
      <Button onClick={handleOpen}>
        <CoronavirusIcon />
      </Button>
      {open}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography
            id='modal-modal-title'
            variant='h6'
            component='h2'
            textAlign='center'
          >
            Selection de monstre
          </Typography>
          {monster.length
            ? monster.map((monster) => {
              return (
                <Card sx={{ maxWidth: 200 }} key={monster.id}>
                  <CardActionArea
                    onClick={() => {
                      sendMonsterToBattle(monster)
                    }}
                  >
                    <CardMedia
                      component='img'
                      height='300'
                      image={monster.url}
                      alt={monster.firstName}
                    />
                  </CardActionArea>
                </Card>
              )
            })
            : null}
        </Box>
      </Modal>
    </>
  )
}
