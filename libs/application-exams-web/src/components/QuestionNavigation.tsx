import { Box, Typography } from "@mui/material";

interface IQuestionNavigationProps {
  totalQNumber: number;
}

export const QuestionNavigation = ({ totalQNumber }: IQuestionNavigationProps) => {
  const questionNumbers = Array.from({ length: totalQNumber }, (_, i) => i + 1); // create an array of question numbers from 1 to totalQNumber

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "34rem",
        padding: "1rem",
        borderRadius: "1rem",
        backgroundColor: "#F5F5F5",
        minHeight: "fit-content",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(10, 1fr)",
          gridTemplateRows: `repeat(${Math.ceil(totalQNumber / 10)}, 1fr)`, // set the number of rows based on the totalQNumber prop
          gap: "0.7rem",
        }}
      >
        {/* question number circle */}
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
