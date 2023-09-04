import { IExamCardData } from "@edthewise/application-exams-web";

interface QuestionOption {
  label: string;
  value: string;
}

export class Mappers {
  static mapQuestionToCard = (question: any): IExamCardData => {
    const questionData = {
      qNumber: question.QId,
      qp1: question.QP1,
      qTableData1: [] as QuestionOption[],
      qTableData2: [] as QuestionOption[],
      qp2: question.QP2,
      qp3: question.QP3,
      qOptions: [] as QuestionOption[],
      qComponentOrder: question.QComponent_Order,
      qAnswer: [] as QuestionOption[],
    };

    const qOptions = this.parseJsonData(question.QOPTIONS);
    questionData.qOptions = qOptions;

    const qTable1 = this.parseJsonData(question.QTABLE1);
    questionData.qTableData1 = qTable1;

    const qTable2 = this.parseJsonData(question.QTABLE2);
    questionData.qTableData2 = qTable2;

    const qAnswer = this.parseJsonData(question.ANSWER);
    questionData.qAnswer = qAnswer;

    return { questionData };
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
