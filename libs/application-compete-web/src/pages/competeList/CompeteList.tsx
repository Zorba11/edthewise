import { CardComponent, AvatarDropDownMenu, ICardComponentProps } from "@edthewise/shared-ui-components";
import { Box, Container, Paper, Typography } from "@mui/material";
import { useRouterStore } from "mobx-state-router";

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
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Work Sans",
              color: "#4B82C3",
            }}
            variant="h2"
            component="h1"
          >
            Anatomy
          </Typography>
        </Box>
        {/* Question */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            marginTop: "2rem",
            gap: "0",
          }}
        >
          <CardComponent cardProps={examListProps} />
          {CompeteExamDetails()}
        </Box>
      </Container>
    </Box>
  );

  function CompeteExamDetails() {
    return (
      <Paper
        sx={{
          width: "45%",
          height: "27rem",
          backgroundColor: "#f4f2f2",
          marginTop: "1rem",
        }}
        elevation={5}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "4rem",
            }}
          >
            <Typography variant="h5" component="h4">
              Students Attempted: <span> 0 </span>
            </Typography>
            <Typography variant="h5" component="h4">
              Your Attempts: <span> 0 </span>
            </Typography>
            <Typography variant="h5" component="h4">
              Top Score: <span> 48 marks </span> <span> 32 minutes </span>
            </Typography>
            <Typography variant="h5" component="h4">
              Price Money: <span> 0 </span>
            </Typography>
          </Box>
        </Box>
      </Paper>
    );
  }
};
