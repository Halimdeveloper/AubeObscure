import { Box } from '@mui/material'
import Dice from './Dice'
import EnemyCharacter from './Enemy'
import './style.css'

export default function ToolBar() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
      <Dice />
      <EnemyCharacter />
    </Box>
  )
}
