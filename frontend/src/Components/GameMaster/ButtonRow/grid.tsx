import { height, width } from '@mui/system';
import React from 'react';

interface Props {
    players: Array<{
        firstName: string;
        lastName: string;
        age: number;
    }>;
}

const MainGrid: React.FC<Props> = (props:Props) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gridTemplateRows: 'repeat(5, 1fr)',
      gridColumnGap: '0px',
      gridRowGap: '0px',
      height: '100%',
      width: '100%'
    }}>
      <div style={{ gridArea: '1 / 1 / 6 / 3', backgroundColor: 'gray' }} >{props.players.map((player: any) => {
            return (<li key={player.firstName + player.lastName}>{player.firstName} {player.lastName}</li>)
        })}</div>
      <div style={{ gridArea: '5 / 3 / 6 / 4', backgroundColor: 'yellow' }} />
      <div style={{ gridArea: '1 / 3 / 5 / 4', backgroundColor: 'blue' }} />
      <div style={{ gridArea: '1 / 4 / 6 / 6', backgroundColor: 'red' }} />
    </div>
  );
};

export default MainGrid;