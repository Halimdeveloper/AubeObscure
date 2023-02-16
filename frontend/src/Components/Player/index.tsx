import { Box } from "@mui/material";
import React from "react";
import PlayerCreationForm from "../forms/PlayerCreationForm";
import PlayerCaracteres from "../PlayerCaracters";


export default function Player() {


    return (
        <Box display="flex" justifyContent="center" height="100%" width="100%" >
            <PlayerCaracteres />
        </Box>
    );
}
