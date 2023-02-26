import React, { useEffect, useState } from "react";
import "./style.css";
import { setCurrentUser } from "../../Sockets/emit";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import { RoleEnum } from "../../models/User";

export default function Home() {
  const [userName, setUserName] = useState("");

  const setUserLocally = (event: SelectChangeEvent) => {
    setUserName(event.target.value as string);
  };

  return (
    <div>
      <p>Quel est ton nom ?</p>
      {/* <input type="text" name="name" value={namePlayer} onChange={e => setNamePlayer(e.target.value)} /> */}

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Votre nom :</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={userName}
          label="om"
          onChange={setUserLocally}
        >
          <MenuItem value={"Halim"}>Halim</MenuItem>
          <MenuItem value={"Pierre"}>Pierre</MenuItem>
          <MenuItem value={"Matthieu"}>Matthieu</MenuItem>
        </Select>
      </FormControl>

      <Button
        variant="contained"
        onClick={() =>
          setCurrentUser({
            name: userName,
            role: RoleEnum.Player,
          })
        }
      >
        Player
      </Button>
      <Button
        variant="contained"
        onClick={() =>
          setCurrentUser({
            name: userName,
            role: RoleEnum.GM
          })
        }
      >
        GM
      </Button>
    </div>
  );
}
