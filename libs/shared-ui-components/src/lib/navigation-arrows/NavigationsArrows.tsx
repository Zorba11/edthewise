import { Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface IArrowProps {
  onClick: (event: any) => void;
}

export const LeftArrow = ({ onClick }: IArrowProps) => {
  return (
    <Box onClick={onClick}>
      <ArrowBackIcon
        sx={{
          "&:hover": {
            color: "#FDCD46", // Change the background color on hover
          },
        }}
        fontSize="large"
        color="primary"
      />
    </Box>
  );
};

export const RightArrow = ({ onClick }: IArrowProps) => {
  return (
    <Box onClick={onClick}>
      <ArrowForwardIcon
        sx={{
          "&:hover": {
            color: "#FDCD46",
          },
        }}
        fontSize="large"
        color="primary"
      />
    </Box>
  );
};
