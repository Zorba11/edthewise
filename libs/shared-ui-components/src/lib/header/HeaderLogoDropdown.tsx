import { HeadLogo } from "@edthewise/application-assets-web";
import { Badge, Box, Paper, Typography } from "@mui/material";
import AvatarDropDownMenu from "../drop-down-menu/DropDownMenu";
import { userSiderMenuItems } from "@edthewise/common-component-data";
import { useRouterStore } from "mobx-state-router";
import BlurCircularSharpIcon from "@mui/icons-material/BlurCircularSharp";
import { motion } from "framer-motion";

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
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* <BlurCircularSharpIcon
          sx={{
            fontSize: "2.8rem",
            color: "#FDCC45",

            marginRight: "0.5rem",
          }}
        />
        <Typography
          sx={{
            fontSize: "1.8rem",
            fontWeight: "bold",
            color: "#FDCC45",
            marginRight: "1rem",
          }}
        >
          10
        </Typography> */}
        {/* <Badge
          badgeContent={
            <Paper
              elevation={4}
              sx={{
                fontFamily: "Work Sans",
                width: "3.2rem",
                height: "3.2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                backgroundColor: "gold",
                borderRadius: "50%",
                position: "relative",
                marginRight: "6rem",
                zIndex: -1,
              }}
            >
         
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  color: "white",
                  fontSize: "1.5rem",
                }}
                variant="body2"
              >
                10
              </Typography>
            </Paper>
          }
        ></Badge> */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            marginRight: "1rem",
            marginBottom: "0.9rem",
          }}
        >
          <Typography
            sx={{
              fontSize: "1.6rem",
              fontWeight: "bold",
              // color: "#f2be30",
              color: "#4B82C3",
              position: "relative",
              top: "1.2rem",
            }}
          >
            10
          </Typography>
          <span
            style={{
              fontSize: "2.7rem",
            }}
            aria-label="prize"
            role="img"
          >
            🥞
          </span>
        </Box>

        <AvatarDropDownMenu routerStore={routerStore} menuItems={userSiderMenuItems} />
      </Box>
    </Box>
  );
};
