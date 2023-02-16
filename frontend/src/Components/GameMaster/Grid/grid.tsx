import { border } from '@mui/system';
import React from 'react';
import styled from 'styled-components';
import BasicTabs from '../../BasicTabs/BasicTabs';
import Heart from '../../Heart/Heart';

interface Props {
    players: Array<{
        firstName: string;
        lastName: string;
        age: number;
    }>;
}

const StyledMainGrid = styled.div`
 display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 15fr 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
  height: calc(100vh - 69px);
  width: 100%;
`;

const StyledDiv = styled.div`
grid-template-rows: (10fr, 1fr);
`;

const StyledStaticDiv = styled.div`
`;
const MainGrid: React.FC<Props> = (props: Props) => {
  return (
    <StyledMainGrid>
      <StyledDiv style={{ 
        gridArea: '1 / 1 / 2 / 2',
        backgroundColor: '#141b2d',
        transformOrigin: 'left',
        borderTop: '1px inset',
      }}>
        {props.players.map((player: any) => {
          return (<li key={player.firstName + player.lastName}>{player.firstName} {player.lastName}</li>)
        })}
        <BasicTabs />
        
      </StyledDiv>
      <StyledStaticDiv style={{ 
        gridArea: '2 / 1 / 3 / 3',
        backgroundColor: 'grey',
        zIndex: 1,
      }} />
      <StyledDiv style={{ 
        gridArea: '1 / 2 / 2 / 3',
        backgroundColor: 'black',
        borderTop: '1px inset',
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