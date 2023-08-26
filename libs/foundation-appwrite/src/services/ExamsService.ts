import { database } from "../appwrite-config/config";
import { ExamsCollectionId, ExamsDbId, SubjectsDocId } from "../db/collections";
import { SubjectList } from "../model-db/ACAACollection";

export const getSubjects = async (): Promise<string[]> => {
  try {
    // const examListRequest = await database.getDocument(ExamsDbId, ExamsCollectionId, SubjectsDocId);
    // const subjectTitles = examListRequest.ACCA;

    return SubjectList;
  } catch (err) {
    console.log(err);
    return [];
  }
};
