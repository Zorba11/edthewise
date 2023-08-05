import React from "react";
import { useRouterStore } from "mobx-state-router";
import { CardComponent, ICardComponentProps, DropDownMenu } from "@edthewise/shared-ui-components";
import homeEdPic from "../../assets/ed-2.png";
import { Box, Container } from "@mui/material";

export const HomePage = () => {
  const routerStore = useRouterStore();

  const cardProps: ICardComponentProps[] = [
    {
      id: 1,
      title: "Compete",
      subtitle: "with Mates",
      hoverColor: "#FDCD46",
    },
    {
      id: 2,
      title: "Learn",
      subtitle: "with Ed",
      hoverColor: "#4B82C3",
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
