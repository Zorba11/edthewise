import { ExamCard, IExamCardProps } from "@edthewise/application-exams-web";
import { CompeteExamsStore, QuestionsUiStore } from "@edthewise/application-stores-web";
import { container } from "@edthewise/common-inversify";
import { TOKENS } from "@edthewise/common-tokens-web";
import { Box } from "@mui/material";
import { useRouterStore } from "mobx-state-router";
import { useEffect } from "react";

export const LearnExamCard = () => {
  const routerStore = useRouterStore();
  const examsStore = container.get<CompeteExamsStore>(TOKENS.ExamStoreToken);
  const questionsUiStore = container.get<QuestionsUiStore>(TOKENS.QuestionsUiStoreToken);

  const goToLearnExamResult = (event: any) => {
    event.preventDefault();
    routerStore.goTo("learnExamResult", {
      params: { id: "1" },
    });
  };

  const onSubmitHandler = (event: any): void => {
    event.preventDefault();

    questionsUiStore.submitAnswer();

    // TODO: Remove this in production
    // if (questionsStore.currentQuestion.qNumber === 3) {
    //   questionsStore.submitExam();
    //   goToCompeteExamResult();
    // }

    // TODO: uncomment in production
    if (questionsUiStore.shouldSubmitExam) {
      questionsUiStore.submitExam();
      goToLearnExamResult(event);
    }
  };

  const examCardProps: IExamCardProps = {
    onFinishHandler: questionsUiStore.onFinishHandler,
    withTimer: false,
    questionData: questionsUiStore.currentQuestion,
    withNavigation: true,
    disableSubmit: false,
    onSubmitHandler: onSubmitHandler,
    withEd: false,
    goToNextQuestion: questionsUiStore.goToNextQuestion,
    goToPrevQuestion: questionsUiStore.goToPreviousQuestion,
    submittedQuestions: questionsUiStore.submittedQuestions,
    onQNumClick: questionsUiStore.onQNumberClick,
    totalQuestions: questionsUiStore.totalQuestions,
    showAnswer: false,
    showErr: questionsUiStore.showOptionNotSelectedError,
    startTime: examsStore.getStartTime(),
  };

  useEffect(() => {
    return questionsUiStore.initkeyBoardNavListeners();
  });

  return (
    <Box
      sx={{
        backgroundColor: "#0D1A37",
      }}
    >
      <ExamCard {...examCardProps} />
    </Box>
  );
};
