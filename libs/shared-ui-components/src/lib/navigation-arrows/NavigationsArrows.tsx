import { Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const LeftArrow = () => {
  return (
    <Box>
      <ArrowBackIcon
        sx={{
          "&:hover": {
            color: "#FDCD46", // Change the background color on hover
          },
        }}
        color="primary"
      />
    </Box>
  );
};

export const RightArrow = () => {
  return (
    <Box>
      <ArrowForwardIcon
        sx={{
          "&:hover": {
            color: "#FDCD46",
          },
        }}
        color="primary"
      />
    </Box>
  );
};
