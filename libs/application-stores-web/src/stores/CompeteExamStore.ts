import { TOKENS } from "@edthewise/common-tokens-web";
import { ACCA_FM_COMP_JAN_2024, ExamsService } from "@edthewise/foundation-appwrite";
import { inject, injectable } from "inversify";
import { action, observable } from "mobx";
import "reflect-metadata";

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
  qAnswer?: { label: string; value: string }[];
  hasSubmitted?: boolean;
  qid?: string;
}

interface IExamSummary {
  question: IExamCardData;
  userAnswer: IUserAnswer;
  correctAnswer: { label: string; value: string };
}

@injectable()
export class CompeteExamsStore {
  aCCAsubjectTitles!: string[];
  pSCsubjectTitles!: string[];
  @observable notImplemented!: boolean;

  private examsService: ExamsService;
  private subjectName!: string;
  private currentExamName!: string;
  private examId!: string;
  private score!: number;
  private startTime!: Date;
  private endTime!: Date;
  userId!: string;

  exam!: any;

  constructor(@inject(TOKENS.ExamsServiceToken) examsService: ExamsService) {
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

  async createNewExam(userId: string): Promise<void> {
    this.userId = userId;
    this.exam = await this.examsService.createMCQExam(this.examId, userId, this.subjectName);
  }

  async setExamName(subjectName: string): Promise<void> {
    this.subjectName = subjectName;

    const subjectCode = this.getSubjectCode(subjectName);

    if (!subjectCode) {
      this.setNotImplemented(true);
      return;
    }

    this.currentExamName = await this.examsService.getExamName(subjectCode);

    this.examId = this.getExamId(subjectName);
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

  submitExam(questions: IExamCardData[], userAnswers: Map<string, IUserAnswer>) {
    this.score = this.calculateScore(questions, userAnswers);
    this.endTime = new Date();
  }

  private calculateScore(questions: IExamCardData[], userAnswers: Map<string, IUserAnswer>): number {
    let score = 0;
    questions.forEach((question) => {
      if (
        userAnswers.get(question.qid!)?.value === question.qAnswer![0].value &&
        userAnswers.get(question.qid!)?.label === question.qAnswer![0].label
      ) {
        score++;
      }
    });

    return score;
  }
}
