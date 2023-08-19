import { Box, Paper, Typography } from "@mui/material";

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
      <Box
        sx={{
          position: "relative",
          left: "3%",
          top: "5.2%",
          borderRadius: "146px",
          background: "linear-gradient(145deg, #4475b0, #508bd1)",
          boxShadow: "10px 10px 60px #406fa6, -10px -10px 60px #5696e0",
          width: "14rem",
          height: "14rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 2,
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
