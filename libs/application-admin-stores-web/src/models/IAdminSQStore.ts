export interface IAdminSQStore {
  createQuestionDocument(qData: any, collectionTitle: string): Promise<boolean>;
  setCurrentFormData(formData: any): void;
  getCurrentFormData(): any;
  shouldGetDataFromStore(): boolean;
  setDataFromStore(boolean: any): void;
  currentDocumentId: string;
}
