import { injectable } from "inversify";
import { AccaSubjectList, PscSubjectList } from "../model-db/ACAACollection";
import "reflect-metadata";
import { database } from "../appwrite-config/config";
import { COMPETE_EXAMS_COLLECTION_ID, ExamsDbId, GLOBAL_EXAMS_ID } from "../db/collections";
import { ID, Models, Query } from "appwrite";
import { CatchingPokemonSharp } from "@mui/icons-material";

// Use inversify JS to make this injectable
// and inject into QuestionsUiStore
// Add data to the DB accordingly

export interface ISubjectList {
  ACCA: string[];
  PSC: string[];
}
@injectable()
export class ExamsService {
  exam!: Models.Document;
  examDocId!: string;

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

  async createMCQExam(
    examId: string,
    userId: string,
    subjectName: string,
    startTime: string,
  ): Promise<Models.Document> {
    try {
      if (!userId) {
        userId = "26e5894c-fb98-4bef-94aa-9b5259d38bd3";
      }

      // TODO: Remove this before going live
      await this.clearExams();

      this.exam = await database.createDocument(ExamsDbId, COMPETE_EXAMS_COLLECTION_ID, ID.unique(), {
        examId: examId,
        userId: userId,
        subjectName: subjectName,
        type: "MCQ",
        startTime: startTime,
        userAnswers: "[]",
        score: "",
      });

      this.examDocId = this.exam.$id;
      console.log("Exam created: ", this.exam);
      return this.exam;
    } catch (error) {
      console.error(error);
      throw new Error("Error creating exam");
    }
  }

  /**
   * Temporary admin method to clear the compete exams collection
   */
  async clearExams(): Promise<void> {
    try {
      const exams = await database.listDocuments(ExamsDbId, COMPETE_EXAMS_COLLECTION_ID);

      exams.documents.forEach(async (exam) => {
        await database.deleteDocument(exam.$databaseId, exam.$collectionId, exam.$id);
      });
    } catch (err) {
      console.error("error clearing exams: ", err);
    }
  }

  async getExamName(subjectCode: string): Promise<string> {
    try {
      const examNameDocs = await database.listDocuments(ExamsDbId, GLOBAL_EXAMS_ID, [
        Query.equal("subjectCode", subjectCode),
        Query.equal("isActive", true),
      ]);
      const examName = examNameDocs.documents[0].examName;

      return examName;
    } catch (error) {
      console.error(error);
      throw new Error("Error getting exam name");
    }
  }

  async submitExam(examId: string, userId: string, score: number, startTime: string, endTime: string): Promise<void> {
    try {
      const exam = await database.updateDocument(ExamsDbId, COMPETE_EXAMS_COLLECTION_ID, this.examDocId, {
        userId: userId,
        score: JSON.stringify(score),
        startTime: startTime,
        endTime: endTime,
      });

      console.log("Exam submitted: ", exam);
    } catch (error) {
      console.error(error);
      throw new Error("Error submitting exam");
    }
  }
}
