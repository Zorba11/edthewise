import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

interface IQuestionNavigationProps {
  totalQNumber: number;
  currentQNumber?: number;
  submittedQuestions?: Set<number>;
  onQNumClick: (event: any, qNumber: number) => void;
}

export const QuestionNavigation = ({
  totalQNumber,
  currentQNumber = 1,
  submittedQuestions,
  onQNumClick,
}: IQuestionNavigationProps) => {
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
          <motion.div
            key={questionNumber}
            animate={{
              backgroundColor: getBgColor(currentQNumber, questionNumber, submittedQuestions),
              scale: currentQNumber === questionNumber ? 1.2 : 1, // animate the scale of the motion.div component
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }} // define the animation duration and easing
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "2.6rem",
              height: "2.6rem",
              borderRadius: "50%",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.30)",
              cursor: "pointer",
              transition: "background-color 0.3s ease-in-out, transform 0.2s ease-in-out",
              // "&:hover": {
              //   backgroundColor: "#4B82C3",
              //   transform: "scale(0.95)",
              // },
              // "&:active": {
              //   backgroundColor: "#FDCD46", // Change the background color on hover
              // },
            }}
            whileHover={{ backgroundColor: "#4B82C3", scale: 0.95 }} // define the hover animation using the whileHover prop
            whileTap={{ backgroundColor: "#FDCD46" }} // define the tap animation using the whileTap prop
            onClick={(e) => onQNumClick(e, questionNumber)} // add an onClick handler
          >
            <Typography variant="subtitle1" component="a">
              {questionNumber}
            </Typography>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

function getBgColor(currentQNumber: number, questionNumber: number, submittedQuestions: Set<number> = new Set()) {
  return currentQNumber === questionNumber
    ? "#4B82C3"
    : hasSubmittedQuestion(questionNumber, submittedQuestions)
    ? "#8FB9AB"
    : "#FFFFFF";
}

function hasSubmittedQuestion(questionNumber: number, submittedQuestions: Set<number>): boolean {
  return submittedQuestions.has(questionNumber);
}
