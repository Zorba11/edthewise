import { CompeteListService } from "@edthewise/foundation-appwrite";
import { inject, injectable } from "inversify";
import "reflect-metadata";
import { IExamStats } from "../models/IExamStats";
import { TOKENS } from "@edthewise/common-tokens-web";
import { CompeteListStoreToken } from "../tokens/tokens";

@injectable()
export class CompeteListStore {
  currentSubjectTitle: string;
  private _currentExamStats: any;
  private competeListService: CompeteListService;

  constructor(@inject(TOKENS.CompeteListServiceToken) competeListService: CompeteListService) {
    this.currentSubjectTitle = "";
    this._currentExamStats = {};
    this.competeListService = competeListService;
  }

  async setCurrentSubjectTitleAndStats(subjectTitle: string) {
    this.currentSubjectTitle = subjectTitle;

    await this.getCurrentExamStats();
  }

  private async getCurrentExamStats() {
    if (!this.currentSubjectTitle) return;
    this._currentExamStats = await this.competeListService.fetchExamStatBySubjectTitle(this.currentSubjectTitle);
  }

  get currentExamStats(): IExamStats {
    // return {
    //   title: "JEE Main 2021",
    //   studentsAttempted: 10,
    //   yourAttempts: 2,
    //   topScore: { marks: 48, duration: "in 32 minutes" },
    //   prizeMoney: 2000,
    // };

    return this._currentExamStats;
  }
}
