import { database } from "../appwrite-config/config";
import { ExamsCollectionId, ExamsDbId, SubjectsDocId } from "../db/collections";


export const getSubjects = async (): Promise<string[]> => {
  try {
    const examListRequest = await database.getDocument(ExamsDbId, ExamsCollectionId, SubjectsDocId);
    const subjectTitles = examListRequest.ACCA;
    return subjectTitles
  } catch (err) {
    console.log(err);
    return [];
  }
}