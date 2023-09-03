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
      qp2: question.QP2,
      qp3: question.QP3,
      qOptions: [] as QuestionOption[],
      qComponentOrder: question.QComponent_Order,
    };

    question?.QOPTIONS.forEach((option: any) => {
      const parsedOption = JSON.parse(option);
      questionData.qOptions.push(parsedOption);
    });

    question?.QTABLE1?.forEach((table: any) => {
      const parsedTable = JSON.parse(table);
      questionData.qTableData1.push(parsedTable);
    });

    return { questionData };
  };
}
