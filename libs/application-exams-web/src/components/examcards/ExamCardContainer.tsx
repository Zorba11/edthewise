import React, { ReactNode } from "react";
import { Box } from "@mui/material";
import ExamRightPane from "./ExamRightPane";

interface IExamCardContainerProps {
  withNavigation: boolean;
  withTimer: boolean;
  totalQNumber: number;
  children: ReactNode;
  withEd?: boolean;
  goToNextQuestion: (event: any) => void;
  goToPrevQuestion: (event: any) => void;
}

const ExamCardContainer = ({
  withEd,
  withNavigation,
  withTimer,
  totalQNumber,
  children,
  goToNextQuestion,
  goToPrevQuestion,
}: IExamCardContainerProps) => {
  return (
    <Box
      sx={{
        display: "flex",
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
          totalQNumber={totalQNumber}
        />
      )}
    </Box>
  );
};

export default ExamCardContainer;
