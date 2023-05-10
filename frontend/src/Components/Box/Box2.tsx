import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function BoxComponent2(text: any) {
  return (
    <Box
      component="span"
      sx={{ p: 2, border: "1px solid #000000", width: "10%" }}
    >
      <Button>{text.text}</Button>
    </Box>
  );
}
