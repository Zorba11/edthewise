import { injectable } from "inversify";
import { database } from "../appwrite-config/config";
import { ExamsDbId, FM_MCQ_ACCA_ID } from "../db/collections";
import { Query } from "appwrite";

@injectable()
export class QuestionsService {
  getFirstQuestion = async (): Promise<any> => {
    try {
      const question = await database.listDocuments(ExamsDbId, FM_MCQ_ACCA_ID, [Query.equal("QId", "fm-mcq-1.1")]);
      return question;
    } catch (err) {
      console.log(err);
    }
  };
}
