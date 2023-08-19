import { ExamCard } from "@edthewise/application-exams-web";
import { useRouterStore } from "mobx-state-router";

export const LearnExamCard = () => {
  const routerStore = useRouterStore();

  const goToLearnExamResult = (event: any) => {
    event.preventDefault();
    routerStore.goTo("learnExamResult", {
      params: { id: "1" },
    });
  };

  return <ExamCard onFinishHandler={goToLearnExamResult} withTimer={false} />;
};
