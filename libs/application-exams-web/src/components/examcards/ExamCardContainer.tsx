import React, { ReactNode } from "react";
import { Box } from "@mui/material";
import ExamRightPane from "./ExamRightPane";

interface IExamCardContainerProps {
  withNavigation: boolean;
  withTimer: boolean;
  totalQNumber: number;
  children: ReactNode;
  withEd?: boolean;
}

const ExamCardContainer = ({ withEd, withNavigation, withTimer, totalQNumber, children }: IExamCardContainerProps) => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      {children}
      {/* Question Navigation Box */}
      {withNavigation && <ExamRightPane withEd={withEd} withTimer={withTimer} totalQNumber={totalQNumber} />}
    </Box>
  );
};

export default ExamCardContainer;
