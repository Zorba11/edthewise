import { CardComponent, ICardComponentProps, HeaderWithLogo } from "@edthewise/shared-ui-components";
import { Box, Container } from "@mui/material";
import { useRouterStore } from "mobx-state-router";

/**
 * TODO: this component should be refactored to get the data from the userstores
 * and list leaderboards in priority that are relevant to the user
 */
export const LeaderBoardsList = () => {
  const routerStore = useRouterStore();

  const BUTTON_CARD_HEIGHT = "16rem";
  const BUTTON_CARD_WIDTH = "18rem";
  const BUTTON_CARD_FONT_SIZE = "2rem";

  const goToLeaderBoard = () => {
    routerStore.goTo("leaderboard");
  };

  const leaderBoardLisProps: ICardComponentProps[] = [
    {
      id: 1,
      title: "Histology",
      hoverColor: "#FDCD46", // yellowish
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      gridTemplateColumns: "repeat(2, 1fr)",
      gridTemplateRows: "repeat(2, 1fr)",
      onClick: goToLeaderBoard,
    },
    {
      id: 2,
      title: "Anatomy",
      hoverColor: "#FDCD46", // yellowish
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      gridTemplateColumns: "repeat(2, 1fr)",
      gridTemplateRows: "repeat(2, 1fr)",
      onClick: goToLeaderBoard,
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
      <Container
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",

          position: "relative",
          left: "30%",
        }}
        maxWidth="md"
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            marginTop: "7rem",
            gap: "0",
            justifyContent: "center",
            position: "relative",
            right: "55%",
          }}
        >
          <CardComponent cardProps={leaderBoardLisProps} />
        </Box>
      </Container>
    </Box>
  );
};
