import { IExamCardProps } from "./IExamCardProps";
import { Type1ExamCard } from "../components/examcards/Type1ExamCard";
import { Type2ExamCard } from "../components/examcards/Type2ExamCard";

export const ExamCard = (props: any) => {
  const qComponentOrder = props?.questionData?.qComponentOrder
    ? props.questionData.qComponentOrder
    : "QP1,QTable1,QP2,QP3,OP";

  const renderQCard = (qComponentOrder: string) => {
    switch (qComponentOrder?.toLowerCase()) {
      case "qp1,qtable1,qp2,qp3,op":
        return <Type1ExamCard {...props} />;
      case "qp1,op":
        return <Type2ExamCard {...props} />;
      default:
        return <div>Not ABle to render card</div>;
    }
  };

  return renderQCard(qComponentOrder);
};
