import * as React from "react";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Avatar, Box, Typography, alpha, styled } from "@mui/material";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={1}
    anchorOrigin={{
      vertical: "center",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: "16rem",
    minHeight: "100%",
    color: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "rgb(195, 206, 216, 0.8)",
    right: "0",
    bottom: "0",
    top: "0",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      marginBottom: theme.spacing(1),
      height: "4rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
  },
}));

export const DropDownMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    {
      title: "Profile",
    },
    {
      title: "Dashboard",
    },
    {
      title: "Blog",
    },
    {
      title: "Log out",
    },
  ];

  return (
    <Box>
      {/* Avatar Container */}
      <Avatar
        variant="square"
        sx={{
          width: 55,
          height: 55,
          border: "3px solid",
          transition: "border-image 0.3s ease-in",
          borderImage: "conic-gradient(from 0deg at 50% 50%, #4B82C3 50%, #FDCD46 50%) 1 / 1 / 0 stretch",
          "&:hover": {
            borderImage: "conic-gradient(from 0deg at 50% 50%, #FDCD46 50%, #4B82C3 50%) 1 / 1 / 0 stretch",
          },
        }}
        onClick={handleClick}
        // onMouseEnter={handleClick}
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
      ></Avatar>

      <StyledMenu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transitionDuration={550}
        sx={{
          position: "absolute",
          right: 0,
          left: 0,
          margin: 0,
          padding: 0,
        }}
      >
        {menuItems.map((item, index) => (
          <MenuItem
            onClick={handleClose}
            sx={{
              position: "relative",
              "&::before": {
                content: "''",
                position: "absolute",
                bottom: 0,
                left: 0,
                width: 0,
                height: "2px",
                backgroundColor: `${index % 2 === 0 ? "#4B82C3" : "#F79128"}`,
                transition: "width 0.5s ease-in-out, left 0.5s ease-in-out", // add transition property
              },
              "&:hover::before": {
                width: "100%",
                left: 0,
              },
              "&:hover": {
                transition: " color 0.5s linear",
                color: `${index % 2 === 0 ? "#4B82C3" : "#F79128"}`,
              },
            }}
          >
            <Typography variant="h5" component="h3">
              {item.title}
            </Typography>
          </MenuItem>
        ))}
      </StyledMenu>
    </Box>
  );
};

export default DropDownMenu;
