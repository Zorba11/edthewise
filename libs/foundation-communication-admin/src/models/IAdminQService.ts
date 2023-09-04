import { IValidatedQData } from "./IValidatedQData";

export interface IAdminQService {
  createQuestionDocument(qData: IValidatedQData, collectionTitle: string): Promise<any>;
  updateQuestionDocument(qData: IValidatedQData, collectionTitle: string, documentId: string): Promise<any>;
}
