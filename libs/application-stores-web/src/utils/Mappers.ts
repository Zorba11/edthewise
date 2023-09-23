interface IExamCardData {
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
  qid?: string;
}

interface QuestionOption {
  label: string;
  value: string;
}

export class Mappers {
  static mapQuestionToCard = (question: any, index: number): IExamCardData => {
    const questionData = {
      qNumber: index + 1,
      qp1: question.QP1,
      qTableData1: [] as QuestionOption[],
      qTableData2: [] as QuestionOption[],
      qp2: question.QP2,
      qp3: question.QP3,
      qOptions: [] as QuestionOption[],
      qComponentOrder: question.QComponent_Order,
      qAnswer: [] as QuestionOption[],
      qid: question.QId,
    };

    const qOptions = this.parseJsonData(question.QOPTIONS);
    questionData.qOptions = qOptions;

    const qTable1 = this.parseJsonData(question.QTABLE1);
    questionData.qTableData1 = qTable1;

    const qTable2 = this.parseJsonData(question.QTABLE2);
    questionData.qTableData2 = qTable2;

    const qAnswer = this.parseJsonData(question.ANSWER);
    questionData.qAnswer = qAnswer;

    return questionData;
  };

  private static parseJsonData(data: string): any {
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
}
