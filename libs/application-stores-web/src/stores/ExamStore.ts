import { TOKENS } from "@edthewise/common-tokens-web";
import { ExamsService } from "@edthewise/foundation-appwrite";
import { inject, injectable } from "inversify";
import "reflect-metadata";

@injectable()
export class ExamsStore {
  aCCAsubjectTitles!: string[];
  pSCsubjectTitles!: string[];
  private examsService: ExamsService;

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
}
