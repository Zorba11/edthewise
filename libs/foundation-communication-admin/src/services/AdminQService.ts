import { injectable } from "inversify";
import { IAdminQService } from "../models/IAdminQService";
import { CollectionsMapper, ExamsDbId, database } from "@edthewise/foundation-appwrite";
import { v4 as uuidv4 } from "uuid";
import { AppwriteException } from "appwrite";
import { IValidatedQData } from "../models/IValidatedQData";

@injectable()
export class AdminQService implements IAdminQService {
  async createQuestionDocument(qData: any, collectionTitle: string): Promise<any> {
    const collectionId = CollectionsMapper.mapTitleToCollectionId(collectionTitle);
    const documentId = uuidv4();
    try {
      const newDocument = await database.createDocument(ExamsDbId, collectionId, documentId, qData);

      if (newDocument.$id) {
        console.log("Service - createQuestionDocument - newDocument.$id: ", newDocument.$id);
      }
      return newDocument;
    } catch (error) {
      throw new AppwriteException(String(error));
    }
  }

  async updateQuestionDocument(qData: IValidatedQData, collectionTitle: string, documentId: string): Promise<any> {
    try {
      const collectionId = CollectionsMapper.mapTitleToCollectionId(collectionTitle);
      const newDocument = await database.updateDocument(ExamsDbId, collectionId, documentId, qData);

      return newDocument;
    } catch (error) {
      throw new AppwriteException(String(error));
    }
  }
}
