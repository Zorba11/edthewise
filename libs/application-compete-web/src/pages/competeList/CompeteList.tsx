import { CardComponent, AvatarDropDownMenu, ICardComponentProps } from "@edthewise/shared-ui-components";
import { Box, Container, Typography } from "@mui/material";
import { useRouterStore } from "mobx-state-router";
import { CompeteExamStarterDetails } from "../../components/CompeteExamStarterDetails";
import { ExamTitleAndRules } from "../../components/ExamTitleAndRules";

export const CompeteList = () => {
  const routerStore = useRouterStore();

  const BUTTON_CARD_HEIGHT = "25rem";
  const BUTTON_CARD_WIDTH = "23rem";
  const BUTTON_CARD_FONT_SIZE = "3rem";

  const competeExamNavigationClick = () => {
    routerStore.goTo("competeExamCard", {
      params: { id: "1" },
    });
  };

  const rules = `🏆 Compete, Shine, and Win Big with EdTheWise! 🏆

  Greetings, ambitious scholar! For a modest entrance fee of just ₹100, you can embark on our monthly compete exam. Not only will you challenge your knowledge and skills, but you also stand a chance to win a substantial prize!
  
  How does it work? Simple:
  ✨ 40% of every rupee we collect from the compete exam goes straight into our prize pool.
  ✨ The more students that compete, the bigger the prize!
  ✨ Become the top scorer of the month and walk away with a grand prize of 25% of the total prize pool.`;

  const examListProps: ICardComponentProps[] = [
    {
      id: 1,
      title: "June 2023",
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
      <Box
        sx={{
          marginRight: "0",
          position: "relative",
          left: "95%",
          top: "2rem",
        }}
      >
        <AvatarDropDownMenu />
      </Box>
      {/* exams list container */}
      <Container>
        <ExamTitleAndRules title="Anatomy" rules={rules} />
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
            studentsAttempted={10}
            yourAttempts={2}
            topScore={{ marks: 48, duration: "in 32 minutes" }}
            prizeMoney={1000}
          />
        </Box>
      </Container>
    </Box>
  );
};
