import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

interface ResultCircleProps {
  score: number;
  totalQuestions: number;
}

const ResultCircle = ({ score, totalQuestions }: ResultCircleProps) => {
  const [showScore, setShowScore] = useState(false);

  const onAnimationComplete = () => {
    setShowScore(true);
  };

  return (
    <motion.div
      animate={{
        scale: [1, 1.3, 1, 1],
        rotate: [0, 180, 180, 180, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
      transition={{ duration: 3 }}
      onAnimationComplete={onAnimationComplete}
    >
      <Box
        sx={{
          position: "relative",
          left: "3%",
          top: "5.2%",
          borderRadius: "146px",
          background: "linear-gradient(145deg, #4475b0, #508bd1)",
          boxShadow: "8px 8px 20px #d7ae3c, -8px -8px 20px #ffec51",
          width: "14rem",
          height: "14rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 2,
          transition: "background-color 0.4s ease-in-out, transform 0.4s ease-in-out",
          "&:hover": {
            backgroundColor: "#4B82C3",
            transform: "scale(0.95)",
          },
        }}
      >
        {showScore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeIn" }} // Add the transition property to specify the easing function and duration
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                }}
                variant="h4"
                component="h2"
              >
                {score}
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                }}
                variant="h6"
                component="h2"
              >
                out of {totalQuestions}
              </Typography>
            </Box>
          </motion.div>
        )}
      </Box>
    </motion.div>
  );
};

export default ResultCircle;
