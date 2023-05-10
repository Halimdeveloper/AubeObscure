import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import React from "react";

type Props = {
  x: string;
  y: string;
  z: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioBtn: React.FC<Props> = ({ x, y, z, onChange }) => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Les voici</FormLabel>
      <RadioGroup onChange={onChange}>
        <FormControlLabel value={x} control={<Radio />} label={x} />
        <FormControlLabel value={y} control={<Radio />} label={y} />
        <FormControlLabel value={z} control={<Radio />} label={z} />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioBtn;
