import { Container, Box, Paper, Typography } from "@mui/material";
import { AnswerSummaryBox } from "../answer-summary-box/AnswerSummaryBox";
import { ResultBox } from "../result-card/ResultCard";
import { motion } from "framer-motion";
import { container } from "@edthewise/common-inversify";
import { CompeteExamsStore } from "@edthewise/application-stores-web";
import { TOKENS } from "@edthewise/common-tokens-web";

interface ResultAndQAProps {
  QAs: number[];
}

export const ResultAndQA: React.FC<ResultAndQAProps> = ({ QAs }) => {
  const resultMessage = "Great! you scored higher than 65% of the people who have taken these test";
  // const duration = "20 minute 34 seconds";

  const examStore = container.get<CompeteExamsStore>(TOKENS.ExamStoreToken);

  const score = examStore.getScore();

  const totalQuestions = examStore.getTotalQuestions();

  const duration = examStore.getDuration();

  const questions = examStore.getQuestions();

  const userAnswers = examStore.getUserAnswers();

  const getUserAnswer = (id: string) => {
    return userAnswers.get(questions[0].qid) ? userAnswers.get(questions[0].qid) : { label: "", value: "" };
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "1.5rem",
      }}
    >
      {/* Marks and duration */}
      <Box
        sx={{
          paddingBottom: "5rem",
        }}
      >
        <ResultBox score={score} totalQuestions={totalQuestions} duration={duration} message={resultMessage} />
        {/* Answer Summary */}
        {questions.map(
          (question: any) =>
            question.qAnswer && <AnswerSummaryBox questionData={question} userAnswer={getUserAnswer(question?.qid)} />,
        )}
      </Box>
    </Container>
  );
};
