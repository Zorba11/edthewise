import { Box, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ResultCircle from "./ResultCircle";

type ResultBoxProps = {
  score: number;
  totalQuestions: number;
  duration: string;
  message: string;
};

export const ResultBox = ({ score, totalQuestions, duration, message }: ResultBoxProps) => {
  return (
    <Paper
      elevation={5}
      sx={{
        backgroundColor: "#5696e0",
        borderRadius: "2rem",
        height: "16rem",
        display: "flex",
        flexDirection: "row",
        zIndex: 1,
      }}
    >
      {/* Result circle */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ResultCircle score={score} totalQuestions={totalQuestions} />
      </Box>

      {/* Duration and Message */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          left: "7%",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
          }}
          variant="h6"
          component="h2"
        >
          {duration}
        </Typography>
        <Typography
          sx={{
            color: "#fff",
          }}
          variant="subtitle1"
          component="p"
        >
          {message}
        </Typography>
      </Box>
    </Paper>
  );
};
