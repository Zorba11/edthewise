import { Box, Grid, Paper, Typography } from "@mui/material";
import QP1 from "../questions/QP1";
import { QTable } from "../questions/QTable";
import { Options } from "../questions/Options";
import { SubmitButton } from "../questions/SubmitButton";
import { LeftArrow, RightArrow, Timer } from "@edthewise/shared-ui-components";
import { QuestionNavigation } from "../QuestionNavigation";
import { IExamCardProps } from "../../pages/IExamCardProps";
import { QP } from "../questions/QP";

export const Type4ExamCard = (props: IExamCardProps) => {
  const qNumber = props?.questionData?.qNumber ? props?.questionData.qNumber : 1;
  const qp1desc = props?.questionData?.qp1 ? props?.questionData?.qp1 : "";
  const qp2desc = props?.questionData.qp2 ? props?.questionData.qp2 : "";
  const totalQNumber = 32;
  const answerOptions = props?.questionData?.qOptions ? props?.questionData?.qOptions : [];
  const answer = props?.questionData.qAnswer;
  const qTableData1 = props?.questionData.qTableData1;
  const disableSubmit = props?.disableSubmit ? props?.disableSubmit : false;
  const onSubmitHandler = props?.onSubmitHandler ? props?.onSubmitHandler : () => ({});

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
          minHeight: "31rem",
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
          <QTable data={qTableData1} />
        </Box>
        <Box
          sx={{
            marginTop: "1rem",
            display: "flex",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Options options={answerOptions} />
            </Grid>
            <Grid item xs={12}>
              {/* Answer Segment */}
              <Box
                sx={{
                  marginTop: "1rem",
                  width: "45rem",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: "bold",
                    position: "relative",
                    bottom: "0.5rem",
                  }}
                  component="h1"
                >
                  {answer && "Answer: " + answer[0].label + ") " + answer[0].value}
                </Typography>
              </Box>
            </Grid>
            <Grid
              sx={{
                width: "100%",
                position: "relative",
                top: "1.2rem",
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
          <QuestionNavigation onQNumClick={props.onQNumClick} totalQNumber={totalQNumber} />
          {/* Left & Right Arrows */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "3rem",
            }}
          >
            <LeftArrow onClick={props.goToPrevQuestion} />
            <RightArrow onClick={props.goToNextQuestion} />
          </Box>
        </Box>
      )}
    </Box>
  );
};
