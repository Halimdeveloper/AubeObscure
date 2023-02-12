import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import React from 'react';

type Props = {
  x: string;
  y: string;
  z: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioBtn2: React.FC<Props> = ({ x, y, z, onChange }) => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Liste des joueurs :</FormLabel>
      <RadioGroup 
        onChange={onChange} 
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={x}
        name="radio-buttons-group"
      >
        <FormControlLabel value={x} control={<Radio />} label={x} />
        <FormControlLabel value={y} control={<Radio />} label={y} />
        <FormControlLabel value={z} control={<Radio />} label={z} />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioBtn2;
  
