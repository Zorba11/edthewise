import { TOKENS } from "@edthewise/common-tokens-web";
import { QuestionsService } from "@edthewise/foundation-appwrite";
import { inject, injectable } from "inversify";
import "reflect-metadata";
import { Mappers } from "../utils/Mappers";
import { action, computed, makeAutoObservable, observable } from "mobx";
import { CompeteExamsStore } from "../stores/CompeteExamStore";
import { initialize } from "next/dist/server/lib/render-server";

interface IExamCardData {
  qNumber?: number;
  qp1?: string;
  qTableData1?: { label: string; value: string }[];
  qp2?: string;
  qp3?: string;
  qOptions?: { label: string; value: string }[];
  qTableData2?: { label: string; value: string }[];
  qComponentOrder?: string;
  qAnswer: { label: string; value: string }[];
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

  private userId!: string;
  private examId!: string;

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

  initialize() {
    this.userId = this.examStore.userId;
    this.examId = this.examStore.examId;
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

      const questions = await this.questionsService.getQuestions(this.examId, this.userId);
      questions?.map((question: any, index: number) => {
        this._questions.push(Mappers.mapQuestionToCard(question, index));
      });

      if (this._questions.length) {
        this.currentQuestion = this._questions[this._currentQuestionIndex];
        this.storeCurrentQuestionInLocalStorage(this.examId, this.userId, this.currentQuestion);
        this.storeCurrentQuestionIndexInLocalStorage(this.examId, this.userId, this._currentQuestionIndex);
      }
    } catch (error) {
      console.log(error);
    }
  }

  @action
  async setQuestionFromCache() {
    try {
      const questions = await this.questionsService.getQuestions(this.examId, this.userId);
      questions?.map((question: any, index: number) => {
        this._questions.push(Mappers.mapQuestionToCard(question, index));
      });
      const currentQuestion = await this.getCurrentQuestionFromLocalStorage(this.examId, this.userId);
      const currentQuestionIndex = await this.getCurrentQuestionIndexFromLocalStorage(this.examId, this.userId);

      if (currentQuestion && currentQuestionIndex + 1) {
        this.currentQuestion = currentQuestion;
        this._currentQuestionIndex = currentQuestionIndex;
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
  async setNextQuestion() {
    try {
      if (this._questions) {
        this._currentQuestionIndex++;
        this.currentQuestion = this._questions[this._currentQuestionIndex];
        await this.storeCurrentQuestionInLocalStorage(this.examId, this.userId, this.currentQuestion);
        await this.storeCurrentQuestionIndexInLocalStorage(this.examId, this.userId, this._currentQuestionIndex);
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
  async setQuestionByNum(qNumber: number) {
    try {
      const index = qNumber - 1;
      this._currentQuestionIndex = index;
      this.currentQuestion = this._questions[index];

      await this.storeCurrentQuestionInLocalStorage(this.examId, this.userId, this.currentQuestion);
      await this.storeCurrentQuestionIndexInLocalStorage(this.examId, this.userId, this._currentQuestionIndex);
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
  async setPreviousQuestion() {
    try {
      if (this._questions) {
        this._currentQuestionIndex--;
        this.currentQuestion = this._questions[this._currentQuestionIndex];

        await this.storeCurrentQuestionInLocalStorage(this.examId, this.userId, this.currentQuestion);
        await this.storeCurrentQuestionIndexInLocalStorage(this.examId, this.userId, this._currentQuestionIndex);
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

  async submitExam() {
    try {
      await this.examStore.submitExam(this._questions, this._userAnswers);
    } catch (error) {
      console.log(error);
    }
  }

  private async getCurrentQuestionFromLocalStorage(examId: string, userId: string): Promise<any> {
    const cacheKey = `${examId}-${userId}-currentQuestion`;
    const cachedQuestion = await localStorage.getItem(cacheKey);
    if (cachedQuestion) {
      return JSON.parse(cachedQuestion);
    }
    return null;
  }

  private async storeCurrentQuestionInLocalStorage(
    examId: string,
    userId: string,
    currentQuestion: any,
  ): Promise<void> {
    const cacheKey = `${examId}-${userId}-currentQuestion`;
    await localStorage.setItem(cacheKey, JSON.stringify(currentQuestion));
  }

  private async getCurrentQuestionIndexFromLocalStorage(examId: string, userId: string): Promise<number> {
    const cacheKey = `${examId}-${userId}-currentQuestionIndex`;
    const cachedIndex = await localStorage.getItem(cacheKey);
    if (cachedIndex) {
      return parseInt(cachedIndex);
    }
    return 0;
  }

  private async storeCurrentQuestionIndexInLocalStorage(
    examId: string,
    userId: string,
    currentQuestionIndex: number,
  ): Promise<void> {
    const cacheKey = `${examId}-${userId}-currentQuestionIndex`;
    await localStorage.setItem(cacheKey, currentQuestionIndex.toString());
  }
}
