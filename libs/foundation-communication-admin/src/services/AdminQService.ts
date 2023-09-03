import { injectable } from "inversify";
import { IAdminQService } from "../models/IAdminQService";
import { CollectionsMapper, ExamsDbId, client, database } from "@edthewise/foundation-appwrite";
import { v4 as uuidv4 } from "uuid";
import { Permission, Role } from "appwrite";

@injectable()
export class AdminQService implements IAdminQService {
  async createQuestionDocument(collectionTitle: string): Promise<boolean> {
    const collectionId = CollectionsMapper.mapTitleToCollectionId(collectionTitle);
    const documentId = uuidv4();
    const Qid = `FM-MCQ-${Date.now().toPrecision}-${Math.floor(Math.random() * 10000)}`;
    try {
      const newDocument = await database.createDocument(ExamsDbId, collectionId, documentId, {
        QP1: "HELLO",
        QId: Qid,
      });
      return true;
    } catch (error) {
      console.log("Service - createQuestionDocument - error: ", error);
      return false;
    }
  }
}
