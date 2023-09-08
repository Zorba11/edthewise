import { injectable } from "inversify";
import { AccaSubjectList } from "../model-db/ACAACollection";
import "reflect-metadata";

// Use inversify JS to make this injectable
// and inject into QuestionsUiStore
// Add data to the DB accordingly
@injectable()
export class ExamsService {
  getSubjectTitles = async (): Promise<string[] | undefined> => {
    try {
      // const examListRequest = await database.getDocument(ExamsDbId, ExamsCollectionId, SubjectsDocId);
      // const subjectTitles = examListRequest.ACCA;

      const subjectTitles = AccaSubjectList;

      return subjectTitles;
    } catch (error) {
      console.error(error);
    }
  };
}
