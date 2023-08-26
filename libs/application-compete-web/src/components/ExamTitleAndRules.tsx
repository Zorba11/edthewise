import { Box, Typography } from "@mui/material";

type ExamTitleAndRulesProps = {
  title: string;
  rules: string;
};

export const ExamTitleAndRules = ({ title, rules }: ExamTitleAndRulesProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        position: "relative",
        right: "1rem",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Work Sans",
          color: "#4B82C3",
          marginBottom: "2rem",
        }}
        variant="h2"
        component="h1"
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Work Sans",
            color: "#4B82C3",
            align: "center",
          }}
          variant="h5"
          component="h3"
        >
          <span aria-label="prize" role="img">
            {" "}
            🏆
          </span>
          Learn, Compete and Win Big with EdTheWise!{" "}
          <span aria-label="prize" role="img">
            {" "}
            🏆
          </span>
        </Typography>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            color: "#4B82C3",
            textAlign: "justify",
            position: "relative",
            top: "1rem",
          }}
          variant="h6"
          component="h3"
        >
          How does it work? Simple: <br />
          <span aria-label="prize" role="img">
            ✨
          </span>{" "}
          20% of every rupee we collect from the compete exam goes straight into our prize pool. <br />
          <span aria-label="prize" role="img">
            ✨
          </span>{" "}
          The more students that compete, the bigger the prize! <br />
          <span aria-label="prize" role="img">
            ✨
          </span>{" "}
          Become the top scorer of the month and walk away with a grand prize of 25% of the total prize pool.
          <br />
          <span aria-label="prize" role="img">
            ✨
          </span>{" "}
          Each Question Set will be different for each student. <br />
        </Typography>
      </Box>
    </Box>
  );
};
