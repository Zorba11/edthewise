import { injectable } from "inversify";
import { AccaSubjectList, PscSubjectList } from "../model-db/ACAACollection";
import "reflect-metadata";
import { database } from "../appwrite-config/config";
import {
  ACCA_FM_COMP_JAN_2024_COLL_ID,
  COMPETE_EXAMS_COLLECTION_ID,
  ExamsDbId,
  GLOBAL_EXAMS_COLL_ID,
} from "../db/collections";
import { ID, Models, Query } from "appwrite";

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
  private examGlobalId!: string;

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

      this.examDocId = (await localStorage.getItem(`exam-docId`)) ?? "";

      if (this.examDocId) {
        const cachedExamData = await localStorage.getItem(`exam-${this.examDocId}`);
        if (cachedExamData && !JSON.parse(cachedExamData).isSubmitted) {
          const examData = JSON.parse(cachedExamData);
          this.exam = JSON.parse(examData.exam);
          this.examDocId = this.exam.$id;
          console.log("Exam retrieved from cache: ", this.exam);
          return this.exam;
        }
      }

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

      await this.storeExamData();

      await this.storeExamInitData();

      return this.exam;
    } catch (error) {
      console.error(error);
      throw new Error("Error creating exam");
    }
  }

  private async storeExamData() {
    await localStorage.setItem(`exam-docId`, JSON.stringify(this.examDocId));
  }

  private async storeExamInitData() {
    const examData = {
      isSubmitted: false,
      exam: JSON.stringify(this.exam),
    };

    await localStorage.setItem(`exam-${this.examDocId}`, JSON.stringify(examData));

    await localStorage.setItem(`exam-${this.examDocId}-isRunning`, "true");
  }

  getIsExamRunning(examDocId: string): boolean {
    const isExamRunning = localStorage.getItem(`exam-${examDocId}-isRunning`);
    if (isExamRunning === "true") {
      return true;
    }
    return false;
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

  async getExamName(subjectCode: string): Promise<string | undefined> {
    try {
      const examNameInStorage = await localStorage.getItem(`${subjectCode}exName`);
      const examGlobalIdInCache = await localStorage.getItem(`${subjectCode}Gid`);

      if (examNameInStorage && examGlobalIdInCache) {
        return examNameInStorage;
      }

      const examNameDocs = await database.listDocuments(ExamsDbId, GLOBAL_EXAMS_COLL_ID, [
        Query.equal("subjectCode", subjectCode),
        Query.equal("isActive", true),
      ]);
      const examName = examNameDocs?.documents[0]?.examName ?? "";
      const globalId = examNameDocs?.documents[0]?.globalId ?? "";

      if (examName && globalId) {
        const examGlobalId = subjectCode + globalId;

        await localStorage.setItem(`${subjectCode}Gid`, examGlobalId);
        await localStorage.setItem(`${subjectCode}exName`, examName);
      }

      return examName;
    } catch (error) {
      console.error(error);
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

      const cachedExamData = await localStorage.getItem(`exam-${examId}`);

      await this.clearExamCache(cachedExamData, examId);

      await localStorage.setItem(`exam-${examId}-isRunning`, "false");

      console.log("Exam submitted: ", exam);
    } catch (error) {
      console.error(error);
      throw new Error("Error submitting exam");
    }
  }

  private async clearExamCache(cachedExamData: string | null, examId: string) {
    if (cachedExamData) {
      const examData = await JSON.parse(cachedExamData);
      examData.isSubmitted = true;
      await localStorage.setItem(`exam-${examId}`, "");
    }
  }

  /**
   *
   * TODO: This method should be moved to LeaderBoardService
   */
  async submitToLeaderBoard(
    examId: string,
    userId: string,
    userName: string,
    score: number,
    duration: number,
    durationString: string,
    location = "India",
    prize = "1000", // TODO: add a separate service to query the db and calculate the prize money
  ): Promise<void> {
    try {
      const userInLeaderBoard = await database.createDocument(ExamsDbId, ACCA_FM_COMP_JAN_2024_COLL_ID, ID.unique(), {
        globalId: this.examGlobalId,
        userId: userId,
        name: userName,
        marks: JSON.stringify(score),
        location: location,
        prizeMoney: prize,
        duration: duration,
        durationString: durationString,
      });

      console.log("Submitted to leaderboard: ", userInLeaderBoard);
    } catch (error) {
      console.error(error);
      throw new Error("Error submitting to leaderboard");
    }
  }
}
