import { Box, Grid, Paper } from "@mui/material";
import { LeftArrow, RightArrow, Timer } from "@edthewise/shared-ui-components";
import { QuestionNavigation } from "../components/QuestionNavigation";
import { IExamCardProps } from "./IExamCardProps";
import QP1 from "../components/questions/QP1";
import { QTable } from "../components/questions/QTable";
import { FMQuestions } from "@edthewise/foundation-appwrite";
import { QP } from "../components/questions/QP";
import { Options } from "../components/questions/Options";
import { SubmitButton } from "../components/questions/SubmitButton";

export const ExamCard = (props: IExamCardProps) => {
  const qNumber = props.questionData.qNumber;
  const qp1desc = props.questionData.qp1desc;
  const totalQNumber = 32;
  const answerOptions = props.questionData.answerOptions;
  const qp3 = props.questionData.qp3;
  const qp2 = props.questionData.qp2;
  const qTableData = props.questionData.qTableData;

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
          minHeight: "40rem",
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
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Options options={answerOptions} />
            </Grid>
            <Grid
              sx={{
                width: "100%",
              }}
            >
              <SubmitButton onClick={() => {}} />
            </Grid>
          </Grid>
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
    </Box>
  );
};
