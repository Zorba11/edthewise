import { ExamCard } from "@edthewise/application-exams-web";
import { useRouterStore } from "mobx-state-router";

export const CompeteExamCard = () => {
  const routerStore = useRouterStore();

  const goToCompeteExamResult = (event: any) => {
    event.preventDefault();
    routerStore.goTo("competeExamResult", {
      params: { id: "1" },
    });
  };

  return <ExamCard onFinishHandler={goToCompeteExamResult} withTimer={true} />;
};
