import { Box } from "@mui/material";
import headLogo from "./assets/headLogo.png";
import { useRouterStore } from "mobx-state-router";

export const HeadLogo = () => {
  const routerStore = useRouterStore();

  const goToHome = () => {
    routerStore.goTo("home");
  };

  return (
    <Box onClick={goToHome}>
      <img src={headLogo} alt="logo" style={{ height: "4rem", width: "12rem", marginTop: "2rem" }} />
    </Box>
  );
};
