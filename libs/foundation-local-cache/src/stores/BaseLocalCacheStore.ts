import { injectable } from "inversify";
import { BaseLocalCacheService } from "../services/BaseLocalCacheService";

@injectable()
export class BaseLocalCacheStore {
  private cache: any = {};

  private cacheService: BaseLocalCacheService;

  constructor() {
    this.cacheService = new BaseLocalCacheService();
  }

  storeCurrentQuestion = async (key: string, question: any) => {
    try {
      this.cache[key] = question;
      await this.cacheService.storeCurrentQuestion(key, question);
    } catch (error) {
      console.log(error);
    }
  };

  getCurrentQuestion = async (key: string) => {
    if (this.cache[key]) {
      return this.cache[key];
    } else {
      const question = await this.cacheService.getCurrentQuestion(key);
      return question;
    }
  };

  storeExam = async (examDocId: string, exam: any) => {
    try {
      if (examDocId) {
        this.cache[examDocId] = exam;
        await this.cacheService.storeExam(examDocId, exam);
      } else {
        throw Error("BaseLocal - Exam key is not defined");
      }
    } catch (error) {
      console.log(error);
    }
  };

  getExam = async (examDocId: string) => {
    try {
      if (this.cache[examDocId]) {
        return this.cache[examDocId];
      } else {
        const exam = await this.cacheService.getExam(examDocId);
        return exam;
      }
    } catch (error) {
      console.log(error);
    }
  };

  clearCache = async () => {
    try {
      this.cache = {};
      await this.cacheService.clearAllCache();
    } catch (error) {
      console.log(error);
    }
  };

  clearExam = async () => {
    try {
      await this.cacheService.clearExam();
    } catch (error) {
      console.log(error);
    }
  };

  storeIsExamRunning = async (isExamRunning: boolean) => {
    try {
      await this.cacheService.setIsExamRunning(isExamRunning);
    } catch (error) {
      console.log(error);
    }
  };

  isExamRunning = async () => {
    return await this.cacheService.isExamRunning();
  };

  storeCurrentExamName = async (examName: string) => {
    try {
      await this.cacheService.storeCurrentExamName(examName);
    } catch (error) {
      console.log(error);
    }
  };

  getCurrentExamName = async () => {
    try {
      const examName = await this.cacheService.getCurrentExamName();
      return examName;
    } catch (error) {
      console.log(error);
    }
  };

  storeDocument = async (docName: string, value: string) => {
    try {
      await this.cacheService.storeDocument(docName, value);
    } catch (error) {
      console.log(error);
    }
  };

  getDocument = async (docName: string): Promise<any> => {
    try {
      const documentId = await this.cacheService.getDocument(docName);
      return documentId;
    } catch (error) {
      console.log(error);
    }
  };
}
