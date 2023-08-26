import { Box, Card, CardContent, Paper, Typography } from "@mui/material";

interface IExamCardProps {
  qNumber: string;
  desc: string;
}

const ExamCard = ({ qNumber, desc }: IExamCardProps) => {
  return (
    <Paper elevation={0}>
      <CardContent>
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <Typography variant="subtitle1" component="h2">
            {`Question: ${qNumber}`}
          </Typography>
          <Typography variant="subtitle1" component="h2">
            {desc}
          </Typography>
        </Box>
      </CardContent>
    </Paper>
  );
};

export default ExamCard;
