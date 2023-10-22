import { ExamCard, IExamCardProps } from "@edthewise/application-exams-web";
import { CompeteExamsStore, QuestionsUiStore } from "@edthewise/application-stores-web";
import { container } from "@edthewise/common-inversify";
import { TOKENS } from "@edthewise/common-tokens-web";
import { observer } from "mobx-react";
import { useRouterStore } from "mobx-state-router";
import { useEffect } from "react";

export const CompeteExamCard = observer(() => {
  const routerStore = useRouterStore();
  const examsStore = container.get<CompeteExamsStore>(TOKENS.ExamStoreToken);
  const questionUiStore = container.get<QuestionsUiStore>(TOKENS.QuestionsUiStoreToken);

  const goToCompeteExamResult = () => {
    routerStore.goTo("competeExamResult", {
      params: { id: "1" },
    });
  };

  const onSubmitHandler = (event: any): void => {
    event.preventDefault();

    questionUiStore.submitAnswer();

    // TODO: Remove this in production
    // if (questionsStore.currentQuestion.qNumber === 3) {
    //   questionsStore.submitExam();
    //   goToCompeteExamResult();
    // }

    // TODO: uncomment in production
    if (questionUiStore.shouldSubmitExam) {
      questionUiStore.submitExam();
      goToCompeteExamResult();
    }
  };

  const examCardProps: IExamCardProps = {
    onFinishHandler: questionUiStore.onFinishHandler,
    withTimer: true,
    questionData: questionUiStore.currentQuestion,
    withNavigation: true,
    disableSubmit: false,
    onSubmitHandler: onSubmitHandler,
    withEd: false,
    goToNextQuestion: questionUiStore.goToNextQuestion,
    goToPrevQuestion: questionUiStore.goToPreviousQuestion,
    submittedQuestions: questionUiStore.submittedQuestions,
    onQNumClick: questionUiStore.onQNumberClick,
    totalQuestions: questionUiStore.totalQuestions,
    showAnswer: false,
    showErr: questionUiStore.showOptionNotSelectedError,
    startTime: examsStore.getStartTime(),
  };

  useEffect(() => {
    return questionUiStore.initkeyBoardNavListeners();
  });

  return <ExamCard {...examCardProps} />;
});
