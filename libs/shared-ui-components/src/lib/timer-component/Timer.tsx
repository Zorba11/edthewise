import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(30 * 60 * 1000); // 30 minutes in milliseconds

  useEffect(() => {
    // const intervalId = setInterval(() => {
    //   setTimeLeft((prevTimeLeft) => prevTimeLeft - 10); // decrement by 10 milliseconds
    // }, 10);
    // return () => clearInterval(intervalId);
  }, []);

  const minutes = Math.floor(timeLeft / 60000);
  const seconds = Math.floor((timeLeft % 60000) / 1000);
  const milliseconds = timeLeft % 1000;

  return (
    <Box>
      <Typography letterSpacing={2} variant="h3" component="h3">
        {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}.
        {milliseconds < 100 ? `0${milliseconds}` : milliseconds}
      </Typography>
    </Box>
  );
};
