import { Container, Box, Paper, Typography } from "@mui/material";
import { AnswerSummaryBox } from "../answer-summary-box/AnswerSummaryBox";
import { ResultBox } from "../result-card/ResultCard";

interface ResultAndQAProps {
  QAs: number[];
}

export const ResultAndQA: React.FC<ResultAndQAProps> = ({ QAs }) => {
  const resultMessage = "Great! you scored higher than 65% of the people who have taken these test";
  const duration = "20 minute 34 seconds";

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
        <ResultBox score={10} totalQuestions={20} duration={duration} message={resultMessage} />
        {/* Answer Summary */}
        {QAs.map((qa, index) => (
          <AnswerSummaryBox key={index} />
        ))}
      </Box>
    </Container>
  );
};
