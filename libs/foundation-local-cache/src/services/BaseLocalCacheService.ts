import localforage from "localforage";

export class BaseLocalCacheService {
  questionsStore!: LocalForage;
  examsStore!: LocalForage;

  currentQuestionKey!: string;
  examKey!: string;
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
        this.examKey = examDocId;
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
      await this.examsStore.removeItem(this.examKey);
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
        this.examRunningKey = this.examKey + "-isRunning";
        await this.examsStore.setItem(this.examRunningKey, true);
      } else {
        await this.examsStore.removeItem(this.examRunningKey);
      }
    } catch (error) {
      console.log(error);
    }
  };

  isExamRunning = async () => {
    try {
      if (this.examRunningKey) {
        const exam = await this.examsStore.getItem(this.examRunningKey);
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

  storeDocument = async (docName: string, documentId: string) => {
    try {
      await this.examsStore.setItem(docName, documentId);
    } catch (error) {
      console.log(error);
    }
  };

  getDocument = async (docName: string) => {
    try {
      const documentId = await this.examsStore.getItem(docName);
      return documentId;
    } catch (error) {
      console.log(error);
    }
  };
}
