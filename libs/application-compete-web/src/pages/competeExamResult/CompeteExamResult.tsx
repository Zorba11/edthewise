import { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { HeaderWithLogo, ResultAndQA } from "@edthewise/shared-ui-components";
import { LeaderBoard } from "@edthewise/application-exams-web";

export const CompeteExamResult = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const QAs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleTabChange = (event: any, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <Box>
      <HeaderWithLogo />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          borderRadius: "0.5rem",
          overflow: "hidden",
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
          marginTop: "1.5rem",
          width: "70%",
        }}
      >
        <Tabs value={tabIndex} onChange={handleTabChange}>
          <Tab label="Result and QA" />
          <Tab label="Leaderboard" />
        </Tabs>
      </Box>

      {tabIndex === 0 && <ResultAndQA QAs={QAs} />}
      {tabIndex === 1 && <LeaderBoard />}
    </Box>
  );
};
