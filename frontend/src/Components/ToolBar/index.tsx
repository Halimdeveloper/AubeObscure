
import { Paper } from "@mui/material";
import Dice from "./Dice";
import "./style.css"



export default function ToolBar() {


    return (
        <Paper sx={{ display: 'flex', justifyContent: "center", m: 1, p: 1 }}>
            <Dice />
        </Paper>
    );
}
