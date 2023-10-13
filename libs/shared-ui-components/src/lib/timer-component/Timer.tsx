import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { start } from "repl";

interface ITimerProps {
  startTime: number;
}

export const Timer = (props: ITimerProps) => {
  const [timeLeft, setTimeLeft] = useState(30 * 60 * 1000); // 30 minutes in milliseconds

  useEffect(() => {
    const timeLeft = localStorage.getItem("prevTimeLeft");
    if (timeLeft) {
      setTimeLeft(JSON.parse(timeLeft));
    }
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        localStorage.setItem("prevTimeLeft", JSON.stringify(prevTimeLeft));
        return prevTimeLeft - 10;
      }); // decrement by 10 milliseconds
    }, 10);
    return () => clearInterval(intervalId);
  }, []);

  const minutes = Math.floor(timeLeft / 60000);
  const seconds = Math.floor((timeLeft % 60000) / 1000);
  // const milliseconds = timeLeft % 1000;

  return (
    <Box>
      <Typography letterSpacing={2} variant="h3" component="h3">
        {minutes < 10 ? `0${minutes}` : minutes}m : {seconds < 10 ? `0${seconds}` : seconds}s
        {/* {milliseconds < 100 ? `0${milliseconds}` : milliseconds} */}
      </Typography>
    </Box>
  );
};
