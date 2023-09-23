import { ExamCard, IExamCardProps } from "@edthewise/application-exams-web";
import { QuestionsStore } from "@edthewise/application-stores-web";
import { container } from "@edthewise/common-inversify";
import { TOKENS } from "@edthewise/common-tokens-web";
import { observer } from "mobx-react";
import { useRouterStore } from "mobx-state-router";

export const CompeteExamCard = observer(() => {
  const routerStore = useRouterStore();
  const questionsStore = container.get<QuestionsStore>(TOKENS.QuestionsStoreToken);

  const goToCompeteExamResult = () => {
    routerStore.goTo("competeExamResult", {
      params: { id: "1" },
    });
  };

  const onFinishHandler = (event: any) => {
    event.preventDefault();
    console.log("onFinishHandler");
  };

  const onSubmitHandler = (event: any): void => {
    event.preventDefault();
    console.log("onSubmitHandler");
    questionsStore.setNextQuestion();

    // TODO: Remove this in production
    if (questionsStore.currentQuestion.qNumber && questionsStore.currentQuestion.qNumber < 3) {
      goToCompeteExamResult();
    }
  };

  const goToNextQuestion = (event: any) => {
    event.preventDefault();
    // TODO: Remove this in production
    if (questionsStore.currentQuestion.qNumber && questionsStore.currentQuestion.qNumber > 3) {
      return;
    }
    questionsStore.setNextQuestion();
  };

  const goToPreviousQuestion = (event: any) => {
    event.preventDefault();
    if (questionsStore.currentQuestion.qNumber && questionsStore.currentQuestion.qNumber !== 1) {
      questionsStore.setPreviousQuestion();
    }
  };

  const examCardProps: IExamCardProps = {
    onFinishHandler: onFinishHandler,
    withTimer: true,
    questionData: questionsStore.currentQuestion,
    withNavigation: true,
    disableSubmit: false,
    onSubmitHandler: onSubmitHandler,
    withEd: false,
    goToNextQuestion: goToNextQuestion,
    goToPrevQuestion: goToPreviousQuestion,
  };

  return <ExamCard {...examCardProps} />;
});
