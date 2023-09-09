import { Box } from "@mui/material";
import { Type5ExamCard } from "./Type5ExamCard";
import { QP } from "../questions/QP";
import { SQTitle } from "../questions/SQTitle";
import ScenarioBox from "../questions/ScenarioBox";

export const SQExamCard = (props: any) => {
  const cards = [1, 2, 3, 4, 5]; // An array of 5 cards

  const sqTitle = `The following scenario relates to questions 16 to 20.`;

  const sqDesc2 = `Herd Co is based in a country whose currency is the dollar ($). The company expects to receive €1,500,000 in six
  months’ time from Find Co, a foreign customer. The finance director of Herd Co is concerned that the euro (€) may
  depreciate against the dollar before the foreign customer makes payment and she is looking at hedging the receipt.`;

  const sqDesc3 = `Herd Co has in issue loan notes with a total nominal value of $4 million which can be redeemed in 10 years’ time. The
  interest paid on the loan notes is at a variable rate linked to LIBOR. The finance director of Herd Co believes that interest
  rates may increase in the near future.`;

  const sqDesc4 = `The spot exchange rate is €1·543 per $1. The domestic short-term interest rate is 2% per year, while the foreign
  short-term interest rate is 5% per year.`;

  let ScenarioContent;

  const type1 = "sq";

  switch (type1) {
    case "sq":
      ScenarioContent = (
        <>
          <SQTitle desc={sqTitle} />
          <QP questionDesc={sqDesc2} />
          <QP questionDesc={sqDesc3} />
          <QP questionDesc={sqDesc4} />
        </>
      );
      break;
    default:
      return;
  }

  return (
    <Box sx={{ overflowY: "scroll", display: "flex", flexDirection: "column", width: "60%" }}>
      <ScenarioBox type="sq">{ScenarioContent}</ScenarioBox>
      {cards.map((card) => (
        <Type5ExamCard {...props} />
      ))}
    </Box>
  );
};
