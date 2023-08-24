import React from "react";
import { Badge, Box, Button, Paper, Typography } from "@mui/material";
import { ICardComponentProps } from "./interfaces/ICardComponentProps";

interface IProps {
  cardProps: ICardComponentProps[];
  showBadge?: boolean;
}

export const CardComponent = ({ cardProps, showBadge }: IProps) => {
  return (
    <Box
      sx={{
        p: 2,
        bgcolor: "white",
        display: "flex",
        flexWrap: "wrap",
        gap: 4,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {cardProps.map((prop, index) => (
        <Paper
          key={index}
          elevation={5}
          sx={{ margin: "0", padding: "4", background: "white", p: 2, display: "flex", flexDirection: "column" }}
        >
          {showBadge && (
            <Badge
              badgeContent={
                <Paper
                  elevation={5}
                  sx={{
                    fontFamily: "Work Sans",
                    width: "3.5rem",
                    height: "3.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    backgroundColor: "#4B82C3",
                    borderRadius: "50%",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1rem",
                    }}
                    aria-label="prize"
                    role="img"
                  >
                    🏆
                  </span>{" "}
                  <Typography
                    sx={{
                      fontFamily: "Work Sans",
                      color: "white",
                    }}
                    variant="body2"
                  >
                    ₹100
                  </Typography>
                </Paper>
              }
            ></Badge>
          )}

          <Button
            sx={{
              height: `${prop.buttonHeight}`,
              width: `${prop.buttonWidth}`,
              backgroundColor: "#c3ced8",
              transition: "background-color 0.5s ease-in-out",
              "&:hover": {
                backgroundColor: prop.hoverColor, // Change the background color on hover
              },
            }}
            variant="contained"
            size="large"
            onClick={prop.onClick}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  fontSize: `${prop.titleFontSize}`,
                }}
                variant="h2" // titleVariant="h2" or titleVariant="h3"
                component="h2" // titleComponent="h2" or titleComponent="h3"
              >
                {prop.title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                  // textTransform: "none",
                }}
                variant="h6"
                component="h2"
              >
                {prop.subtitle}
              </Typography>
            </Box>
          </Button>
        </Paper>
      ))}
    </Box>
  );
};

export default CardComponent;
