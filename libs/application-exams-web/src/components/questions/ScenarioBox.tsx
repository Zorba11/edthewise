import React, { ReactNode } from "react";
import { Box, Paper } from "@mui/material";

interface IScenarioBoxProps {
  children: ReactNode;
  type: "sq" | "qp";
}

const ScenarioBox = ({ children, type }: IScenarioBoxProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        top: "3rem",
        left: "2rem",
        minWidth: "fit-content",
      }}
    >
      <Paper
        sx={{
          marginLeft: "7rem",
          marginTop: "3rem",
          width: "52rem",
          padding: "2rem",
          borderRadius: "1rem",
        }}
        elevation={4}
      >
        {children}
      </Paper>
    </Box>
  );
};

export default ScenarioBox;
