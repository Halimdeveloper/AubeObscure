import {
  Avatar,
  Box,
  Chip,
  Grid,
  List,
  ListItem,
  Typography,
} from '@mui/material'
import './style.css'
import { PlayerCharacter } from '../../models/characters/PlayerCharacter'
import { LifeBar } from '../LifeBar'
import { useGameStore } from '../../stores/GameStore'
import { Game } from '../../models/Game'
import { useUserStore } from '../../stores/UserStore'
import { User } from '../../models/User'

export default function CharactersInGame() {
  const game = useGameStore((state) => state.game) as Game
  const currentUser = useUserStore((state) => state.currentUser) as User

  //Get all characters in "game" store except the current user's character
  const otherCharacters: PlayerCharacter[] =
    game.players
      ?.filter((player) => player._id !== currentUser._id)
      .map((player) => player.currentCharacter)
      .filter(
        (character): character is PlayerCharacter => character !== undefined
      ) || []

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            backgroundColor: 'primary.main',
            borderRadius: '.25rem .25rem 0 0',
            height: '6%',
          }}
        >
          <Typography
            variant='h6'
            component='div'
            sx={{ px: 1 }}
            textAlign={'center'}
          >
            Personnages en jeu
          </Typography>
        </Box>

        <List dense={true} sx={{ display: 'flex', flexWrap: 'wrap' }}>
          {otherCharacters &&
            otherCharacters.map((character: PlayerCharacter, index: number) => (
              <ListItem
                sx={{ width: '50%' }}
                key={index}
                onClick={() => console.log(character)}
              >
                <Box sx={{ flexGrow: 1 }}>
                  <Chip
                    avatar={
                      <Avatar src='https://freedesignfile.com/upload/2020/12/Viking-warrior-avatar-vector.jpg' />
                    }
                    label={character.firstName}
                    variant='outlined'
                  />
                  <LifeBar character={character} />
                </Box>
              </ListItem>
            ))}
        </List>
      </Grid>
    </Box>
  )
}
