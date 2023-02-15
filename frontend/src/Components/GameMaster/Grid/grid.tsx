import React from 'react';
import styled from 'styled-components';
import BasicTabs from '../../BasicTabs/BasicTabs';

interface Props {
    players: Array<{
        firstName: string;
        lastName: string;
        age: number;
    }>;
}

const StyledMainGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 100%;
  width: 100%;
  transition: all 0.5s ease-in-out;
`;

const StyledDiv = styled.div`
  &:hover {
    transform: scaleX(1.5);
    box-shadow: 0px 0px 10px 2px #000000;
  }
`;

const StyledStaticDiv = styled.div`
    transform: scaleX(1.5);
    box-shadow: 0px 0px 10px 2px #000000;
  }
`;

const MainGrid: React.FC<Props> = (props: Props) => {
  return (
    <StyledMainGrid>
      <StyledDiv style={{ 
        gridArea: '1 / 1 / 6 / 3',
        backgroundColor: 'cyan',
        transformOrigin: 'left',
      }}>
        {props.players.map((player: any) => {
          return (<li key={player.firstName + player.lastName}>{player.firstName} {player.lastName}</li>)
        })}
        <BasicTabs />
      </StyledDiv>
      <StyledStaticDiv style={{ 
        gridArea: '5 / 3 / 6 / 4',
        backgroundColor: 'yellow',
        zIndex: 1,
      }} />
      <StyledDiv style={{ 
        gridArea: '1 / 3 / 5 / 4',
        backgroundColor: 'blue'
      }} />
      <StyledDiv style={{ 
        gridArea: '1 / 4 / 6 / 6',
        backgroundColor: 'red',
        transformOrigin: 'right',
      }} />
    </StyledMainGrid>
  );
};

export default MainGrid;

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Unstable_Grid2';
// import './style.css'

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// export default function BasicGrid() {
//   return (

//     <Grid className="grid-item" container spacing={2}>
//       <Grid className="grid-item" xs={4}>
//         <Item className="grid-item">xs=8</Item>
//       </Grid >
      
//         <Grid className="grid-item" xs={4}>
//           <Item className="grid-item">xs=4</Item>
//           <Grid className="grid-item" container direction='column' spacing={2} >
//           <Grid className="grid-item" xs={12}>
//             <Item className="grid-item">xs=10</Item>
//           </Grid>
//           </Grid>
//         </Grid >
      
//       <Grid className="grid-item" xs={4}>
//         <Item className="grid-item">xs=4</Item>
//       </Grid>
//     </Grid>

    
//   );
// }