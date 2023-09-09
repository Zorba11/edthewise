import { Box } from "@mui/material";
import edOnCompeteCard from "./assets/edOnCompeteCard.png";

export const EdCompeteCard = () => {
  return (
    <Box
      sx={{
        position: "relative",
        // width: "50rem",
        // height: "50rem",
        zIndex: 1,
      }}
    >
      <img
        src={edOnCompeteCard}
        alt="logo"
        style={{
          marginTop: "2rem",
          width: "100%",
          height: "100%",
          mixBlendMode: "multiply",
          filter: "brightness(0.9) saturate(1.3) contrast(1)",
        }}
      />
    </Box>
  );
};
