import { inject, injectable } from "inversify";
import "reflect-metadata";
import { IAdminQStore } from "../models/IAdminQStore";
import { ADMIN_TOKENS } from "@edthewise/common-tokens-web";
import { IAdminQService } from "@edthewise/foundation-communication-admin";

@injectable()
export class AdminQStore implements IAdminQStore {
  @inject(ADMIN_TOKENS.AdminQServiceToken)
  private adminQService: IAdminQService;

  constructor(@inject(ADMIN_TOKENS.AdminQServiceToken) adminQService: IAdminQService) {
    this.adminQService = adminQService;
  }

  createQuestionDocument(): boolean {
    console.log("createQuestionDocument");
    this.adminQService.createQuestionDocument();
    return true;
  }
}
