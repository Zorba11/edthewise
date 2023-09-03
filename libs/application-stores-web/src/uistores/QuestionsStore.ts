import { IExamCardData } from "@edthewise/application-exams-web";
import { TOKENS } from "@edthewise/common-tokens-web";
import { QuestionsService } from "@edthewise/foundation-appwrite";
import { inject, injectable } from "inversify";
import "reflect-metadata";
import { Mappers } from "../utils/Mappers";

@injectable()
export class QuestionsStore {
  private qp1Desc: string;
  private currQNumber: string;
  private qTableData: any[];
  private qp2: string;
  private qp3: string;
  private answerOptions: { label: string; value: string }[];
  private totalQNumber: number;
  private _currentQuestion: IExamCardData;

  constructor(@inject(TOKENS.QuestionsServiceToken) private questionsService: QuestionsService) {
    this.currQNumber = "0";
    this.qp1Desc = "";
    this.qTableData = [];
    this.qp2 = "";
    this.qp3 = "";
    this.answerOptions = [];
    this.totalQNumber = 0;
    this.questionsService = questionsService;
    this._currentQuestion = {} as IExamCardData;
  }

  get currentQuestion(): IExamCardData {
    return this._currentQuestion;
  }

  get currentQuestionNumber(): string {
    return this.currQNumber;
  }

  async setFirstQuestionSet() {
    try {
      const question = await this.questionsService.getFirstQuestion();

      if (question) {
        this._currentQuestion = Mappers.mapQuestionToCard(question.documents[0]);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
