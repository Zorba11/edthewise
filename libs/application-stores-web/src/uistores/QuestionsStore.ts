import { TOKENS } from "@edthewise/common-tokens-web";
import { QuestionsService } from "@edthewise/foundation-appwrite";
import { inject, injectable } from "inversify";
import "reflect-metadata";
import { Mappers } from "../utils/Mappers";
import { action, computed, makeAutoObservable, observable } from "mobx";
import { CompeteExamsStore } from "../stores/CompeteExamStore";

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
  qid: string;
}

interface IUserAnswer {
  label: string;
  value: string;
}

@injectable()
export class QuestionsStore {
  private currQNumber: string;
  @observable
  currentQuestion!: IExamCardData;
  private _subject: string;
  private _questions: IExamCardData[];
  private _currentQuestionIndex: number;
  private _submittedQuestions: Set<number> = new Set();

  private _userAnswers: Map<string, IUserAnswer> = new Map();

  @observable
  showOptionNotSelectedError = false;

  constructor(
    @inject(TOKENS.QuestionsServiceToken) private questionsService: QuestionsService,
    @inject(TOKENS.ExamStoreToken) private examStore: CompeteExamsStore,
  ) {
    this.currQNumber = "0";
    this.questionsService = questionsService;
    this._subject = "";
    this._questions = [];
    this._currentQuestionIndex = 0;
    makeAutoObservable(this);
  }

  set subject(subject: string) {
    this._subject = subject;
    this.questionsService.setSubject(subject);
  }

  get subject(): string {
    return this._subject;
  }

  get currentQuestionNumber(): string {
    return this.currQNumber;
  }

  @action
  async setFirstQuestionSet() {
    try {
      if (this._questions.length) {
        return;
      }

      const questions = await this.questionsService.getQuestions();
      questions?.map((question: any, index: number) => {
        this._questions.push(Mappers.mapQuestionToCard(question, index));
      });

      if (this._questions.length) {
        this.currentQuestion = this._questions[this._currentQuestionIndex];
      }
    } catch (error) {
      console.log(error);
    }
  }

  @computed
  get totalQuestions(): number {
    return this._questions.length;
  }

  @action
  setNextQuestion() {
    try {
      if (this._questions) {
        this._currentQuestionIndex++;
        this.currentQuestion = this._questions[this._currentQuestionIndex];
      }
    } catch (error) {
      console.log(error);
    }
  }

  @action
  submitAnswer() {
    try {
      if (this.hasNotSelectedAnswer()) {
        this.setShowOptionNotSelectedError(true);
        return;
      }

      this.currentQuestion.hasSubmitted = true;
      this._submittedQuestions.add(this._currentQuestionIndex + 1);
      if (!this.shouldSubmitExam) {
        this.setNextQuestion();
        this.setShowOptionNotSelectedError(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  private hasNotSelectedAnswer() {
    return !this._userAnswers.get(this?.currentQuestion?.qid);
  }

  @action
  setQuestionByNum(qNumber: number) {
    try {
      const index = qNumber - 1;
      this._currentQuestionIndex = index;
      this.currentQuestion = this._questions[index];
    } catch (error) {
      console.log(error);
    }
  }

  @computed
  get shouldSubmitExam(): boolean {
    return this._submittedQuestions.size === this._questions.length;
  }

  @computed
  get submittedQuestions(): Set<number> {
    return this._submittedQuestions;
  }

  @action
  setPreviousQuestion() {
    try {
      if (this._questions) {
        this._currentQuestionIndex--;
        this.currentQuestion = this._questions[this._currentQuestionIndex];
      }
    } catch (error) {
      console.log(error);
    }
  }

  @action
  setSelectedOption(option: any) {
    try {
      if (!option || !this.currentQuestion.qid) return;
      this._userAnswers.set(this.currentQuestion?.qid, option);
    } catch (error) {
      console.log(error);
    }
  }

  @action
  setShowOptionNotSelectedError(show: boolean) {
    this.showOptionNotSelectedError = show;
  }

  submitExam() {
    try {
      this.examStore.submitExam(this._questions, this._userAnswers);
    } catch (error) {
      console.log(error);
    }
  }
}
