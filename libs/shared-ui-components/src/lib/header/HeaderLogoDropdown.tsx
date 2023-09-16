import { HeadLogo } from "@edthewise/application-assets-web";
import { Box } from "@mui/material";
import AvatarDropDownMenu from "../drop-down-menu/DropDownMenu";
import { userSiderMenuItems } from "@edthewise/common-component-data";
import { useRouterStore } from "mobx-state-router";

interface IHeaderWithLogoProps {
  menuItems?: typeof userSiderMenuItems;
}

export const HeaderWithLogo: React.FC<IHeaderWithLogoProps> = ({ menuItems }) => {
  const routerStore = useRouterStore();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "5rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
      }}
    >
      {/* Logo container */}
      <HeadLogo />
      <Box
        sx={{
          marginTop: "2rem",
          marginRight: "0.2rem",
        }}
      >
        <AvatarDropDownMenu routerStore={routerStore} menuItems={userSiderMenuItems} />
      </Box>
    </Box>
  );
};
