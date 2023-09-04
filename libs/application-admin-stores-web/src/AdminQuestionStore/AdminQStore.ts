import { inject, injectable } from "inversify";
import "reflect-metadata";
import { IAdminQStore } from "../models/IAdminQStore";
import { IAdminQService } from "@edthewise/foundation-communication-admin";
import { AdminQPreviewStore } from "./AdminQPreviewStore";
import { ADMIN_TOKENS } from "@edthewise/common-admin-token";

@injectable()
export class AdminQStore implements IAdminQStore {
  @inject(ADMIN_TOKENS.AdminQServiceToken)
  private adminQService: IAdminQService;

  private formData: any;
  private useDataFromStore: boolean;

  currentDocumentId: string;

  constructor(
    @inject(ADMIN_TOKENS.AdminQServiceToken) adminQService: IAdminQService,
    @inject(ADMIN_TOKENS.AdminQPreviewStoreToken) private adminQPreviewStore: AdminQPreviewStore,
  ) {
    this.adminQService = adminQService;
    this.resetPreviewData();
    this.useDataFromStore = false;
    this.currentDocumentId = "";
  }

  async createQuestionDocument(qData: any, collectionTitle: string): Promise<boolean> {
    try {
      let newQDocument;

      !this.currentDocumentId
        ? (newQDocument = await this.adminQService.createQuestionDocument(qData, collectionTitle))
        : (newQDocument = await this.adminQService.updateQuestionDocument(
            qData,
            collectionTitle,
            this.currentDocumentId,
          ));

      this.currentDocumentId = newQDocument?.$id;

      this.adminQPreviewStore.setQuestionPreview(newQDocument);

      return true;
    } catch (error) {
      console.log("createQuestionDocument - error: ", error);
      return false;
    }
  }

  setCurrentFormData(formData: any): void {
    if (!formData) {
      this.resetPreviewData();
      this.currentDocumentId = "";
    }
    this.formData = formData;
  }

  getCurrentFormData(): any {
    return this.formData;
  }

  setDataFromStore(boolean: any): void {
    this.useDataFromStore = boolean;
  }

  shouldGetDataFromStore(): boolean {
    return this.useDataFromStore;
  }

  private resetPreviewData(): void {
    this.formData = {
      qp1: " ",
      qp2: " ",
      qp3: " ",
      qp4: " ",
      qTable1: " ",
      qTable2: " ",
      qOptions: " ",
      year: " ",
      qAnswer: " ",
      qComponentOrder: " ",
    };
  }
}
