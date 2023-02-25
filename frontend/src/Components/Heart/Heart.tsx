import * as React from 'react';

type HeartProps = {
    currentLife: number;
    totalLife: number;
}

export default function Heart( {currentLife,totalLife}:HeartProps ) {


  return (
      <div className="center-heart">  
        <div className="heart">
          <div className="heart-value">
            {currentLife}/{totalLife}
          </div> 
      </div>
    </div>
  )
}

