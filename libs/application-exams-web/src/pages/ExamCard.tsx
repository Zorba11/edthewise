import { SQExamCard } from "../components/examcards/SQExamCard";
import { Type2ExamCard } from "../components/examcards/Type2ExamCard";
import { Type4ExamCard } from "../components/examcards/Type4ExamCard";
import { Type5ExamCard } from "../components/examcards/Type5ExamCard";

import ExamCardContainer from "../components/examcards/ExamCardContainer";

export const ExamCard = (props: any) => {
  let qComponentOrder = props?.questionData?.qComponentOrder ? props.questionData.qComponentOrder : "SQ";

  const sqType = props?.questionData?.questionData?.sqType ? props?.questionData?.questionData?.sqType : false;

  if (sqType) qComponentOrder = "SQ";

  const totalQNumber = 32;

  const renderQCard = (qComponentOrder: string) => {
    switch (qComponentOrder?.toLowerCase()) {
      case "qp1,qtable1,qp2,qp3,op":
        // revert back after SQ Implementation
        return (
          <ExamCardContainer withNavigation={true} withTimer={props.withTimer} totalQNumber={totalQNumber}>
            <Type5ExamCard {...props} />
          </ExamCardContainer>
        );
      case "qp1,op":
        return <Type2ExamCard {...props} />;
      case "qp1,qp2,op":
        return (
          <ExamCardContainer withNavigation={true} withTimer={true} totalQNumber={totalQNumber}>
            <Type5ExamCard {...props} />
          </ExamCardContainer>
        );
      case "qp1,qtable1,op":
        <ExamCardContainer withNavigation={true} withTimer={true} totalQNumber={totalQNumber}>
          <Type4ExamCard {...props} />
        </ExamCardContainer>;
        break;
      case "qp1,qtable1,qp2,qtable2,qp3,op":
        <ExamCardContainer withNavigation={true} withTimer={true} totalQNumber={totalQNumber}>
          <Type4ExamCard {...props} />
        </ExamCardContainer>;
        break;
      case "sq":
        return (
          <ExamCardContainer
            withEd={true}
            withNavigation={true}
            withTimer={props?.questionData?.withTimer}
            totalQNumber={totalQNumber}
          >
            <SQExamCard {...props?.questionData?.questionData} />
          </ExamCardContainer>
        );
      default:
        return <div>Not ABle to render card</div>;
    }
  };

  return renderQCard(qComponentOrder);
};

// qp1,qtable1,qp2,qtable2,qp3,op
