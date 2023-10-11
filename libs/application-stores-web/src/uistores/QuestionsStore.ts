import { TOKENS } from "@edthewise/common-tokens-web";
import { QuestionsService } from "@edthewise/foundation-appwrite";
import { inject, injectable } from "inversify";
import "reflect-metadata";
import { Mappers } from "../utils/Mappers";
import { action, computed, makeAutoObservable, observable } from "mobx";
import { CompeteExamsStore } from "../stores/CompeteExamStore";
import { initialize } from "next/dist/server/lib/render-server";
import { BaseLocalCacheStore } from "@edthewise/foundation-local-cache";

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
  private examMonthId!: string;
  private examDocId!: string;

  @observable
  showOptionNotSelectedError = false;

  constructor(
    @inject(TOKENS.QuestionsServiceToken) private questionsService: QuestionsService,
    @inject(TOKENS.ExamStoreToken) private examStore: CompeteExamsStore,
    @inject(TOKENS.BaseLocalCacheStoreToken) private baseLocalCacheStore: BaseLocalCacheStore,
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
    this.examMonthId = this.examStore.examMonthId;
    this.examDocId = this.examStore.examDocId;
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

      const qSetKey = this.examStore.examDocId + this.examMonthId;

      // Get questions from cache
      const cachedQuestionSet = await this.baseLocalCacheStore.getDocument(qSetKey);

      if (cachedQuestionSet) {
        this._questions = JSON.parse(cachedQuestionSet);
        this.currentQuestion = this._questions[this._currentQuestionIndex];
        await this.storeQuestionAndIndex();
      } else {
        // Fetch questions from the server
        const questions = await this.questionsService.getQuestions(this.examMonthId, this.userId);

        // Map questions to cards and store in _questions array
        this._questions =
          questions?.map((question: any, index: number) => {
            return Mappers.mapQuestionToCard(question, index);
          }) || [];

        // Store questions in cache
        await this.baseLocalCacheStore.storeDocument(qSetKey, JSON.stringify(this._questions));
      }

      // Set current question and store in local storage
      await this.storeQuestionAndIndex();
    } catch (error) {
      console.log(error);
    }
  }

  private async storeQuestionAndIndex() {
    if (this._questions.length) {
      await this.storeCurrentQuestionInLocalStorage(this.examMonthId, this.userId, this.currentQuestion);
      await this.storeCurrentQuestionIndexInLocalStorage(this.examMonthId, this.userId, this._currentQuestionIndex);
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
        await this.storeCurrentQuestionInLocalStorage(this.examMonthId, this.userId, this.currentQuestion);
        await this.storeCurrentQuestionIndexInLocalStorage(this.examMonthId, this.userId, this._currentQuestionIndex);
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

      await this.storeCurrentQuestionInLocalStorage(this.examMonthId, this.userId, this.currentQuestion);
      await this.storeCurrentQuestionIndexInLocalStorage(this.examMonthId, this.userId, this._currentQuestionIndex);
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

        await this.storeCurrentQuestionInLocalStorage(this.examMonthId, this.userId, this.currentQuestion);
        await this.storeCurrentQuestionIndexInLocalStorage(this.examMonthId, this.userId, this._currentQuestionIndex);
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
    const cachedQuestion = await this.baseLocalCacheStore.getDocument(cacheKey);
    if (cachedQuestion) {
      return cachedQuestion;
    }
    return null;
  }

  private async storeCurrentQuestionInLocalStorage(
    examId: string,
    userId: string,
    currentQuestion: any,
  ): Promise<void> {
    const cacheKey = `${examId}-${userId}-currentQuestion`;
    await this.baseLocalCacheStore.storeDocument(cacheKey, JSON.stringify(currentQuestion));
  }

  private async getCurrentQuestionIndexFromLocalStorage(examId: string, userId: string): Promise<any> {
    const cacheKey = `${examId}-${userId}-currentQuestionIndex`;
    const cachedIndex = await this.baseLocalCacheStore.getDocument(cacheKey);
    if (cachedIndex) {
      // return parseInt(cachedIndex);
      return cachedIndex;
    }
    return 0;
  }

  private async storeCurrentQuestionIndexInLocalStorage(
    examId: string,
    userId: string,
    currentQuestionIndex: number,
  ): Promise<void> {
    const cacheKey = `${examId}-${userId}-currentQuestionIndex`;
    await this.baseLocalCacheStore.storeDocument(cacheKey, currentQuestionIndex.toString());
  }
}
