import { injectable } from "inversify";

@injectable()
export class AdminQService {
  createQuestionDocument(): boolean {
    console.log("Service - createQuestionDocument");
    return true;
  }
}
