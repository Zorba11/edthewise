import React from "react";
import Box from "@mui/material/Box";
import LockIcon from "@mui/icons-material/Lock";

const PaymentLock = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        width: 200, // adjust as needed
        height: 200, // adjust as needed
        ":hover .lock-overlay": {
          opacity: 1,
        },
      }}
    >
      {/* Your component content here */}
      <Box
        className="lock-overlay"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: 0.5,
          transition: "opacity 0.3s",
          zIndex: 1,
        }}
      >
        <LockIcon sx={{ fontSize: "20rem", color: "white" }} />
      </Box>
    </Box>
  );
};

export default PaymentLock;
