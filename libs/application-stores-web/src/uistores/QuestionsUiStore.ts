import { FMQuestions } from "@edthewise/foundation-appwrite";
import { Label } from "@mui/icons-material";
import { action, makeAutoObservable } from "mobx";
import "reflect-metadata";

// export interface IQuestionsPool {

// }

export class QuestionsUiStore {
  currentSubjectTitle: string;
  questionsOrder: string[];
  qPool: any;
  qId?: string;
  currentQComponentOrder?: any;
  qP1?: string;
  qTableData?: any;

  constructor() {
    makeAutoObservable(this);
    this.currentSubjectTitle = "";
    this.questionsOrder = [];
  }

  @action
  setCurrentSubjectTitle(subjectTitles: string) {
    this.currentSubjectTitle = subjectTitles;
  }

  @action
  setQuestionsOrder(questionsOrder: string[]) {
    this.questionsOrder = questionsOrder;
  }

  @action
  setQPool(qPool: any) {
    this.qPool = qPool;
  }

  setFirsQuestion() {
    const mcq = FMQuestions.QuestionsPool[0].MCQ;
    this.qId = FMQuestions.QuestionsPool[0].MCQ[0].Qid;
    this.currentQComponentOrder = FMQuestions.QuestionsPool[0].MCQ[0].QComponentOrder;
    this.qP1 = mcq[0].QP1;

    this.qTableData = FMQuestions.QuestionsPool[0].MCQ[0].QTable;
  }

  setFirstQuestionSet() {
    this.qId = this.qPool[0];
  }

  get qPoolLength() {
    return this.qPool.length;
  }
}

export const questionsUiStore = new QuestionsUiStore();
