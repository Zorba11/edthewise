import { Box } from "@mui/material";
import { HeaderWithLogo } from "../header/HeaderLogoDropdown";

export const ComingSoon = () => {
  return (
    <Box>
      <HeaderWithLogo />
      <Box
        sx={{
          gap: "2rem",
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          bottom: "6vh",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            opacity: 1,
            color: "#e85f5f",
          }}
        >
          Coming Soon. . .
        </h1>

        <Box>
          <iframe
            title="ComingSoon"
            height="240vh"
            width="240vw"
            style={{
              border: "none",
              position: "relative",
            }}
            src="https://lottie.host/?file=c1c595e9-5d29-414d-bbb8-02e14c91e662/1XAwssyXDh.json"
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
};
