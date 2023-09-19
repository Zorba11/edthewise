import { injectable } from "inversify";
import { AccaSubjectList, PscSubjectList } from "../model-db/ACAACollection";
import "reflect-metadata";
import { database } from "../appwrite-config/config";
import { COMPETE_EXAMS_COLLECTION_ID, ExamsDbId } from "../db/collections";
import { ID } from "appwrite";

// Use inversify JS to make this injectable
// and inject into QuestionsUiStore
// Add data to the DB accordingly

export interface ISubjectList {
  ACCA: string[];
  PSC: string[];
}
@injectable()
export class ExamsService {
  getSubjectTitles = async (): Promise<ISubjectList | undefined> => {
    try {
      // const examListRequest = await database.getDocument(ExamsDbId, ExamsCollectionId, SubjectsDocId);
      // const subjectTitles = examListRequest.ACCA;

      const subjectTitles = {
        ACCA: AccaSubjectList,
        PSC: PscSubjectList,
      };

      return subjectTitles;
    } catch (error) {
      console.error(error);
    }
  };

  async createMCQExam(examId: string, userId: string, subjectName: string): Promise<void> {
    try {
      const exam = await database.createDocument(ExamsDbId, COMPETE_EXAMS_COLLECTION_ID, ID.unique(), {
        examId: examId,
        userId: userId,
        subjectName: subjectName,
        type: "MCQ",
        startTime: JSON.stringify(Date.now()),
        userAnswers: "[]",
        score: "",
      });

      console.log("Exam created: ", exam);
    } catch (error) {
      console.error(error);
    }
  }
}
