export interface IExamCardData {
  qNumber?: number;
  qp1?: string;
  qTableData1?: { label: string; value: string }[];
  qp2?: string;
  qp3?: string;
  qOptions?: { label: string; value: string }[];
  qTableData2?: { label: string; value: string }[];
  qComponentOrder?: string;
  qAnswer?: { label: string; value: string }[];
  hasSubmitted?: boolean;
}
