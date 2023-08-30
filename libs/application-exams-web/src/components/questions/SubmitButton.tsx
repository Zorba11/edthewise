import { Box, Button } from "@mui/material";

interface ISubmitButtonProps {
  onClick: () => void;
}

export const SubmitButton = ({ onClick }: ISubmitButtonProps) => {
  return (
    <Box
      sx={{
        position: "relative",

        top: "1.7rem",
      }}
    >
      <Button
        sx={{
          width: "100%",
          height: "3rem",
          backgroundColor: "#4B82C3",
          transition: "background-color 0.5s ease-in-out",
          "&:hover": {
            backgroundColor: "#FDCD46",
            color: "#4B82C3",
          },
        }}
        variant="contained"
        onClick={onClick}
      >
        Submit
      </Button>
    </Box>
  );
};
