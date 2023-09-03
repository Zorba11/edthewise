export interface IExamCardData {
  questionData: {
    qNumber: number;
    qp1: string;
    qTableData1: { label: string; value: string }[];
    qp2?: string;
    qp3?: string;
    qOptions: { label: string; value: string }[];
    qTableData2?: { label: string; value: string }[];
    qComponentOrder?: string;
  };
}
