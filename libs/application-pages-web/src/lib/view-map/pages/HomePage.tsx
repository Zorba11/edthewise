import { useRouterStore } from "mobx-state-router";
import { CardComponent, ICardComponentProps, AvatarDropDownMenu } from "@edthewise/shared-ui-components";
import homeEdPic from "../../assets/ed-2.png";
import { Box, Container } from "@mui/material";
import { userSiderMenuItems } from "@edthewise/common-component-data";

export const HomePage = (props: any) => {
  const routerStore = useRouterStore();

  const BUTTON_CARD_HEIGHT = "10rem";
  const BUTTON_CARD_WIDTH = "18rem";
  const BUTTON_CARD_FONT_SIZE = "3rem";

  const learnNavigationClick = () => {
    routerStore.goTo("learnHome");
  };

  const competeNavigationClick = () => {
    routerStore.goTo("competeHome");
  };

  const chatNavigationClick = () => {
    routerStore.goTo("chatHome");
  };

  const leaderBoardNavigationClick = () => {
    routerStore.goTo("leaderboardsList");
  };

  const cardProps: ICardComponentProps[] = [
    {
      id: 1,
      title: "Compete",
      subtitle: "with Mates",
      hoverColor: "#FDCD46", // yellowish
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      gridTemplateColumns: "repeat(2, 1fr)",
      gridTemplateRows: "repeat(2, 1fr)",
      onClick: competeNavigationClick,
    },
    {
      id: 2,
      title: "Leader boards",
      // subtitle: "with Ed",
      hoverColor: "#4B82C3", // blueish
      // hoverColor: "#52ddc8", // chat primary color
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      onClick: leaderBoardNavigationClick,
    },
    // {
    //   id: 3,
    //   title: "Learn",
    //   subtitle: "with Ed",
    //   hoverColor: "#4B82C3", // blueish
    //   buttonHeight: BUTTON_CARD_HEIGHT,
    //   buttonWidth: BUTTON_CARD_WIDTH,
    //   titleFontSize: BUTTON_CARD_FONT_SIZE,
    //   onClick: learnNavigationClick,
    // },
    // {
    //   id: 4,
    //   title: "Teach",
    //   subtitle: "with Ed",
    //   hoverColor: "#4de1f2", // sky blueish
    //   buttonHeight: BUTTON_CARD_HEIGHT,
    //   buttonWidth: BUTTON_CARD_WIDTH,
    //   titleFontSize: BUTTON_CARD_FONT_SIZE,
    //   onClick: learnNavigationClick,
    // },
  ];

  return (
    <>
      <Box sx={{ position: "absolute", top: 18, right: 25 }}>
        <AvatarDropDownMenu routerStore={routerStore} menuItems={userSiderMenuItems} />
      </Box>
      {/* user email: {userEmail} */}
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              height: "25rem",
              width: "25rem",
            }}
          >
            <img src={homeEdPic} alt="Ed the Wise" style={{ objectFit: "cover", height: "100%", width: "100%" }} />
          </Box>
          <CardComponent cardProps={cardProps} />
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
