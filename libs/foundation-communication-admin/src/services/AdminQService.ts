import { injectable } from "inversify";
import { IAdminQService } from "../models/IAdminQService";
import { CollectionsMapper, ExamsDbId, database } from "@edthewise/foundation-appwrite";
import { v4 as uuidv4 } from "uuid";

@injectable()
export class AdminQService implements IAdminQService {
  async createQuestionDocument(qData: any, collectionTitle: string): Promise<boolean> {
    const collectionId = CollectionsMapper.mapTitleToCollectionId(collectionTitle);
    const documentId = uuidv4();

    // if (typeof qData.QOPTIONS["0"] !== "string") {
    //   qData.QOPTIONS["0"] = String(qData.QOPTIONS["0"]);
    // }
    // if (typeof qData.QOPTIONS["1"] !== "string") {
    //   qData.QOPTIONS["1"] = String(qData.QOPTIONS["0"]);
    // }
    // if (typeof qData.QOPTIONS["2"] !== "string") {
    //   qData.QOPTIONS["2"] = String(qData.QOPTIONS["0"]);
    // }
    // if (typeof qData.QOPTIONS["3"] !== "string") {
    //   qData.QOPTIONS["3"] = String(qData.QOPTIONS["0"]);
    // }

    // const qDataJson = JSON.stringify(qData);
    try {
      const newDocument = await database.createDocument(ExamsDbId, collectionId, documentId, qData);
      return true;
    } catch (error) {
      console.log("Service - createQuestionDocument - error: ", error);
      return false;
    }
  }
}
