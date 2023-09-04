import { inject, injectable } from "inversify";
import "reflect-metadata";
import { IAdminQStore } from "../models/IAdminQStore";
import { ADMIN_TOKENS } from "@edthewise/common-tokens-web";
import { IAdminQService, IValidatedQData } from "@edthewise/foundation-communication-admin";

@injectable()
export class AdminQStore implements IAdminQStore {
  @inject(ADMIN_TOKENS.AdminQServiceToken)
  private adminQService: IAdminQService;

  constructor(@inject(ADMIN_TOKENS.AdminQServiceToken) adminQService: IAdminQService) {
    this.adminQService = adminQService;
  }

  async createQuestionDocument(qData: any, collectionTitle: string): Promise<boolean> {
    try {
      await this.adminQService.createQuestionDocument(qData, collectionTitle);
      return true;
    } catch (error) {
      console.log("createQuestionDocument - error: ", error);
      return false;
    }
  }
}
