import { HeadLogo } from "@edthewise/application-assets-web";
import { Box } from "@mui/material";
import AvatarDropDownMenu from "../drop-down-menu/DropDownMenu";

export const HeaderWithLogo = () => {
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
        <AvatarDropDownMenu />
      </Box>
    </Box>
  );
};
