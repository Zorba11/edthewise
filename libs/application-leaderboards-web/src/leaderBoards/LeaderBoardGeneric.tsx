import { LeaderBoard } from "@edthewise/application-exams-web";
import { HeaderWithLogo } from "@edthewise/shared-ui-components";
import { Box, Container } from "@mui/material";

// TODO: this component should be refactored to get the data according to the subject selected
export const LeaderBoardGeneric = () => {
  return (
    <Box>
      <HeaderWithLogo />
      <Box
        sx={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <LeaderBoard />
      </Box>
    </Box>
  );
};
