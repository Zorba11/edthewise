import { Box, Grid, Paper } from "@mui/material";
import QP1 from "../questions/QP1";
import { QTable } from "../questions/QTable";
import { QP } from "../questions/QP";
import { Options } from "../questions/Options";
import { SubmitButton } from "../questions/SubmitButton";
import { LeftArrow, RightArrow, Timer } from "@edthewise/shared-ui-components";
import { QuestionNavigation } from "../QuestionNavigation";
import { IExamCardProps } from "../../pages/IExamCardProps";

export const Type1ExamCard = (props: IExamCardProps) => {
  const qNumber = props.questionData.qNumber;
  const qp1desc = props.questionData.qp1;
  const totalQNumber = 32;
  const answerOptions = props.questionData.qOptions;
  const qp3 = props.questionData.qp3;
  const qp2 = props.questionData.qp2;
  const qTableData1 = props.questionData.qTableData1;

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
          <QTable data={qTableData1} />
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