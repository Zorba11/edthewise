import { IExamCardData } from "@edthewise/application-exams-web";
import { TOKENS } from "@edthewise/common-tokens-web";
import { QuestionsService } from "@edthewise/foundation-appwrite";
import { inject, injectable } from "inversify";
import "reflect-metadata";
import { Mappers } from "../utils/Mappers";
import { action, computed, observable } from "mobx";

@injectable()
export class QuestionsStore {
  private currQNumber: string;
  @observable
  private _currentQuestion: IExamCardData;
  private _subject: string;
  private _questions: IExamCardData[];
  private _currentQuestionIndex: number;

  constructor(@inject(TOKENS.QuestionsServiceToken) private questionsService: QuestionsService) {
    this.currQNumber = "0";
    this.questionsService = questionsService;
    this._currentQuestion = {} as IExamCardData;
    this._subject = "";
    this._questions = [];
    this._currentQuestionIndex = 0;
  }

  set subject(subject: string) {
    this._subject = subject;
    this.questionsService.setSubject(subject);
  }

  get subject(): string {
    return this._subject;
  }

  @computed
  get currentQuestion(): IExamCardData {
    return this._currentQuestion;
  }

  get currentQuestionNumber(): string {
    return this.currQNumber;
  }

  @action
  async setFirstQuestionSet() {
    try {
      const questions = await this.questionsService.getQuestions();
      questions.documents.map((question: any) => {
        this._questions.push(Mappers.mapQuestionToCard(question));
      });

      if (this._questions.length) {
        this._currentQuestion = this._questions[this._currentQuestionIndex];
      }
    } catch (error) {
      console.log(error);
    }
  }

  @action
  async setNextQuestion() {
    try {
      if (this._questions) {
        this._currentQuestionIndex++;
        this._currentQuestion = this._questions[this._currentQuestionIndex];
      }
    } catch (error) {
      console.log(error);
    }
  }
}
