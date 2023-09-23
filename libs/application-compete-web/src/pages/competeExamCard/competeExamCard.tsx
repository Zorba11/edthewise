import { ExamCard, IExamCardProps } from "@edthewise/application-exams-web";
import { QuestionsStore } from "@edthewise/application-stores-web";
import { container } from "@edthewise/common-inversify";
import { TOKENS } from "@edthewise/common-tokens-web";
import { observer } from "mobx-react";
import { useRouterStore } from "mobx-state-router";
import { useEffect } from "react";

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

  const onQNumberClick = (event: any, questionNumber: number) => {
    event?.preventDefault();
    questionsStore.setQuestionByNum(questionNumber);
  };

  const onSubmitHandler = (event: any): void => {
    event.preventDefault();
    console.log("onSubmitHandler");
    questionsStore.submitAnswer("abcd");

    // TODO: Remove this in production
    // if (questionsStore.currentQuestion.qNumber && questionsStore.currentQuestion.qNumber < 3) {
    //   goToCompeteExamResult();
    // }
  };

  const goToNextQuestion = (event: any) => {
    event.preventDefault();
    // TODO: Remove this in production
    if (questionsStore.currentQuestion.qNumber === questionsStore.totalQuestions) {
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

  const goToQuestion = (event: any, qNumber: number) => {
    event.preventDefault();
    onQNumberClick(event, qNumber);
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
    submittedQuestions: questionsStore.submittedQuestions,
    onQNumClick: onQNumberClick,
    totalQuestions: questionsStore.totalQuestions,
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const qNumber = questionsStore?.currentQuestion?.qNumber ?? 1;
      const totalQuestions = questionsStore.totalQuestions;

      if (event.key === "ArrowLeft") {
        goToPreviousQuestion(event);
      } else if (event.key === "ArrowRight") {
        goToNextQuestion(event);
      } else if (event.key === "ArrowDown" && qNumber + 10 <= totalQuestions) {
        goToQuestion(event, qNumber + 10);
      } else if (event.key === "ArrowUp" && qNumber - 10 >= 1) {
        goToQuestion(event, qNumber - 10);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return <ExamCard {...examCardProps} />;
});
