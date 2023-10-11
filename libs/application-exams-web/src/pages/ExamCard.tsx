import { SQExamCard } from "../components/examcards/SQExamCard";
import { Type4ExamCard } from "../components/examcards/Type4ExamCard";
import { Type5ExamCard } from "../components/examcards/Type5ExamCard";

import ExamCardContainer from "../components/examcards/ExamCardContainer";
import { IExamCardProps } from "./IExamCardProps";

export const ExamCard = (props: IExamCardProps) => {
  const qComponentOrder = props?.questionData?.qComponentOrder ? props.questionData.qComponentOrder : "SQ";

  // const sqType = props?.questionData?.questionData?.sqType ? props?.questionData?.questionData?.sqType : false;

  // if (sqType) qComponentOrder = "SQ";

  const renderQCard = (qComponentOrder: string) => {
    switch (qComponentOrder?.toLowerCase()) {
      case "qp1,qtable1,qp2,qp3,op":
        // revert back after SQ Implementation
        return (
          <ExamCardContainer
            goToPrevQuestion={props?.goToPrevQuestion}
            goToNextQuestion={props?.goToNextQuestion}
            withNavigation={true}
            withTimer={props?.withTimer}
            currentQNumber={props?.questionData?.qNumber}
            submittedQuestions={props?.submittedQuestions}
            onQNumClick={props?.onQNumClick}
            totalQuestions={props?.totalQuestions}
          >
            <Type5ExamCard
              onSubmitHandler={props?.onSubmitHandler}
              onFinishHandler={() => ({})}
              withTimer={props?.withTimer}
              withNavigation={true}
              questionData={props?.questionData}
              disableSubmit={false}
              showAnswer={props?.showAnswer}
              showErr={props?.showErr}
            />
          </ExamCardContainer>
        );
      case "qp1,op":
        return (
          <ExamCardContainer
            goToPrevQuestion={props?.goToPrevQuestion}
            goToNextQuestion={props?.goToNextQuestion}
            withNavigation={true}
            withTimer={props?.withTimer}
            currentQNumber={props?.questionData?.qNumber}
            submittedQuestions={props?.submittedQuestions}
            onQNumClick={props?.onQNumClick}
            totalQuestions={props?.totalQuestions}
          >
            <Type5ExamCard
              onSubmitHandler={props?.onSubmitHandler}
              onFinishHandler={() => ({})}
              withTimer={props?.withTimer}
              withNavigation={true}
              questionData={props?.questionData}
              disableSubmit={false}
              showAnswer={props?.showAnswer}
              showErr={props?.showErr}
            />
          </ExamCardContainer>
        );
      case "qp1,qp2,op":
        return (
          <ExamCardContainer
            goToNextQuestion={props?.goToNextQuestion}
            goToPrevQuestion={props?.goToPrevQuestion}
            withNavigation={true}
            withTimer={true}
            currentQNumber={props?.questionData?.qNumber}
            submittedQuestions={props?.submittedQuestions}
            onQNumClick={props?.onQNumClick}
            totalQuestions={props?.totalQuestions}
          >
            <Type5ExamCard {...props} />
          </ExamCardContainer>
        );
      case "qp1,qtable1,op":
        return (
          <ExamCardContainer
            goToPrevQuestion={props?.goToPrevQuestion}
            goToNextQuestion={props?.goToNextQuestion}
            withNavigation={true}
            withTimer={props?.withTimer}
            currentQNumber={props?.questionData?.qNumber}
            submittedQuestions={props?.submittedQuestions}
            onQNumClick={props?.onQNumClick}
            totalQuestions={props?.totalQuestions}
          >
            <Type4ExamCard {...props} />
          </ExamCardContainer>
        );
      case "qp1,qtable1,qp2,qtable2,qp3,op":
        return (
          <ExamCardContainer
            goToNextQuestion={props?.goToNextQuestion}
            goToPrevQuestion={props?.goToPrevQuestion}
            withNavigation={true}
            withTimer={true}
            currentQNumber={props?.questionData?.qNumber}
            submittedQuestions={props?.submittedQuestions}
            onQNumClick={props?.onQNumClick}
            totalQuestions={props?.totalQuestions}
          >
            <Type4ExamCard {...props} />
          </ExamCardContainer>
        );
      case "sq":
        return (
          <ExamCardContainer
            goToNextQuestion={props?.goToNextQuestion}
            goToPrevQuestion={props?.goToPrevQuestion}
            withEd={props?.withEd}
            withNavigation={props?.withNavigation}
            withTimer={props?.withTimer}
            currentQNumber={props?.questionData?.qNumber}
            submittedQuestions={props?.submittedQuestions}
            onQNumClick={props?.onQNumClick}
            totalQuestions={props?.totalQuestions}
          >
            <SQExamCard {...props?.questionData} />
          </ExamCardContainer>
        );
      default:
        return <div>Not ABle to render card</div>;
    }
  };
  return renderQCard(qComponentOrder);
};

// qp1,qtable1,qp2,qtable2,qp3,op
