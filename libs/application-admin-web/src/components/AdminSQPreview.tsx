import {
  AdminMCQPreviewStore,
  AdminMCQStore,
  AdminSQPreviewStore,
  AdminSQStore,
  IAdminMCQStore,
  IAdminSQStore,
} from "@edthewise/application-admin-stores-web";
import { ExamCard, IExamCardProps } from "@edthewise/application-exams-web";
import { ADMIN_TOKENS } from "@edthewise/common-admin-token";
import { Box, Button } from "@mui/material";
import { useContainer } from "@redtea/react-inversify";
import { useRouterStore } from "mobx-state-router";

interface IAdminQPreviewProps {
  title: string;
}

export const AdminSQPreview = (props: IAdminQPreviewProps) => {
  const container = useContainer();
  const routerStore = useRouterStore();

  const qPreviewStore = container.get<AdminSQPreviewStore>(ADMIN_TOKENS.AdminSQPreviewStoreToken);
  const adminSQStore: IAdminSQStore = container.get<AdminSQStore>(ADMIN_TOKENS.AdminSQStoreToken);
  const adminMCQStore = container.get<AdminMCQStore>(ADMIN_TOKENS.AdminMCQStoreToken);

  const examCardProps: IExamCardProps = {
    onFinishHandler: () => ({}),
    withTimer: false,
    withNavigation: false,
    disableSubmit: true,
    questionData: qPreviewStore.getQPreview(),
  };

  const handleHappyClick = (e: any) => {
    e?.preventDefault();

    routerStore.goTo("sqMCQEntryForm");

    // send to GPT Fine tuning
  };

  const handleUnhappyClick = (e: any) => {
    e?.preventDefault();

    if (examCardProps?.sqQuestions?.length !== undefined && !(examCardProps.sqQuestions.length > 0)) {
      adminMCQStore.setDataFromStore(true);
      routerStore.goTo("sqMCQEntryForm");
    } else {
      adminSQStore.setDataFromStore(true);
      routerStore.goTo("sqEntryForm");
    }
  };

  return (
    <Box>
      <ExamCard questionData={examCardProps} />
      <Box
        sx={{
          display: "inline-flex", // Set display to "inline-flex" to make the buttons adapt to their content
          marginTop: 2,
          gap: "1rem",
          height: "3rem",
          position: "relative",
          top: "3rem",
          zIndex: 9999,
          left: "30rem",
        }}
      >
        <Button
          sx={{
            width: "5rem",
            bgcolor: "#007bff",
            color: "#fff",
            borderRadius: "0.25rem",
            "&:hover": {
              bgcolor: "green",
            },
          }}
          onClick={handleHappyClick}
        >
          Happy
        </Button>
        <Button
          sx={{
            width: "5rem",
            bgcolor: "#007bff",
            color: "#fff",
            borderRadius: "0.25rem",
            "&:hover": {
              bgcolor: "red",
            },
          }}
          onClick={handleUnhappyClick}
        >
          Unhappy
        </Button>
      </Box>
    </Box>
  );
};
