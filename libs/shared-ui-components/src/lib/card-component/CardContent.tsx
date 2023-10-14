import React from "react";
import { Paper, Badge, Button, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import LockTwoToneIcon from "@mui/icons-material/LockTwoTone";
import PaymentLock from "./PaymentLock";

interface ICardContentProps {
  showBadge?: boolean;
  buttonHeight?: string;
  buttonWidth?: string;
  hoverColor?: string;
  onClick?: () => void;
  title?: string;
  subtitle?: string;
  titleFontSize?: string;
  cardIndex?: number;
  showLock?: boolean;
}

const CardContent = ({
  showBadge = false,
  buttonHeight = "4rem",
  buttonWidth = "15rem",
  hoverColor = "#c3ced8",
  onClick = () => ({}),
  title = "Title",
  subtitle = "",
  titleFontSize = "1.5rem",
  cardIndex = 1,
  showLock = false,
}: ICardContentProps) => {
  return (
    <Paper
      elevation={5}
      sx={{ margin: "0", padding: "4", background: "white", p: 2, display: "flex", flexDirection: "column" }}
    >
      {showBadge && (
        // Prize Badge
        <Badge
          badgeContent={
            <motion.div
              key={cardIndex}
              initial={{ opacity: 0, y: -50, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.5 }}
              transition={{ delay: cardIndex * 0.18 }}
            >
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
                  position: "relative",
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
            </motion.div>
          }
        ></Badge>
      )}

      <Button
        sx={{
          height: `${buttonHeight}`,
          width: `${buttonWidth}`,
          backgroundColor: "#c3ced8",
          transition: "background-color 0.5s ease-in-out",
          "&:hover": {
            backgroundColor: hoverColor, // Change the background color on hover
            color: `${showLock ? hoverColor : "white"}`,
          },
        }}
        variant="contained"
        size="large"
        onClick={onClick}
      >
        <Box>
          {showLock && <PaymentLock />}
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: `${titleFontSize}`,
            }}
            variant="h2" // titleVariant="h2" or titleVariant="h3"
            component="h2" // titleComponent="h2" or titleComponent="h3"
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography
              sx={{
                fontFamily: "Work Sans",
                // textTransform: "none",
              }}
              variant="h6"
              component="h2"
            >
              {subtitle}
            </Typography>
          )}
        </Box>
      </Button>
    </Paper>
  );
};

export default CardContent;
