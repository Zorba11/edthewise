import { IExamCardData } from "@edthewise/foundation-appwrite";

export interface IQuestionData {
  qNumber: number;
}

export interface IAdminQStore {
  createQuestionDocument(qData: any, collectionTitle: string): Promise<boolean>;
}
