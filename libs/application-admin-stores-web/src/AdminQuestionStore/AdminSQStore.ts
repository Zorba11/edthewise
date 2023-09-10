import { inject, injectable } from "inversify";
import { IAdminSQStore as IAdminSQPreviewStore } from "../models/IAdminSQStore";
import { ADMIN_TOKENS } from "@edthewise/common-admin-token";
import { IAdminQService } from "@edthewise/foundation-communication-admin";
import { AdminSQPreviewStore } from "./AdminSQPreviewStore";

@injectable()
export class AdminSQStore implements IAdminSQPreviewStore {
  private adminQService: IAdminQService;

  private formData: any;
  private useDataFromStore: boolean;

  currentDocumentId: string;

  constructor(
    @inject(ADMIN_TOKENS.AdminQServiceToken) adminQService: IAdminQService,
    @inject(ADMIN_TOKENS.AdminSQPreviewStoreToken) private adminQPreviewStore: AdminSQPreviewStore,
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
      sqTitle: "",
      sqDesc1: "",
      sqDesc2: "",
      sqDesc3: "",
      sqTable1: "",
      sqTable2: "",
      sq1Options: "",
      year: "",
      q1Answer: "",
      sqBoxComponentOrder: "",
      sq1P1: "",
      sq1P2: "",
      sq1P3: "",
      sq1Table1: "",
      sq1Table2: "",
      sq1OPtions: "",
      sq1Answer: "",
      sq1ComponentOrder: "",
      sq2P1: "",
      sq2P2: "",
      sq2P3: "",
      sq2Table1: "",
      sq2Table2: "",
      sq2Options: "",
      sq2Answer: "",
      sq2ComponentOrder: "",
      sq3P1: "",
      sq3P2: "",
      sq3P3: "",
      sq3Table1: "",
      sq3Table2: "",
      sq3Options: "",
      sq3Answer: "",
      sq3ComponentOrder: "",
      sq4P1: "",
      sq4P2: "",
      sq4P3: "",
      sq4Table1: "",
      sq4Table2: "",
      sq4Options: "",
      sq4Answer: "",
      sq4ComponentOrder: "",
      sq5P1: "",
      sq5P2: "",
      sq5P3: "",
      sq5Table1: "",
      sq5Table2: "",
      sq5Options: "",
      sq5Answer: "",
      sq5ComponentOrder: "",
    };
  }
}
