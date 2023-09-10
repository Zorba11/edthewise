import { injectable } from "inversify";
import { AccaSubjectList, PscSubjectList } from "../model-db/ACAACollection";
import "reflect-metadata";

// Use inversify JS to make this injectable
// and inject into QuestionsUiStore
// Add data to the DB accordingly

export interface ISubjectList {
  ACCA: string[];
  PSC: string[];
}
@injectable()
export class ExamsService {
  getSubjectTitles = async (): Promise<ISubjectList | undefined> => {
    try {
      // const examListRequest = await database.getDocument(ExamsDbId, ExamsCollectionId, SubjectsDocId);
      // const subjectTitles = examListRequest.ACCA;

      const subjectTitles = {
        ACCA: AccaSubjectList,
        PSC: PscSubjectList,
      };

      return subjectTitles;
    } catch (error) {
      console.error(error);
    }
  };
}
