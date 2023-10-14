import React from "react";
import { Badge, Box, Button, Paper, Typography } from "@mui/material";
import { ICardComponentProps } from "./interfaces/ICardComponentProps";
import { AnimatePresence, motion } from "framer-motion";
import CardContent from "./CardContent";

interface IProps {
  cardProps: ICardComponentProps[];
  shouldAnimate?: boolean;
  showBadge?: boolean;
}

export const CardComponent = ({ cardProps, showBadge, shouldAnimate = true }: IProps) => {
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
      <AnimatePresence>
        {cardProps.map((prop, index) =>
          shouldAnimate ? (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -50, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.5 }}
              transition={{ delay: index * 0.18 }}
            >
              <CardContent
                showBadge={showBadge}
                buttonHeight={prop.buttonHeight}
                buttonWidth={prop.buttonWidth}
                hoverColor={prop.hoverColor}
                onClick={prop.onClick}
                title={prop.title}
                subtitle={prop.subtitle}
                titleFontSize={prop.titleFontSize}
                cardIndex={index}
                showLock={prop.showLock}
              />
            </motion.div>
          ) : (
            <CardContent
              showBadge={showBadge}
              buttonHeight={prop.buttonHeight}
              buttonWidth={prop.buttonWidth}
              hoverColor={prop.hoverColor}
              onClick={prop.onClick}
              title={prop.title}
              subtitle={prop.subtitle}
              titleFontSize={prop.titleFontSize}
              cardIndex={index}
            />
          ),
        )}
      </AnimatePresence>
    </Box>
  );
};

export default CardComponent;
