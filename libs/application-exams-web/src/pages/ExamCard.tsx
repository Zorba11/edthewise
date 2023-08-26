import {
  Backdrop,
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

import qimagePlaceholder from "../assets/qImagePlaceholder.png";
import { useState } from "react";
import { ImageBox, LeftArrow, RightArrow, Timer } from "@edthewise/shared-ui-components";
import { QuestionNavigation } from "../components/QuestionNavigation";
import { IExamCardProps } from "./IExamCardProps";
import QP1 from "../components/questions/QP1";
import { questionsUiStore } from "@edthewise/application-stores-web";
import { QTable } from "../components/questions/QTable";
import { FMQuestions } from "@edthewise/foundation-appwrite";
import { QP } from "../components/questions/QP";
import { Options } from "../components/questions/Options";

export const ExamCard = (props: IExamCardProps) => {
  const qNumber = FMQuestions.QuestionsPool[0].MCQ[0].Qid ? FMQuestions.QuestionsPool[0].MCQ[0].Qid : "1";
  const qp1desc = FMQuestions.QuestionsPool[0].MCQ[0].QP1 ? FMQuestions.QuestionsPool[0].MCQ[0].QP1 : "";

  const qTableData = FMQuestions.QuestionsPool[0].MCQ[0].QTable;
  const qp2 = FMQuestions.QuestionsPool[0].MCQ[0].QP2;
  const qp3 = FMQuestions.QuestionsPool[0].MCQ[0].QP3 ? FMQuestions.QuestionsPool[0].MCQ[0].QP3 : "";

  const answerOptions = FMQuestions.QuestionsPool[0].MCQ[0].Options ? FMQuestions.QuestionsPool[0].MCQ[0].Options : [];

  return (
    // QuestionCard container
    <Box
      sx={{
        display: "flex",
        width: "70vw",
        position: "relative",
        top: "3rem",
        left: "4rem",
      }}
    >
      <Paper
        sx={{
          marginLeft: "7rem",
          marginTop: "3rem",
          width: "52rem",
          height: "40rem",
          padding: "2rem",
          borderRadius: "1rem",
        }}
        elevation={4}
      >
        {/* Question Description*/}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <QP1 qNumber={qNumber} desc={qp1desc} />
          </Box>
          {/* Question Table */}
          <QTable data={qTableData} />
          <Box>
            <QP questionDesc={qp2} />
            <QP bold={true} questionDesc={qp3} />
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "1rem",
            display: "flex",
          }}
        >
          {answerOptions.map((option, index) => (
            <Options key={index} option={option} />
          ))}

          {/* <Box
            sx={{
              position: "relative",
              left: "3rem",
              top: "1.7rem",
            }}
          >
            <Button
              sx={{
                width: "9rem",
                height: "3rem",
                backgroundColor: "#4B82C3",

                transition: "background-color 0.5s ease-in-out",
                "&:active": {
                  backgroundColor: "#FDCD46",
                  color: "#4B82C3",
                },
              }}
              variant="contained"
              onClick={props.onFinishHandler}
            >
              Submit
            </Button>
          </Box> */}
        </Box>
        {/* Answer Segment */}
        <Box
          sx={{
            marginTop: "1rem",
            width: "45rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* <Typography visibility="visible" variant="body1" component="p">
            Answer: Other, Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aut quasi a, nam itaque
            illo mollitia dolorum? Iste perferendis repudiandae, cupiditate sunt incidunt, maiores tempora sint velit
          </Typography> */}
        </Box>
      </Paper>

      {/* Timer, Navigation Board, Left & Right Arrows */}
      {/* Timer */}
      {props.withTimer && (
        <Box
          sx={{
            position: "relative",
            left: "14rem",
            top: "5rem",
          }}
        >
          <Timer />
        </Box>
      )}

      {/* Question Navigation Box */}
      <Box
        sx={{
          position: props.withTimer ? "relative" : "fixed",
          right: props.withTimer ? "8rem" : "2rem",
          top: props.withTimer ? "10rem" : "5rem",
        }}
      >
        <QuestionNavigation />
        {/* Left & Right Arrows */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "3rem",
          }}
        >
          <LeftArrow />
          <RightArrow />
        </Box>
      </Box>
    </Box>
  );
};
