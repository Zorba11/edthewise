import { Box, Paper } from "@mui/material";
import { Type5ExamCard } from "./Type5ExamCard";

export const SQExamCard = (props: any) => {
  const cards = [1, 2, 3, 4, 5]; // An array of 5 cards

  return (
    <Box sx={{ overflowY: "scroll", display: "flex", flexDirection: "column", width: "60%" }}>
      <Box
        sx={{
          display: "flex",
          width: "70vw",
          position: "relative",
          top: "3rem",
          left: "2rem",
        }}
      >
        <Paper
          sx={{
            marginLeft: "7rem",
            marginTop: "3rem",
            width: "52rem",
            minHeight: "31rem",
            padding: "2rem",
            borderRadius: "1rem",
          }}
          elevation={4}
        ></Paper>
      </Box>
      {cards.map((card) => (
        <Type5ExamCard {...props} />
      ))}
    </Box>
  );
};
