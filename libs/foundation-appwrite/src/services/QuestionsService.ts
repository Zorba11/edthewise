import { injectable } from "inversify";
import { database } from "../appwrite-config/config";
import { ExamsDbId, FM_MCQ_ACCA_ID, FM_SQ_ACCA_ID } from "../db/collections";

@injectable()
export class QuestionsService {
  private _subject!: string;
  private collectionIds: string[] = [];
  private questions: any[] = [];

  setSubject = (subject: string) => {
    this._subject = subject;

    this.setCollectionIds(this._subject);
  };

  getQuestions = async (examId: string, userId: string): Promise<any> => {
    try {
      const cacheKey = `${examId}-${userId}-${this.collectionIds[0]}`;
      const cachedQuestions = await localStorage.getItem(cacheKey);
      if (cachedQuestions) {
        return JSON.parse(cachedQuestions);
      }

      const questions = await database.listDocuments(ExamsDbId, this.collectionIds[0]);
      const questionsData = questions.documents;

      await localStorage.setItem(cacheKey, JSON.stringify(questionsData));

      return questionsData;
    } catch (err) {
      console.log(err);
    }
  };

  private setCollectionIds = (subject: string) => {
    let sub = subject;
    if (subject === "Financial Management (FM)") {
      sub = "FM";
    }
    switch (sub) {
      case "FM":
        this.collectionIds.push(FM_MCQ_ACCA_ID);
        this.collectionIds.push(FM_SQ_ACCA_ID);
        break;
      default:
        break;
    }
  };
}
