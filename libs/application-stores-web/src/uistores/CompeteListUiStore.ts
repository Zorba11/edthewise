import { action, makeAutoObservable } from "mobx";
import "reflect-metadata";

class CompeteListUiStore {
  currentSubjectTitle: string;

  constructor() {
    makeAutoObservable(this);
    this.currentSubjectTitle = "";
  }

  @action
  setCurrentSubjectTitle(subjectTitles: string) {
    this.currentSubjectTitle = subjectTitles;
  }
}

export const competeListUiStore = new CompeteListUiStore();
