import { TOKENS } from "@edthewise/common-tokens-web";
import { ACCA_FM_COMP_JAN_2024, ExamsService } from "@edthewise/foundation-appwrite";
import { inject, injectable } from "inversify";
import { action, observable } from "mobx";
import "reflect-metadata";

@injectable()
export class CompeteExamsStore {
  aCCAsubjectTitles!: string[];
  pSCsubjectTitles!: string[];
  @observable notImplemented!: boolean;

  private examsService: ExamsService;
  private subjectName!: string;
  private currentExamName!: string;
  private examId!: string;

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

  submitExam() {
    // this.examsService.submitExam(this.examId, this.exam);
  }
}
