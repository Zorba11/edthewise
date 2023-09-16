import { ExamCard, IExamCardProps } from "@edthewise/application-exams-web";
import { QuestionsStore } from "@edthewise/application-stores-web";
import { container } from "@edthewise/common-inversify";
import { TOKENS } from "@edthewise/common-tokens-web";
import { Box } from "@mui/material";
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

  const onFinishHandler = (event: any) => {
    event.preventDefault();
    console.log("onFinishHandler");
  };

  const onSubmitHandler = (event: any): void => {
    event.preventDefault();
    console.log("onSubmitHandler");
    questionsStore.setNextQuestion();
    // routerStore.goTo("competeExamResult", {
    //   params: { id: "1" },
    // });
  };

  const examCardProps: IExamCardProps = {
    onFinishHandler: onFinishHandler,
    withTimer: true,
    questionData: questionsStore.currentQuestion.questionData,
    withNavigation: true,
    disableSubmit: false,
    onSubmitHandler: onSubmitHandler,
    withEd: false,
  };

  return <ExamCard {...examCardProps} />;
};
