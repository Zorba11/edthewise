export interface IAdminQService {
  createQuestionDocument(collectionTitle: string): Promise<boolean>;
}
