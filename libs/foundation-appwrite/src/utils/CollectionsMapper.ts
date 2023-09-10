import { FM_MCQ_ACCA_ID, FM_SQ_ACCA_ID } from "../db/collections";

export class CollectionsMapper {
  static mapTitleToCollectionId = (title: string): string => {
    switch (title) {
      case "FM-MCQ-ACCA":
        return FM_MCQ_ACCA_ID;
      case "FM-SQ-ACCA":
        return FM_SQ_ACCA_ID;
      default:
        return "no collection found";
    }
  };
}
