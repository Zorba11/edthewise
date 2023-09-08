import { IExamCardData } from "@edthewise/application-exams-web";
import { TOKENS } from "@edthewise/common-tokens-web";
import { QuestionsService } from "@edthewise/foundation-appwrite";
import { inject, injectable } from "inversify";
import "reflect-metadata";
import { Mappers } from "../utils/Mappers";

@injectable()
export class QuestionsStore {
  private currQNumber: string;
  private _currentQuestion: IExamCardData;
  private _subject: string;

  constructor(@inject(TOKENS.QuestionsServiceToken) private questionsService: QuestionsService) {
    this.currQNumber = "0";
    this.questionsService = questionsService;
    this._currentQuestion = {} as IExamCardData;
    this._subject = "";
  }

  set subject(subject: string) {
    this._subject = subject;
    this.questionsService.setSubject(subject);
  }

  get subject(): string {
    return this._subject;
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
