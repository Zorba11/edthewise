import { Box, Typography } from "@mui/material";

export const QuestionNavigation = () => {
  const questionNumbers = Array.from({ length: 50 }, (_, i) => i + 1); // create an array of question numbers from 1 to 50

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "34rem",
        height: "18rem",
        padding: "1rem",
        borderRadius: "1rem",
        backgroundColor: "#F5F5F5",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(10, 1fr)",
          gridTemplateRows: "repeat(15, 1fr)",
          gap: "0.7rem",
        }}
      >
        {questionNumbers.map((questionNumber) => (
          <Box
            key={questionNumber}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "2.6rem",
              height: "2.6rem",
              borderRadius: "50%",
              backgroundColor: "#FFFFFF",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.30)",
              cursor: "pointer",
              transition: "background-color 0.3s ease-in-out, transform 0.2s ease-in-out",
              "&:hover": {
                backgroundColor: "#4B82C3",
                transform: "scale(0.95)",
              },
              "&:active": {
                backgroundColor: "#FDCD46", // Change the background color on hover
              },
            }}
          >
            <Typography variant="subtitle1" component="a">
              {questionNumber}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
