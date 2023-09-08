import { TOKENS } from "@edthewise/common-tokens-web";
import { ExamsService } from "@edthewise/foundation-appwrite";
import { inject, injectable } from "inversify";
import "reflect-metadata";

@injectable()
export class ExamsStore {
  subjectTitles: string[];
  private examsService: ExamsService;

  constructor(@inject(TOKENS.ExamsServiceToken) examsService: ExamsService) {
    this.subjectTitles = ["Hello"];
    this.examsService = examsService;
  }

  async setSubjectTitles() {
    const subjectTitles = await this.examsService.getSubjectTitles();
    if (!subjectTitles) return;
    this.subjectTitles = subjectTitles;
  }
}
