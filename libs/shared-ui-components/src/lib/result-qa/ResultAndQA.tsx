import { Container, Box, Paper, Typography } from "@mui/material";
import { AnswerSummaryBox } from "../answer-summary-box/AnswerSummaryBox";

interface ResultAndQAProps {
  QAs: number[];
}

export const ResultAndQA: React.FC<ResultAndQAProps> = ({ QAs }) => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "1.5rem",
      }}
    >
      {/* Marks and duration */}
      <Box>
        <Paper
          elevation={5}
          sx={{
            backgroundColor: "#5696e0",
            borderRadius: "2rem",
            height: "15rem",
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
              top: "3%",
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
              76
            </Typography>
            <Typography
              sx={{
                color: "#fff",
              }}
              variant="h6"
              component="h2"
            >
              out of 100
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
              in 20 minutes 30 seconds
            </Typography>
            <Typography
              sx={{
                color: "#fff",
              }}
              variant="subtitle1"
              component="p"
            >
              Great ! you scored higher than 65% of the people who have taken these test
            </Typography>
          </Box>
        </Paper>
        {/* Answer Summary */}
        {QAs.map((qa, index) => (
          <AnswerSummaryBox key={index} />
        ))}
      </Box>
    </Container>
  );
};
