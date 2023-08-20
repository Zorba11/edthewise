import { ExamCard } from "@edthewise/application-exams-web";
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

  return withFadeIn(<ExamCard onFinishHandler={goToLearnExamResult} withTimer={false} />);
};
