import { ExamCard, IExamCardProps } from "@edthewise/application-exams-web";
import { QuestionsStore } from "@edthewise/application-stores-web";
import { TOKENS } from "@edthewise/common-tokens-web";
import { withFadeIn } from "@edthewise/shared-ui-components";
import { Box } from "@mui/material";
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

  const onSubmitHandler = (event: any): void => {
    event.preventDefault();
    console.log("onSubmitHandler");
  };

  const examCardProps: IExamCardProps = {
    onFinishHandler: onFinishHandler,
    withTimer: false,
    questionData: questionsStore.currentQuestion.questionData,
    withNavigation: true,
    disableSubmit: false,
    onSubmitHandler: onSubmitHandler,
    withEd: true,
  };

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
