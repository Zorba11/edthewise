import localforage from "localforage";

export class BaseLocalCacheService {
  questionsStore!: LocalForage;
  examsStore!: LocalForage;

  currentQuestionKey!: string;
  examDocId!: string;
  examRunningKey!: string;

  constructor() {
    this.initializeLocalCacheStores();
  }

  private initializeLocalCacheStores() {
    this.questionsStore = localforage.createInstance({
      driver: localforage.INDEXEDDB,
      name: "edTheWise-questions",
    });

    this.examsStore = localforage.createInstance({
      driver: localforage.INDEXEDDB,
      name: "edTheWise-exam",
    });
  }

  storeCurrentQuestion = async (key: string, question: any) => {
    try {
      this.currentQuestionKey = key;
      await this.questionsStore.setItem(key, question);
    } catch (error) {
      console.log(error);
    }
  };

  getCurrentQuestion = async (key: string) => {
    if (this.currentQuestionKey === key) {
      const question = await this.questionsStore.getItem(key);
      return question;
    } else {
      return null;
    }
  };

  storeExam = async (examDocId: string, exam: any) => {
    try {
      if (examDocId) {
        this.examDocId = examDocId;
        await this.examsStore.setItem(examDocId, exam);
      } else {
        throw Error("BaseLocal - Exam key is not defined");
      }
    } catch (error) {
      console.log(error);
    }
  };

  getExam = async (key: string) => {
    try {
      const exam = await this.examsStore.getItem(key);
      return exam;
    } catch (error) {
      console.log(error);
    }
  };

  clearExam = async () => {
    try {
      await this.examsStore.removeItem(this.examDocId);
    } catch (error) {
      console.log(error);
    }
  };

  clearAllCache = async () => {
    try {
      await this.questionsStore.clear();
      await this.examsStore.clear();
      await this.examsStore.removeItem(this.examRunningKey);
    } catch (error) {
      console.log(error);
    }
  };

  setIsExamRunning = async (isRunning: boolean) => {
    try {
      if (isRunning) {
        this.examRunningKey = (await this.getExamDocId()) + "-isRunning";
        await this.examsStore.setItem(this.examRunningKey, true);
      } else {
        await this.examsStore.setItem(this.examRunningKey, false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  private async getExamDocId(): Promise<string | unknown> {
    if (this.examDocId) return this.examDocId;

    const EXAM_DOC_ID_CACHE_NAME = "exam-docId";
    const examDocId = (await this.getDocumentByName(EXAM_DOC_ID_CACHE_NAME)) ?? "";
    return examDocId;
  }

  isExamRunning = async () => {
    try {
      const examRunningKey = (await this.getExamDocId()) + "-isRunning";
      if (examRunningKey) {
        const exam = await this.examsStore.getItem(examRunningKey);
        if (exam) {
          return true;
        } else {
          return false;
        }
      }
      return false;
    } catch (error) {
      console.log("error checking exam running status: ", error);
      return false;
    }
  };

  storeCurrentExamName = async (examName: string) => {
    try {
      await this.examsStore.setItem("currentExamName", examName);
    } catch (error) {
      console.log(error);
    }
  };

  getCurrentExamName = async () => {
    try {
      const examName = await this.examsStore.getItem("currentExamName");
      return examName;
    } catch (error) {
      console.log(error);
    }
  };

  storeDocument = async (docName: string, document: string) => {
    try {
      await this.examsStore.setItem(docName, document);
    } catch (error) {
      console.log(error);
    }
  };

  getDocumentByName = async (docName: string) => {
    try {
      const document = await this.examsStore.getItem(docName);
      return document;
    } catch (error) {
      console.log(error);
    }
  };
}
