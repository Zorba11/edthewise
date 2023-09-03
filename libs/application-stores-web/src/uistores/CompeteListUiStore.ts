import "reflect-metadata";

class CompeteListUiStore {
  currentSubjectTitle: string;

  constructor() {
    this.currentSubjectTitle = "";
  }

  setCurrentSubjectTitle(subjectTitles: string) {
    this.currentSubjectTitle = subjectTitles;
  }
}

export const competeListUiStore = new CompeteListUiStore();
