import React, { ReactNode } from "react";
import { Box } from "@mui/material";
import ExamRightPane from "./ExamRightPane";

interface IExamCardContainerProps {
  withNavigation: boolean;
  withTimer: boolean;
  children: ReactNode;
  withEd?: boolean;
  goToNextQuestion: (event: any) => void;
  goToPrevQuestion: (event: any) => void;
  currentQNumber?: number;
  submittedQuestions: Set<number>;
  onQNumClick: (event: any, questionNumber: number) => void;
  totalQuestions: number;
}

const ExamCardContainer = ({
  withEd,
  withNavigation,
  withTimer,
  children,
  goToNextQuestion,
  goToPrevQuestion,
  currentQNumber,
  submittedQuestions,
  onQNumClick,
  totalQuestions,
}: IExamCardContainerProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "5rem",
      }}
    >
      {children}
      {/* Question Navigation Box */}
      {withNavigation && (
        <ExamRightPane
          goToNextQuestion={goToNextQuestion}
          goToPrevQuestion={goToPrevQuestion}
          withEd={withEd}
          withTimer={withTimer}
          totalQNumber={totalQuestions}
          currentQNumber={currentQNumber}
          submittedQuestions={submittedQuestions}
          onQNumClick={onQNumClick}
        />
      )}
    </Box>
  );
};

export default ExamCardContainer;
