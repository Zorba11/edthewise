import { database } from "../appwrite-config/config";
import { ExamsCollectionId, ExamsDbId, SubjectsDocId } from "../db/collections";
import { IExamCardData } from "../models/questions/IExamCardData";

// Use inversify JS to make this injectable
// and inject into QuestionsUiStore
// Add data to the DB accordingly
export class ExamsService {
  getSubjectTitles = async (): Promise<string[]> => {
    const examListRequest = await database.getDocument(ExamsDbId, ExamsCollectionId, SubjectsDocId);
    const subjectTitles = examListRequest.ACCA;
    return subjectTitles;
  };
}

export const examsService = new ExamsService();
