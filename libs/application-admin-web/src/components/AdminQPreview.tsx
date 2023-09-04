import { AdminQPreviewStore, AdminQStore, IAdminQStore } from "@edthewise/application-admin-stores-web";
import { ExamCard, IExamCardProps } from "@edthewise/application-exams-web";
import { ADMIN_TOKENS } from "@edthewise/common-admin-token";
import { Box, Button } from "@mui/material";
import { useContainer } from "@redtea/react-inversify";
import { useRouterStore } from "mobx-state-router";

export interface IAdminQPreviewProps {
  title: string;
}

export const AdminQPreview = (props: IAdminQPreviewProps) => {
  const container = useContainer();
  const routerStore = useRouterStore();

  const qPreviewStore = container.get<AdminQPreviewStore>(ADMIN_TOKENS.AdminQPreviewStoreToken);
  const adminQStore: IAdminQStore = container.get<AdminQStore>(ADMIN_TOKENS.AdminQStoreToken);

  const examCardProps: IExamCardProps = {
    onFinishHandler: () => ({}),
    withTimer: false,
    withNavigation: false,
    disableSubmit: true,
    ...qPreviewStore?.getQPreview(),
  };

  const handleHappyClick = (e: any) => {
    e?.preventDefault();
    adminQStore.setCurrentFormData(null);
    adminQStore.setDataFromStore(false);
    routerStore.goTo("home");

    // send to GPT Fine tuning
  };

  const handleUnhappyClick = (e: any) => {
    e?.preventDefault();
    adminQStore.setDataFromStore(true);
    routerStore.goTo("home");
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
