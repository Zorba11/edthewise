import { Backdrop, Box } from "@mui/material";
import React from "react";

type ImageBoxProps = {
  src: string;
};

export const ImageBox = ({ src }: ImageBoxProps) => {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <Box
      sx={{
        marginTop: "1rem",
        width: "45rem",
        height: "20rem",
        cursor: "pointer",
      }}
      onClick={toggleOpen}
    >
      <img src={src} alt="questionimage" style={{ maxWidth: "100%", maxHeight: "100%" }} />
      <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open} onClick={toggleOpen}>
        <img
          src={src}
          alt="questionimage"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "70%",
            maxHeight: "70%",
          }}
        />
      </Backdrop>
    </Box>
  );
};
