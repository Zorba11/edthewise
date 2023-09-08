import { Box, Button } from "@mui/material";

interface ISubmitButtonProps {
  onSubmitHandler: (event?: any) => void; // Define the type of the onClick event handler function
  disable: boolean;
}

export const SubmitButton = ({ onSubmitHandler, disable }: ISubmitButtonProps) => {
  return (
    <Box
      sx={{
        position: "relative",
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
        onClick={onSubmitHandler}
        disabled={disable ? true : false}
      >
        Submit
      </Button>
    </Box>
  );
};
