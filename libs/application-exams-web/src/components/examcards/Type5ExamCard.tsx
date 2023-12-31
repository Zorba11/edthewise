import { Alert, Box, Grid, Paper, Typography } from "@mui/material";
import QP1 from "../../../../shared-ui-components/src/lib/questions/QP1";
import { QTable } from "../../../../shared-ui-components/src/lib/questions/QTable";
import { Options } from "../questions/Options";
import { SubmitButton } from "../questions/SubmitButton";
import { QP } from "../../../../shared-ui-components/src/lib/questions/QP";
import { IExamCardData } from "../../pages/IExamCardData";

interface IType5ExamCardProps {
  questionData: IExamCardData;
  disableSubmit?: boolean;
  onSubmitHandler?: (event?: any) => void;
  onFinishHandler: (event: any) => void;
  withTimer: boolean;
  withNavigation: boolean;
  showAnswer: boolean;
  showErr: boolean;
}

export const Type5ExamCard = ({
  questionData,
  disableSubmit = false,
  onSubmitHandler = () => ({}),
  onFinishHandler = () => ({}),
  showAnswer = false,
  showErr = false,
}: IType5ExamCardProps) => {
  const {
    qNumber = 1,
    qp1 = "",
    qp2 = "",
    qp3 = "",
    qOptions = [],
    qAnswer = [],
    qTableData1 = [],
    qTableData2 = [],
  } = questionData;

  const formattedQTableData1 =
    qTableData1[0]?.label !== "na" || ""
      ? qTableData1.map((item) => ({
          label: item?.label,
          value: replaceHashWithComma(item?.value),
        }))
      : [];

  const formattedQTableData2 =
    qTableData2[0]?.label !== ""
      ? qTableData2?.map((item) => ({
          label: item?.label,
          value: replaceHashWithComma(item?.value),
        }))
      : [];

  const formattedAnswer = qAnswer?.map((item) => ({
    label: item?.label,
    value: replaceHashWithComma(item?.value),
  }));

  const formattedQp1 = replaceHashWithComma(qp1);
  const formattedQp2 = replaceHashWithComma(qp2);
  const formattedQp3 = replaceHashWithComma(qp3);

  return (
    <Box
      sx={{
        display: "flex",
        width: "70vw",
        position: "relative",
        top: "2rem",
        // left: "2rem",
        minHeight: "fit-content",
      }}
    >
      <Paper
        sx={{
          marginLeft: "4rem",
          marginTop: "2rem",
          width: "52rem",
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
            <QP1 qNumber={questionData?.qNumber} desc={formattedQp1} />
          </Box>
          {/* Question Table */}
          <QTable data={formattedQTableData1} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "1rem",
          }}
        >
          {qp2 && formattedQTableData2.length && qp3 ? (
            <>
              <QP questionDesc={formattedQp2} />
              <QTable data={formattedQTableData2} />
              <QP questionDesc={formattedQp3} bold={true} />
            </>
          ) : qp2 && formattedQTableData2.length ? (
            <>
              <QP questionDesc={formattedQp2} />
              <QTable data={formattedQTableData2} />
            </>
          ) : qp2 && qp3 ? (
            <>
              <QP questionDesc={formattedQp2} />
              <QP questionDesc={formattedQp3} bold={true} />
            </>
          ) : (
            <Box
              sx={{
                marginTop: "1rem",
              }}
            >
              <QP questionDesc={formattedQp2} bold={true} />
            </Box>
          )}
        </Box>
        <Box
          sx={{
            marginTop: "1rem",
            display: "flex",
          }}
        >
          <Grid container spacing={2}>
            <Grid
              sx={{
                marginTop: "1rem",
              }}
              item
              xs={12}
            >
              <Options options={qOptions} />
              <Alert
                sx={{
                  visibility: showErr ? "visible" : "hidden",
                }}
                severity="error"
              >
                Choose your Answer to Submit !
              </Alert>
            </Grid>
            <Grid item xs={12}>
              {/* Answer Segment */}
              <Box
                sx={{
                  marginTop: qp2 && !qp3 && qTableData2.length ? "7rem" : "1rem",
                  width: "45rem",
                  display: "flex",
                  justifyContent: "space-between",
                  visibility: showAnswer ? "visible" : "hidden",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: "bold",
                    position: "relative",
                    bottom: "0.5rem",
                    color: "green",
                  }}
                  component="h1"
                >
                  {formattedAnswer && "Answer: " + formattedAnswer[0].label + ") " + formattedAnswer[0].value}
                </Typography>
              </Box>
            </Grid>
            <Grid
              sx={{
                width: "100%",
                position: "relative",
                top: "1.2rem",
                left: "0.6rem",
              }}
            >
              <SubmitButton disable={disableSubmit} onSubmitHandler={onSubmitHandler} />
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

const replaceHashWithComma = (value: string): string => {
  return value?.replace("#", ",");
};
