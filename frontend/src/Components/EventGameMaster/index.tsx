import { Box, Paper, Typography } from '@mui/material'
import { useGameStore } from '../../stores/GameStore'
import { EnemyCharacter } from '../../models/characters/EnemyCharacter'
import CardEnemy from '../CardEnemy'

export default function EventGameMaster() {
  const game = useGameStore((state: any) => state.game)

  return (
    <>
      <Paper sx={{ height: '100%' }}>
        <Box
          sx={{
            backgroundColor: 'primary.main',
            borderRadius: '.25rem .25rem 0 0',
            height: '4%',
          }}
        >
          <Typography sx={{ px: 1 }} variant='h6' textAlign={'center'}>
            Événements du jeu
          </Typography>
        </Box>
        <Box
          sx={{
            height: '96%',
            overflowY: 'scroll',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          {game.enemyCharacters ? (
            game.enemyCharacters.map((enemy: EnemyCharacter) => {
              return <CardEnemy enemy={enemy} />
            })
          ) : (
            <pre>pas de monstre</pre>
          )}
        </Box>
      </Paper>
    </>
  )
}
