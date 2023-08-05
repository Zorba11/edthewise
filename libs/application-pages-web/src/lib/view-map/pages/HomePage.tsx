import React from "react";
import { useRouterStore } from "mobx-state-router";
import { AppHeader, CardComponent } from "@edthewise/shared-ui-components";
import homeEdPic from "../../assets/ed-2.png";
import { Box, Container } from "@mui/material";

export const HomePage = () => {
  const routerStore = useRouterStore();

  const titles = ["Compete", "Learn"];

  const handleClick = () => {
    routerStore.goTo("department", {
      params: { id: "electronics" },
    });
  };

  return (
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
        <CardComponent titles={titles} />
      </Box>
    </Container>
  );
};
