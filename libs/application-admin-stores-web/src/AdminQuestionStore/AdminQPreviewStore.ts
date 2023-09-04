import { injectable } from "inversify";

@injectable()
export class AdminQPreviewStore {
  private questionPreview: any;

  constructor() {
    this.questionPreview = {};
  }

  setQuestionPreview(qData: any) {
    this.questionPreview = {
      qNumber: qData.QId,
      qp1: qData.QP1,
      qTableData1: [],
      qp2: qData.QP2,
      qp3: qData.QP3,
      qOptions: [],
      qComponentOrder: qData.QComponent_Order,
      qTableData2: [],
      qAnswer: [],
    };

    const qOptions = this.parseJsonData(qData.QOPTIONS);
    this.questionPreview.qOptions = qOptions;

    const qTable1 = this.parseJsonData(qData.QTABLE1);
    this.questionPreview.qTableData1 = qTable1;

    const qTable2 = this.parseJsonData(qData.QTABLE2);
    this.questionPreview.qTableData2 = qTable2;

    const qAnswer = this.parseJsonData(qData.ANSWER);
    this.questionPreview.qAnswer = qAnswer;
  }

  private parseJsonData(data: string): any {
    try {
      if (!data) {
        return null;
      }
      return JSON.parse(data);
    } catch (error) {
      console.error(`Error parsing JSON data: ${data}`, error);
      return null;
    }
  }

  getQPreview() {
    return this.questionPreview;
  }
}
