import { Alert, Box, Grid, IconButton, Paper, Typography } from "@mui/material";
import FlagIcon from "@mui/icons-material/Flag";
import { useState } from "react";
import { QP } from "../questions/QP";
import { QTable } from "../questions/QTable";
import QP1 from "../questions/QP1";

interface IAnswerSummaryBox {
  questionData: {
    qNumber?: number;
    qp1?: string;
    qTableData1?: { label: string; value: string }[];
    qp2?: string;
    qp3?: string;
    qOptions?: { label: string; value: string }[];
    qTableData2?: { label: string; value: string }[];
    qComponentOrder?: string;
    qAnswer: { label: string; value: string }[];
    hasSubmitted?: boolean;
    qid: string;
  };
  userAnswer?: IUserAnswer;
}

interface IUserAnswer {
  label: string;
  value: string;
}

export const AnswerSummaryBox = ({ questionData, userAnswer }: IAnswerSummaryBox) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const { qNumber = 1, qp1 = "", qp2 = "", qp3 = "", qAnswer = [], qTableData1 = [], qTableData2 = [] } = questionData;

  const formattedQTableData1 =
    questionData?.qTableData1?.[0]?.label !== "na" || ""
      ? questionData?.qTableData1?.map((item) => ({
          label: item?.label,
          value: replaceHashWithComma(item?.value),
        }))
      : [];

  const formattedQTableData2 =
    questionData?.qTableData2?.[0]?.label !== ""
      ? questionData?.qTableData2?.map((item) => ({
          label: item?.label,
          value: replaceHashWithComma(item?.value),
        }))
      : [];

  const formattedAnswer = qAnswer?.map((item) => ({
    label: item?.label,
    value: replaceHashWithComma(item?.value),
  }));

  const formattedUserAnswer = userAnswer?.label !== "" ? userAnswer?.label + ") " + userAnswer?.value : "";

  const formattedQp1 = replaceHashWithComma(qp1);
  const formattedQp2 = replaceHashWithComma(qp2);
  const formattedQp3 = replaceHashWithComma(qp3);

  return (
    <Box
      sx={{
        display: "flex",
        width: "70vw",
        position: "relative",
        top: "1rem",
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
          <IconButton
            sx={{
              position: "relative",
              top: "1.7rem",
              left: "37vw",
              width: "3rem",
              height: "3rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 99,
            }}
          >
            <FlagIcon
              sx={{
                color: "#FFC107",
              }}
            />
          </IconButton>

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
          {qp2 && formattedQTableData2?.length && qp3 ? (
            <>
              <QP questionDesc={formattedQp2} />
              <QTable data={formattedQTableData2} />
              <QP questionDesc={formattedQp3} bold={true} />
            </>
          ) : qp2 && formattedQTableData2?.length ? (
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
            {/* User's answer */}

            {qAnswer[0].label !== userAnswer?.label ? (
              <Grid item xs={12}>
                <Box
                  sx={{
                    marginTop: "1rem",
                    width: "45rem",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Alert severity="error">
                    Your answer was:{" "}
                    <span
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      {formattedUserAnswer}
                    </span>
                  </Alert>
                </Box>
              </Grid>
            ) : (
              <Box
                sx={{
                  marginTop: "3rem",
                  marginLeft: "1rem",
                  justifyContent: "space-between",
                }}
              >
                <Alert icon={false} severity="success">
                  You got it right !
                </Alert>
              </Box>
            )}

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
                <Alert severity="success">{formattedAnswer[0]?.label + ") " + formattedAnswer[0]?.value}</Alert>
              </Box>
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
