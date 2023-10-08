import { injectable } from "inversify";
import { database } from "../appwrite-config/config";
import { ExamsDbId, FM_ACCA_EXAM_STATS } from "../db/collections";
import { Query } from "appwrite";

@injectable()
export class CompeteListService {
  async fetchExamStatBySubjectTitle(subjectTitle: string) {
    try {
      const examStats = await database.listDocuments(ExamsDbId, FM_ACCA_EXAM_STATS, [
        Query.equal("examId", "Jan-2024-FM-ACCA"),
      ]);

      return examStats.documents[0];
    } catch (error) {
      console.error(error);
      throw Error(error ? `${error}` : "Error fetching exam stats");
    }
  }
}
