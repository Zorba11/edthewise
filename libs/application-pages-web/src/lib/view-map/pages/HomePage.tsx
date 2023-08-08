import React, { createContext, useContext, useEffect } from "react";
import { useRouterStore } from "mobx-state-router";
import { CardComponent, ICardComponentProps, DropDownMenu } from "@edthewise/shared-ui-components";
import homeEdPic from "../../assets/ed-2.png";
import { Box, Container } from "@mui/material";
import { AuthContext } from "@edthewise/foundation-firebase";
import { userStore } from "@edthewise/application-stores-web";

export const HomePage = (props: any) => {
  const routerStore = useRouterStore();

  const user = useContext(AuthContext);

  const [userEmail, setUserEmail] = React.useState<string>("");

  useEffect(() => {
    if (!user) {
      routerStore.goTo("signIn");
    } else {
      setUserEmail(userStore.email);
    }
  }, [user, routerStore]);

  const BUTTON_CARD_HEIGHT = "15rem";
  const BUTTON_CARD_WIDTH = "23rem";
  const BUTTON_CARD_FONT_SIZE = "3rem";

  const learnNavigationClick = () => {
    routerStore.goTo("learnHome");
  };

  const competeNavigationClick = () => {
    routerStore.goTo("competeHome");
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
      title: "Learn",
      subtitle: "with Ed",
      hoverColor: "#4B82C3", // blueish
      buttonHeight: BUTTON_CARD_HEIGHT,
      buttonWidth: BUTTON_CARD_WIDTH,
      titleFontSize: BUTTON_CARD_FONT_SIZE,
      onClick: learnNavigationClick,
    },
  ];

  const handleClick = () => {
    routerStore.goTo("department", {
      params: { id: "electronics" },
    });
  };

  return (
    <>
      <Box sx={{ position: "absolute", top: 18, right: 25 }}>
        <DropDownMenu />
      </Box>
      user email: {userEmail}
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
