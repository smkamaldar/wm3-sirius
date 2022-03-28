import React from "react";
import Button from "@mui/material/Button";
import ShareIcon from "@mui/icons-material/Share";
import "./ShareButton.css";

export default function ShareButton() {
  return (
    <Button className="chalk"
      endIcon={<ShareIcon />}
      sx={{
        fontSize: "1rem",
      }}
      variant="contained"
    >
      Share
    </Button>
  );
}