import { Component } from "react";

import { Box, Button, Paper, Typography } from "@mui/material";

/* eslint-disable-next-line */
export interface CardComponentProps {
  titles: string[];
}

export class CardComponent extends Component<CardComponentProps> {
  override render() {
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
        {this.props.titles.map((title) => (
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
                  backgroundColor: "#4B82C3 ", // Change the background color on hover
                },
              }}
              variant="contained"
              size="large"
            >
              <Typography
                sx={{
                  fontFamily: "Work Sans",
                }}
                variant="h2"
                component="h2"
              >
                {title}
              </Typography>
            </Button>
          </Paper>
        ))}
      </Box>
    );
  }
}

export default CardComponent;
