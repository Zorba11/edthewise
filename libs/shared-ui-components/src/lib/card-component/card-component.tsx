import React from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import { ICardComponentProps } from "./interfaces/ICardComponentProps";

interface IProps {
  cardProps: ICardComponentProps[];
}

export const CardComponent = ({ cardProps }: IProps) => {
  return (
    <Box
      sx={{
        p: 2,
        bgcolor: "white",
        display: "flex",
        gridTemplateColumns: { md: "1fr 1fr" },
        gap: 2,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {cardProps.map((prop) => (
        <Paper
          elevation={5}
          sx={{ margin: "0", padding: "4", background: "white", p: 2, display: "flex", flexDirection: "column" }}
        >
          <Button
            sx={{
              height: "15rem",
              width: "23rem",
              backgroundColor: "#c3ced8",
              "&:hover": {
                backgroundColor: prop.hoverColor, // Change the background color on hover
              },
            }}
            variant="contained"
            size="large"
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                }}
                variant="h2"
                component="h2"
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
