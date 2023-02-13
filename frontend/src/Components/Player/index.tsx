import { Box } from "@mui/material";
import React from "react";
import PlayerCreationForm from "../forms/PlayerCreationForm";


export default function Player() {


    return (
    <Box display="flex" justifyContent="center" height="100%" width="100%" >
        {/* <h1 text-align="center">Welcome Player</h1> */}
        <Box>
            <PlayerCreationForm />
        </Box>
    </Box>
    );
}
