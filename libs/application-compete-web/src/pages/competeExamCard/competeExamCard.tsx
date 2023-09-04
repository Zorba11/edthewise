import { ExamCard, IExamCardProps } from "@edthewise/application-exams-web";
import { QuestionsStore } from "@edthewise/application-stores-web";
import { container } from "@edthewise/common-inversify";
import { TOKENS } from "@edthewise/common-tokens-web";
import { useRouterStore } from "mobx-state-router";

export const CompeteExamCard = () => {
  const routerStore = useRouterStore();
  const questionsStore = container.get<QuestionsStore>(TOKENS.QuestionsStoreToken);

  const goToCompeteExamResult = (event: any) => {
    event.preventDefault();
    routerStore.goTo("competeExamResult", {
      params: { id: "1" },
    });
  };

  // const qNumber = FMQuestions.QuestionsPool[0].MCQ[0].Qid ? FMQuestions.QuestionsPool[0].MCQ[0].Qid : "1";
  // const qp1desc = FMQuestions.QuestionsPool[0].MCQ[0].QP1 ? FMQuestions.QuestionsPool[0].MCQ[0].QP1 : "";

  // const qTableData = FMQuestions.QuestionsPool[0].MCQ[0].QTable;
  // const qp2 = FMQuestions.QuestionsPool[0].MCQ[0].QP2;
  // const qp3 = FMQuestions.QuestionsPool[0].MCQ[0].QP3 ? FMQuestions.QuestionsPool[0].MCQ[0].QP3 : "";

  // const answerOptions = FMQuestions.QuestionsPool[0].MCQ[0].Options ? FMQuestions.QuestionsPool[0].MCQ[0].Options : [];

  // const totalQNumber = FMQuestions.QuestionsPool[0].MCQ.length;

  const onFinishHandler = (event: any) => {
    event.preventDefault();
    console.log("onFinishHandler");
  };

  const onSubmitHandler = (event: any): void => {
    event.preventDefault();
    console.log("onSubmitHandler");
  };

  const examCardProps: IExamCardProps = {
    onFinishHandler: onFinishHandler,
    withTimer: true,
    questionData: questionsStore.currentQuestion.questionData,
    withNavigation: true,
    disableSubmit: false,
    onSubmitHandler: onSubmitHandler,
  };

  return <ExamCard {...examCardProps} />;
};
