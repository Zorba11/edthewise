export type CompeteExamDetailsProps = {
  studentsAttempted: number;
  yourAttempts: number;
  topScore: {
    marks: number;
    duration: string;
  };
  prizeMoney: number;
};