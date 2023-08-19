import { Box, Paper, Typography } from "@mui/material";

export const AnswerSummaryBox = () => (
  <Paper
    elevation={5}
    sx={{
      backgroundColor: "#FDCD46",
      borderRadius: "2rem",
      height: "15rem",
      display: "flex",
      flexDirection: "row",
      zIndex: 1,
      marginTop: "0.7rem",
    }}
  >
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        left: "3%",
        top: "8%",
        width: "90%", // Set the width to a fixed value
      }}
    >
      <Typography variant="subtitle1" component="h2">
        Q1: Which bone forms the prominence of the cheek? Which bone forms the prominence of the cheek Which bone forms
        the prominence of the cheek Which bone forms the prominence of the cheek the prominence of the cheek Which bone
        forms the prominence of the cheek the prominence of the cheek Which bone forms the prominence of the cheek
      </Typography>
      <Typography
        sx={{
          marginTop: "1rem",
        }}
        variant="subtitle1"
        component="h2"
      >
        Answer: Bone dacnadkak
      </Typography>
    </Box>
  </Paper>
);
