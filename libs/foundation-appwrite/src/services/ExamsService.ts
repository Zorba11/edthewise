import { database } from "../appwrite-config/config";
import { ExamsCollectionId, ExamsDbId, SubjectsDocId } from "../db/collections";
import { SubjectList } from "../model-db/ACAACollection";

// TODO: Move this to a separate file, adding this here for now to avoid circular dependency
export interface IExamCardData {
  questionData: {
    qNumber: string;
    qp1desc: string;
    qTableData: any[];
    qp2: string;
    qp3: string;
    answerOptions: { label: string; value: string }[];
  };
}

// Use inversify JS to make this injectable
// and inject into QuestionsUiStore
// Add data to the DB accordingly
export class ExamsService {
  getQuestionDataByNumber = async (questionNumber: string): Promise<IExamCardData> => {
    return Promise.resolve({} as IExamCardData);
  };

  getSubjectTitles = async (): Promise<string[]> => {
    const examListRequest = await database.getDocument(ExamsDbId, ExamsCollectionId, SubjectsDocId);
    const subjectTitles = examListRequest.ACCA;
    return subjectTitles;
  };
}

export const examsService = new ExamsService();
