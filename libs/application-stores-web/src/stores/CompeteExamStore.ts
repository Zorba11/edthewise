import { TOKENS } from "@edthewise/common-tokens-web";
import { ACCA_FM_COMP_JAN_2024, ExamsService } from "@edthewise/foundation-appwrite";
import { BaseLocalCacheStore } from "@edthewise/foundation-local-cache";
import { inject, injectable } from "inversify";
import { action, computed, observable } from "mobx";
import "reflect-metadata";

const EXAM_DOC_ID = "exam-doc-id";

interface IUserAnswer {
  label: string;
  value: string;
}

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

interface IExamSummary {
  question: IExamCardData;
  userAnswer: IUserAnswer;
  correctAnswer: { label: string; value: string };
}

@injectable() //This store should be renamed as ExamStore
export class CompeteExamsStore {
  aCCAsubjectTitles!: string[];
  pSCsubjectTitles!: string[];
  @observable notImplemented!: boolean;

  examMonthId!: string;
  userId!: string;
  private examsService: ExamsService;
  private subjectName!: string;
  private currentExamName!: string | undefined;
  private score!: number;
  private startTime!: number;
  private endTime!: number;
  private totalQuestions!: number;
  private questions!: IExamCardData[];
  private userAnswers!: Map<string, IUserAnswer>;
  private userName!: string;
  examDocId!: string;

  exam!: any;

  constructor(
    @inject(TOKENS.ExamsServiceToken) examsService: ExamsService,
    @inject(TOKENS.BaseLocalCacheStoreToken) private baseLocalCacheStore: BaseLocalCacheStore,
  ) {
    this.aCCAsubjectTitles = ["Hello"];
    this.examsService = examsService;
    this.setSubjectTitles();
  }

  async setSubjectTitles() {
    const subjectTitles = await this.examsService.getSubjectTitles();
    if (!subjectTitles) return;
    this.aCCAsubjectTitles = subjectTitles.ACCA;
    this.pSCsubjectTitles = subjectTitles.PSC;
  }

  async createNewExam(userId: string, userName: string): Promise<void | undefined> {
    this.examDocId = (await this.baseLocalCacheStore.getDocument(EXAM_DOC_ID)) ?? "";

    if (this.examDocId) {
      const cachedExamData = await this.baseLocalCacheStore.getExam(this.examDocId);

      // if (cachedExamData && !JSON.parse(cachedExamData).isSubmitted) {
      if (cachedExamData) {
        this.exam = JSON.parse(cachedExamData);
        this.examDocId = this.exam.$id;
        console.log("Exam retrieved from cache: ", this.exam);
      }
    } else {
      this.userId = userId;
      this.userName = userName;
      this.startTime = Date.now();
      this.exam = await this.examsService.createMCQExam(
        this.examMonthId,
        userId,
        this.subjectName,
        JSON.stringify(this.startTime),
      );
      this.examDocId = this.exam?.$id;

      if (this.examDocId) {
        await this.baseLocalCacheStore.storeExam(this.examDocId, JSON.stringify(this.exam));
        await this.baseLocalCacheStore.storeDocument(EXAM_DOC_ID, this.examDocId);
      }
    }
  }

  // async getExamFromCache(userId: string, userName: string): Promise<void> {
  //   this.userId = userId;
  //   this.userName = userName;
  //   this.startTime = Date.now();
  //   this.exam = await this.examsService.getExamFromCache(this.examId);
  // }

  async setExamNameAndId(subjectName = "Financial Management (FM)"): Promise<void> {
    this.subjectName = subjectName;

    const subjectCode = this.getSubjectCode(subjectName);

    if (!subjectCode) {
      this.setNotImplemented(true);
      return;
    }

    if (!this.examMonthId && !this.currentExamName) {
      this.examMonthId = this.getExamId(subjectName);
      await this.baseLocalCacheStore.getCurrentExamName();
    } else {
      this.currentExamName = await this.examsService.getExamName(subjectCode);

      if (this.currentExamName) {
        await this.baseLocalCacheStore.storeCurrentExamName(this.currentExamName);
      }
    }
  }

  @action
  setNotImplemented(notImplemented: boolean) {
    this.notImplemented = notImplemented;
  }

  private getExamId(subjectName: string): string {
    switch (subjectName) {
      case "Financial Management (FM)":
        return ACCA_FM_COMP_JAN_2024;
      default:
        return "";
    }
  }

  private getSubjectCode(subjectName: string): string {
    switch (subjectName) {
      case "Financial Management (FM)":
        return "ACCA-FM";
      default:
        return "";
    }
  }

  async submitExam(questions: IExamCardData[], userAnswers: Map<string, IUserAnswer>) {
    this.questions = questions;
    this.score = this.calculateScore(questions, userAnswers);
    this.endTime = Date.now();
    this.totalQuestions = questions.length;

    await this.examsService.submitExam(
      this.examMonthId,
      this.userId,
      this.score,
      JSON.stringify(this.startTime),
      JSON.stringify(this.endTime),
    );

    await this.examsService.submitToLeaderBoard(
      this.examMonthId,
      this.userId,
      this.userName,
      this.score,
      this.getDuration(),
      this.getDurationString(),
    );
  }

  private calculateScore(questions: IExamCardData[], userAnswers: Map<string, IUserAnswer>): number {
    this.userAnswers = userAnswers;
    let score = 0;
    questions.forEach((question) => {
      const userAnswerOption = userAnswers.get(question.qid)?.label;
      const correctAnswerOption = question.qAnswer[0].label;

      if (userAnswerOption === correctAnswerOption) {
        score++;
      }
    });

    return score;
  }

  getScore(): number {
    return this.score;
  }

  getDurationString(): string {
    const duration = this.endTime - this.startTime;
    const minutes = Math.floor(duration / 60000);
    const seconds = Math.floor((duration % 60000) / 1000);
    const milliseconds = duration % 1000;

    return `${minutes}m ${seconds}s ${milliseconds}ms`;
  }

  getDuration(): number {
    return this.endTime - this.startTime;
  }

  get getTotalQuestions(): number {
    return this.totalQuestions;
  }

  getQuestions(): IExamCardData[] {
    return this.questions.length ? this.questions : [];
  }

  getUserAnswers(): Map<string, IUserAnswer> {
    return this.userAnswers ? this.userAnswers : new Map<string, IUserAnswer>();
  }

  async isExamRunning(): Promise<boolean> {
    return await this.baseLocalCacheStore.isExamRunning();
  }

  getStartTime(): number {
    return this.startTime;
  }
}
