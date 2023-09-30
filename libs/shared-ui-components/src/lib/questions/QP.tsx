import { Typography } from "@mui/material";

export interface IQuestionPartProps {
  questionDesc: string;
  bold?: boolean;
}

export const QP = ({ questionDesc, bold }: IQuestionPartProps) => {
  return (
    <Typography
      sx={{
        marginLeft: "1rem",
        fontWeight: bold ? "bold" : "normal",
      }}
      variant="subtitle1"
      component="h2"
    >
      {questionDesc}
    </Typography>
  );
};
