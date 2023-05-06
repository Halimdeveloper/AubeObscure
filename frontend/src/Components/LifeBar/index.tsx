import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Box } from "@mui/material";

interface Props {
  character: {
    health: number;
    maxHealth: number;
  };
}

export function LifeBar({ character: { health, maxHealth } }: Props) {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <BorderLinearProgress
        variant='determinate'
        value={(health / maxHealth) * 100}
        sx={{ mt: 1 }}
      />
    </Box>
  );
}

export function LifeBarEnemy({ character: { health, maxHealth } }: Props) {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#ff1a1a" : "#e83030",
    },
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <BorderLinearProgress
        variant='determinate'
        value={(health / maxHealth) * 100}
        sx={{ mt: 1 }}
      />
    </Box>
  );
}
