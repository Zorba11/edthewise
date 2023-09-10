import { Box } from "@mui/material";
import { Type5ExamCard } from "./Type5ExamCard";
import { QP } from "../questions/QP";
import { SQTitle } from "../questions/SQTitle";
import ScenarioBox from "../questions/ScenarioBox";
import ExamCardContainer from "./ExamCardContainer";
import { Type2ExamCard } from "./Type2ExamCard";
import { Type4ExamCard } from "./Type4ExamCard";
import { container } from "@edthewise/common-admin-inversify";
import { AdminMCQPreviewStore, AdminSQPreviewStore } from "@edthewise/application-admin-stores-web";
import { ADMIN_TOKENS } from "@edthewise/common-admin-token";

export const SQExamCard = (props: any) => {
  const sqTitle = props?.sqTitle ? props.sqTitle : "Scenario";

  const sqDesc1 = props?.sqDesc1 ? props.sqDesc1 : "hello";

  const sqDesc2 = props?.sqDesc2 ? props.sqDesc2 : "hello";

  const sqDesc3 = props?.sqDesc3 ? props.sqDesc3 : "hello";

  let ScenarioContent;

  const type = props?.sqBoxComponentOrder ? props.sqBoxComponentOrder : "";

  const scenarioContent = getScenarioContent({ type, sqTitle, sqDesc1, sqDesc2, sqDesc3 });

  const totalQNumber = 32;

  const qPreviewStore = container.get<AdminSQPreviewStore>(ADMIN_TOKENS.AdminSQPreviewStoreToken);
  const mcqPreviewStore = container.get<AdminMCQPreviewStore>(ADMIN_TOKENS.AdminmcQPreviewStoreToken);

  const shouldRenderQuestions = qPreviewStore.mcqs?.length > 0 ? true : false;

  if (shouldRenderQuestions) {
    qPreviewStore.mcqs.map((mcq: any) => {
      mcqPreviewStore.setQuestionPreview(mcq, true);
    });
  }

  const renderQCard = (qComponentOrder: string, cardProps: any) => {
    const newProps = {
      ...props,
      questionData: cardProps,
    };

    switch (qComponentOrder?.toLowerCase()) {
      case "qp1,qtable1,qp2,qp3,op":
        // revert back after SQ Implementation
        return (
          <ExamCardContainer withNavigation={true} withTimer={cardProps.withTimer} totalQNumber={totalQNumber}>
            <Type5ExamCard {...newProps} />
          </ExamCardContainer>
        );
      case "qp1,op":
        return <Type2ExamCard {...newProps} />;
      case "qp1,qp2,op":
        return (
          <ExamCardContainer withNavigation={true} withTimer={true} totalQNumber={totalQNumber}>
            <Type5ExamCard {...newProps} />
          </ExamCardContainer>
        );
      case "qp1,qtable1,op":
        <ExamCardContainer withNavigation={true} withTimer={true} totalQNumber={totalQNumber}>
          <Type4ExamCard {...newProps} />
        </ExamCardContainer>;
        break;
      case "qp1,qtable1,qp2,qtable2,qp3,op":
        <ExamCardContainer withNavigation={true} withTimer={true} totalQNumber={totalQNumber}>
          <Type4ExamCard {...newProps} />
        </ExamCardContainer>;
        break;
      default:
        return <div>Not ABle to render card</div>;
    }
  };

  return (
    <Box sx={{ overflowY: "scroll", display: "flex", flexDirection: "column", width: "60%" }}>
      <ScenarioBox type="sq">{scenarioContent}</ScenarioBox>
      {shouldRenderQuestions && mcqPreviewStore.sqMcqs.map((mcq: any) => renderQCard(mcq.qComponentOrder, mcq))}
    </Box>
  );
};

interface IScenarioContentProps {
  type?: string;
  sqTitle: string;
  sqDesc1: string;
  sqDesc2: string;
  sqDesc3: string;
}

const getScenarioContent = ({ type, sqTitle, sqDesc1, sqDesc2, sqDesc3 }: IScenarioContentProps) => {
  switch (type?.toLowerCase()) {
    case "sq":
      return (
        <>
          <SQTitle desc={sqTitle} />
          <QP questionDesc={sqDesc1} />
          <QP questionDesc={sqDesc2} />
          <QP questionDesc={sqDesc3} />
        </>
      );
    case "sqdesc1,sqdesc2,sqdesc3":
      return (
        <>
          <SQTitle desc={sqTitle} />
          <QP questionDesc={sqDesc1} />
          <QP questionDesc={sqDesc2} />
          <QP questionDesc={sqDesc3} />
        </>
      );
    default:
      return null;
  }
};
