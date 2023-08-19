import { Box, Paper, Typography } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import BorderColorSharpIcon from "@mui/icons-material/BorderColorSharp";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { CompeteExamDetailsProps } from "../types/CompeteExamDetailsProps";

export const CompeteExamStarterDetails = ({
  studentsAttempted,
  yourAttempts,
  topScore,
  prizeMoney,
}: CompeteExamDetailsProps) => {
  return (
    <Paper
      sx={{
        width: "45%",
        height: "27rem",
        backgroundColor: "#f4f2f2",
        marginTop: "1rem",
      }}
      elevation={5}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "4rem",
            justifyContent: "center",
            position: "relative",
            top: "3rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {/* Students attempted */}
            <Typography color="#4B82C3" variant="h6" component="h4">
              Students Attempted
            </Typography>
            <GroupsIcon
              sx={{
                position: "relative",
                left: "0.5rem",
                bottom: "0.2rem",
                color: "#4B82C3",
              }}
              fontSize="large"
            />
            <Typography
              sx={{
                position: "relative",
                left: "1rem",
                color: "#4B82C3",
              }}
              variant="h6"
              component="h4"
            >
              : {studentsAttempted}
            </Typography>
          </Box>

          {/* User attempts */}

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "0.2rem",
            }}
          >
            <Typography
              sx={{
                color: "#4B82C3",
              }}
              variant="h6"
              component="h4"
            >
              Your Attempts
            </Typography>
            <BorderColorSharpIcon
              sx={{
                color: "#4B82C3",
                position: "relative",
                left: "0.5rem",
              }}
            />
            <Typography
              sx={{
                color: "#4B82C3",
                position: "relative",
                left: "1rem",
                bottom: "0.1rem",
              }}
              variant="h6"
              component="h4"
            >
              : {yourAttempts}
            </Typography>
          </Box>

          {/* Top score */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "0.3rem",
            }}
          >
            <Typography
              sx={{
                color: "#4B82C3",
              }}
              variant="h6"
              component="h4"
            >
              Top Score
            </Typography>
            <SportsScoreIcon
              sx={{
                color: "#4B82C3",
                position: "relative",
                left: "0.3rem",
                bottom: "0.3rem",
              }}
              fontSize="large"
            />
            <Typography
              sx={{
                color: "#4B82C3",
                position: "relative",
                left: "1rem",
              }}
              variant="h6"
              component="h4"
            >
              : <span>{topScore.marks} marks </span> <span>{topScore.duration}</span>
            </Typography>
          </Box>
          {/* Price money */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Typography
              sx={{
                color: "#4B82C3",
              }}
              variant="h6"
              component="h4"
            >
              If you can beat, You will win :
            </Typography>
            <CurrencyRupeeIcon
              sx={{
                color: "#4B82C3",
                position: "relative",
                left: "0.3rem",
                top: "0.2rem",
              }}
            />
            <Typography
              sx={{
                color: "#4B82C3",
                position: "relative",
                left: "0.4rem",
              }}
              variant="h6"
              component="h4"
            >
              {prizeMoney}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};
