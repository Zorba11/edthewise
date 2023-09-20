import { Box, Grid, Paper, Typography } from "@mui/material";
import QP1 from "../questions/QP1";
import { QTable } from "../questions/QTable";
import { QP } from "../questions/QP";
import { Options } from "../questions/Options";
import { SubmitButton } from "../questions/SubmitButton";
import { LeftArrow, RightArrow, Timer } from "@edthewise/shared-ui-components";
import { QuestionNavigation } from "../QuestionNavigation";
import { IExamCardProps } from "../../pages/IExamCardProps";
import { observer } from "mobx-react";

export const Type2ExamCard = observer((props: IExamCardProps) => {
  const qNumber = props.questionData.qNumber;
  const qp1desc = props.questionData.qp1;
  const totalQNumber = 32;
  const answerOptions = props.questionData.qOptions ? props.questionData.qOptions : [];
  const answer = props.questionData.qAnswer;
  const disableSubmit = props?.disableSubmit ? true : false;
  const onSubmitHandler = props?.onSubmitHandler ? props.onSubmitHandler : () => ({});

  return (
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
          minHeight: "55rem",
          maxHeight: "50rem",
          padding: "2rem",
          borderRadius: "1rem",
          height: "auto",
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
              position: "relative",
              top: "1rem",
            }}
          >
            <QP1 qNumber={qNumber} desc={qp1desc} />
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "1rem",
            display: "flex",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} container>
              <Options options={answerOptions} />
            </Grid>
            {/* Answer Segment */}

            {answer && (
              <Box
                sx={{
                  marginTop: "1rem",
                  width: "45rem",
                  display: "flex",
                  justifyContent: "space-between",
                  position: "relative",
                  left: "2rem",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: "bold",
                    position: "relative",
                    top: "3rem",
                    left: "1rem",
                  }}
                  component="h1"
                >
                  {answer && "Answer: " + answer[0].label + ") " + answer[0].value}
                </Typography>
              </Box>
            )}
            <Grid
              sx={{
                width: "100%",
                marginTop: "5rem",
                position: "relative",
                bottom: "1rem",
              }}
            >
              <SubmitButton disable={disableSubmit} onSubmitHandler={onSubmitHandler} />
            </Grid>
          </Grid>
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
      {props.withNavigation && (
        <Box
          sx={{
            position: props.withTimer ? "relative" : "fixed",
            right: props.withTimer ? "8rem" : "2rem",
            top: props.withTimer ? "10rem" : "5rem",
          }}
        >
          <QuestionNavigation totalQNumber={totalQNumber} />
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
      )}
    </Box>
  );
});
