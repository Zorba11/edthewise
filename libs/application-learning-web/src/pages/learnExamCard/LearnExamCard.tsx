import { ExamCard, IExamCardProps } from "@edthewise/application-exams-web";
import { questionsUiStore } from "@edthewise/application-stores-web";
import { withFadeIn } from "@edthewise/shared-ui-components";
import { useRouterStore } from "mobx-state-router";

export const LearnExamCard = () => {
  const routerStore = useRouterStore();

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
    questionData: questionsUiStore.currentQuestion.questionData,
  };

  return <ExamCard {...examCardProps} />;
};
