import { CardComponent, ICardComponentProps, HeaderWithLogo } from "@edthewise/shared-ui-components";
import { Box, Container } from "@mui/material";
import { useRouterStore } from "mobx-state-router";
import { CompeteExamStarterDetails } from "../../components/CompeteExamStarterDetails";
import { ExamTitleAndRules } from "../../components/ExamTitleAndRules";
import { CompeteListStore, CompeteListStoreToken } from "@edthewise/application-stores-web";
import { container } from "@edthewise/common-inversify";

export const CompeteList = () => {
  const routerStore = useRouterStore();

  const competeListStore = container.get<CompeteListStore>(CompeteListStoreToken);

  const BUTTON_CARD_HEIGHT = "25rem";
  const BUTTON_CARD_WIDTH = "23rem";
  const BUTTON_CARD_FONT_SIZE = "3rem";

  const competeExamNavigationClick = () => {
    routerStore.goTo("competeExamCard", {
      params: { id: "1", subject: subjectTitle },
    });
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
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <HeaderWithLogo />
      {/* exams list container */}
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
    </Box>
  );
};
