import { action, makeAutoObservable } from "mobx";
import "reflect-metadata";

class ExamsStore {

  subjectTitles: string[];

  constructor() {
    makeAutoObservable(this);
    this.subjectTitles = ['Hello'];
  }

  @action
  setSubjectTitles(subjectTitles: string[]) {
    this.subjectTitles = subjectTitles;
  }
}

export const examStore = new ExamsStore();
