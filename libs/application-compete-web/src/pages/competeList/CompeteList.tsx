import { CardComponent, ICardComponentProps, HeaderWithLogo } from "@edthewise/shared-ui-components";
import { Backdrop, Box, CircularProgress, Container } from "@mui/material";
import { useRouterStore } from "mobx-state-router";
import { CompeteExamStarterDetails } from "../../components/CompeteExamStarterDetails";
import { ExamTitleAndRules } from "../../components/ExamTitleAndRules";
import { CompeteListStore, CompeteListStoreToken } from "@edthewise/application-stores-web";
import { container } from "@edthewise/common-inversify";
import { PanCakesStore } from "@edthewise/application-payments-web";
import { TOKENS } from "@edthewise/common-tokens-web";
import React from "react";
import { ExamLockBackdrop } from "../../components/ExamLockBakkdrop";

export const CompeteList = () => {
  const [modalOpen, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const routerStore = useRouterStore();

  const competeListStore = container.get<CompeteListStore>(CompeteListStoreToken);
  const panCakesStore = container.get<PanCakesStore>(TOKENS.PanCakesStoreToken);

  const pancakeCount = panCakesStore.getPanCakesCount();

  const BUTTON_CARD_HEIGHT = "25rem";
  const BUTTON_CARD_WIDTH = "23rem";
  const BUTTON_CARD_FONT_SIZE = "3rem";

  const competeExamNavigationClick = (e?: any) => {
    e?.preventDefault();

    if (pancakeCount < 1) {
      handleOpen();
      // TODO: remove this in production
      routerStore.goTo("competeExamCard", {
        queryParams: { subject: subjectTitle },
      });
    } else {
      routerStore.goTo("competeExamCard", {
        queryParams: { subject: subjectTitle },
      });
    }
  };

  const subjectTitle = competeListStore.currentSubjectTitle;
  const examStats: any = competeListStore?.currentExamStats;

  const rules = `🏆 Compete, Shine, and Win Big with EdTheWise! 🏆

  Greetings, ambitious scholar! For a modest entrance fee of just ₹100, you can embark on our monthly compete exam. Not only will you challenge your knowledge and skills, but you also stand a chance to win a substantial prize!
  
  How does it work? Simple:
  ✨ 40% of every rupee we collect from the compete exam goes straight into our prize pool.
  ✨ The more students that compete, the bigger the prize!
  ✨ Become the top scorer of the month and walk away with a grand prize of 25% of the total prize pool.`;

  const examListProps: ICardComponentProps[] = [
    {
      id: 1,
      title: examStats.examTitle,
      hoverColor: "#FDCD46", // yellowish
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      gridTemplateColumns: "repeat(2, 1fr)",
      gridTemplateRows: "repeat(2, 1fr)",
      onClick: competeExamNavigationClick,
      showLock: pancakeCount > 0 ? false : true,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <HeaderWithLogo onPanCakeClick={handleOpen} pancakeCount={pancakeCount} />

      {subjectTitle && examStats ? (
        renderExamTitleAndStatsComp(subjectTitle, rules, examListProps, examStats)
      ) : (
        // TODO: Add a loading spinner or a loading page
        <div>Loading...</div>
      )}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={modalOpen}
        onClick={handleClose}
      >
        <ExamLockBackdrop />
      </Backdrop>
    </Box>
  );
};

function renderExamTitleAndStatsComp(
  subjectTitle: string,
  rules: string,
  examListProps: ICardComponentProps[],
  examStats: any,
) {
  return (
    <Container>
      <ExamTitleAndRules title={subjectTitle} rules={rules} />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          marginTop: "2rem",
          gap: "0",
          justifyContent: "center",
          position: "relative",
          right: "3rem",
        }}
      >
        <CardComponent cardProps={examListProps} />
        <CompeteExamStarterDetails
          studentsAttempted={examStats?.studentsAttempted}
          yourAttempts={2}
          topScore={examStats?.topScore}
          prizeMoney={examStats?.prizeMoney}
        />
      </Box>
    </Container>
  );
}
