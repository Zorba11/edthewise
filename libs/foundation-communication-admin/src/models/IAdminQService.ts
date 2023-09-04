import { IValidatedQData } from "./IValidatedQData";

export interface IAdminQService {
  createQuestionDocument(qData: IValidatedQData, collectionTitle: string): Promise<boolean>;
}
