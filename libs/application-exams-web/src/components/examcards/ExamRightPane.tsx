import React from "react";
import { Box } from "@mui/material";
import { QuestionNavigation } from "../QuestionNavigation";
import { LeftArrow, RightArrow, Timer } from "@edthewise/shared-ui-components";
import { EdCompeteCard } from "@edthewise/application-assets-web";

interface IExamRightPaneProps {
  withTimer: boolean;
  totalQNumber: number;
  withEd?: boolean;
  goToNextQuestion: (event: any) => void;
  goToPrevQuestion: (event: any) => void;
  currentQNumber?: number;
  submittedQuestions?: Set<number>;
  onQNumClick: (event: any, qNumber: number) => void;
}

const ExamRightPane = ({
  withTimer = true,
  totalQNumber,
  withEd = false,
  goToNextQuestion,
  goToPrevQuestion,
  currentQNumber,
  submittedQuestions,
  onQNumClick,
}: IExamRightPaneProps) => {
  return (
    <Box
      sx={{
        position: "fixed",
        right: withEd ? "8rem" : "10rem",
        top: withEd ? "7%" : "28%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "30rem",
      }}
    >
      {withEd && <EdCompeteCard />}
      {/* Timer */}
      {withTimer && <Timer />}
      <QuestionNavigation
        submittedQuestions={submittedQuestions}
        currentQNumber={currentQNumber}
        totalQNumber={totalQNumber}
        onQNumClick={onQNumClick}
      />
      {/* Left & Right Arrows */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "30rem",
          marginTop: "3rem",
        }}
      >
        <LeftArrow onClick={goToPrevQuestion} />
        <RightArrow onClick={goToNextQuestion} />
      </Box>
    </Box>
  );
};

export default ExamRightPane;
