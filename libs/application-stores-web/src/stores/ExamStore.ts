import "reflect-metadata";

class ExamsStore {
  subjectTitles: string[];

  constructor() {
    this.subjectTitles = ["Hello"];
  }

  setSubjectTitles(subjectTitles: string[]) {
    this.subjectTitles = subjectTitles;
  }
}

export const examStore = new ExamsStore();
