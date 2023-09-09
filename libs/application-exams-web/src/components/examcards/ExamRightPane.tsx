import React from "react";
import { Box } from "@mui/material";
import { QuestionNavigation } from "../QuestionNavigation";
import { LeftArrow, RightArrow, Timer } from "@edthewise/shared-ui-components";
import { EdCompeteCard } from "@edthewise/application-assets-web";

interface IExamRightPaneProps {
  withTimer: boolean;
  totalQNumber: number;
  withEd?: boolean;
}

const ExamRightPane = ({ withTimer = true, totalQNumber = 32, withEd = true }: IExamRightPaneProps) => {
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
      <QuestionNavigation totalQNumber={totalQNumber} />
      {/* Left & Right Arrows */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "30rem",
          marginTop: "3rem",
        }}
      >
        <LeftArrow />
        <RightArrow />
      </Box>
    </Box>
  );
};

export default ExamRightPane;
