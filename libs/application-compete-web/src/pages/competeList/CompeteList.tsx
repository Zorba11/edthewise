import { CardComponent, AvatarDropDownMenu, ICardComponentProps } from "@edthewise/shared-ui-components";
import { Box, Container, Paper, Typography } from "@mui/material";
import { useRouterStore } from "mobx-state-router";
import GroupsIcon from "@mui/icons-material/Groups";
import BorderColorSharpIcon from "@mui/icons-material/BorderColorSharp";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

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
              justifyContent: "center",
              position: "relative",
              top: "3rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              {/* Students attempted */}
              <Typography color="#4B82C3" variant="h6" component="h4">
                Students Attempted
              </Typography>
              <GroupsIcon
                sx={{
                  position: "relative",
                  left: "0.5rem",
                  bottom: "0.2rem",
                  color: "#4B82C3",
                }}
                fontSize="large"
              />
              <Typography
                sx={{
                  position: "relative",
                  left: "1rem",
                  color: "#4B82C3",
                }}
                variant="h6"
                component="h4"
              >
                : 10
              </Typography>
            </Box>

            {/* User attempts */}

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "0.2rem",
              }}
            >
              <Typography
                sx={{
                  color: "#4B82C3",
                }}
                variant="h6"
                component="h4"
              >
                Your Attempts
              </Typography>
              <BorderColorSharpIcon
                sx={{
                  color: "#4B82C3",
                  position: "relative",
                  left: "0.5rem",
                }}
              />
              <Typography
                sx={{
                  color: "#4B82C3",
                  position: "relative",
                  left: "1rem",
                  bottom: "0.1rem",
                }}
                variant="h6"
                component="h4"
              >
                : 2
              </Typography>
            </Box>

            {/* Top score */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "0.3rem",
              }}
            >
              <Typography
                sx={{
                  color: "#4B82C3",
                }}
                variant="h6"
                component="h4"
              >
                Top Score
              </Typography>
              <SportsScoreIcon
                sx={{
                  color: "#4B82C3",
                  position: "relative",
                  left: "0.3rem",
                  bottom: "0.3rem",
                }}
                fontSize="large"
              />
              <Typography
                sx={{
                  color: "#4B82C3",
                  position: "relative",
                  left: "1rem",
                }}
                variant="h6"
                component="h4"
              >
                : <span> 48 marks </span> <span>in 32 minutes </span>
              </Typography>
            </Box>
            {/* Price money */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Typography
                sx={{
                  color: "#4B82C3",
                }}
                variant="h6"
                component="h4"
              >
                If you can beat, You will win :
              </Typography>
              <CurrencyRupeeIcon
                sx={{
                  color: "#4B82C3",
                  position: "relative",
                  left: "0.3rem",
                  top: "0.2rem",
                }}
              />
              <Typography
                sx={{
                  color: "#4B82C3",
                  position: "relative",
                  left: "0.4rem",
                }}
                variant="h6"
                component="h4"
              >
                1000
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    );
  }
};
