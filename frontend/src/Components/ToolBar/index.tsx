
import { Box, Paper } from "@mui/material";
import Dice from "./Dice";
import "./style.css"



export default function ToolBar() {


    return (
        <Box sx={{ display: 'flex', justifyContent: "center", height: '100%', m: 1, p: 1 }}>
            <Dice />
        </Box>
    );
}
