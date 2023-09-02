export interface IExamCardData {
  questionData: {
    qNumber: string;
    qp1desc: string;
    qTableData: any[];
    qp2: string;
    qp3: string;
    answerOptions: { label: string; value: string }[];
  };
}
