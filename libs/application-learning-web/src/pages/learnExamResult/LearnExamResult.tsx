import { HeaderWithLogo, ResultAndQA, withFadeIn } from "@edthewise/shared-ui-components";
import { Box } from "@mui/material";

export const LearnExamResult = () => {
  const QAs = [1, 2, 3, 4];

  return withFadeIn(
    <Box>
      <HeaderWithLogo />
      <ResultAndQA QAs={QAs} />
    </Box>,
  );
};
