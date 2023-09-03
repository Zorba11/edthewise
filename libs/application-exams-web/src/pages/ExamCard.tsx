import { IExamCardProps } from "./IExamCardProps";
import { Type1ExamCard } from "../components/examcards/Type1ExamCard";

export const ExamCard = (props: IExamCardProps) => {
  const qComponentOrder = props?.questionData?.qComponentOrder
    ? props.questionData.qComponentOrder
    : "QP1,QTable1,QP2,QP3,OP";

  const renderQCard = (qComponentOrder: string) => {
    switch (qComponentOrder) {
      case "QP1,QTable1,QP2,QP3,OP":
        return <Type1ExamCard {...props} />;
    }
  };

  return renderQCard(qComponentOrder);
};
