import { ExamCard, IExamCardProps } from "@edthewise/application-exams-web";
import { QuestionsStore } from "@edthewise/application-stores-web";
import { TOKENS } from "@edthewise/common-tokens-web";
import { withFadeIn } from "@edthewise/shared-ui-components";
import { useService } from "@redtea/react-inversify";
import { useRouterStore } from "mobx-state-router";

export const LearnExamCard = () => {
  const routerStore = useRouterStore();
  const questionsStore = useService<QuestionsStore>(TOKENS.QuestionsStoreToken);

  const goToLearnExamResult = (event: any) => {
    event.preventDefault();
    routerStore.goTo("learnExamResult", {
      params: { id: "1" },
    });
  };

  const onFinishHandler = (event: any) => {
    event.preventDefault();
    console.log("onFinishHandler");
  };

  const examCardProps: IExamCardProps = {
    onFinishHandler: onFinishHandler,
    withTimer: true,
    questionData: questionsStore.currentQuestion.questionData,
  };

  return <ExamCard {...examCardProps} />;
};
