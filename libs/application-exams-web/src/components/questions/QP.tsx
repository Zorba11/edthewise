import { Typography } from "@mui/material";

export interface IQuestionPartProps {
  questionDesc: string | undefined;
  bold?: boolean;
}

export const QP = ({ questionDesc, bold }: IQuestionPartProps) => {
  return (
    <Typography
      sx={{
        fontWeight: bold ? "bold" : "normal",
      }}
      variant="subtitle1"
      component="h2"
    >
      {questionDesc}
    </Typography>
  );
};
