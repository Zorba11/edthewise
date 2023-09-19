import { TOKENS } from "@edthewise/common-tokens-web";
import { ACCA_FM_COMP_JAN_2024, ExamsService } from "@edthewise/foundation-appwrite";
import { inject, injectable } from "inversify";
import "reflect-metadata";

@injectable()
export class CompeteExamsStore {
  aCCAsubjectTitles!: string[];
  pSCsubjectTitles!: string[];
  private examsService: ExamsService;
  private subjectName!: string;
  private currentExamName!: string;
  private examId!: string;

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
    await this.examsService.createMCQExam(this.examId, userId, this.subjectName);
  }

  async setExamName(subjectName: string): Promise<void> {
    // const examName = await this.examsService.getExamName(subjectName);

    this.currentExamName = "January 2024";

    this.subjectName = subjectName;

    this.examId = this.getExamId(subjectName);
  }

  private getExamId(subjectName: string): string {
    switch (subjectName) {
      case "Financial Management (FM)":
        return ACCA_FM_COMP_JAN_2024;
      default:
        return "";
    }
  }
}
