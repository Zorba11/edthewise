import { IExamCardData } from "@edthewise/application-exams-web";
import { FMQuestions } from "@edthewise/foundation-appwrite";
import { action, computed, makeAutoObservable } from "mobx";
import "reflect-metadata";

// Not exactly a UI store now
export class QuestionsUiStore {
  private currentSubjectTitle: string;
  private questionsOrder: string[];
  private totalQNumber: number;

  private qp1Desc: string;
  private currQNumber: string;
  private qTableData: any[];
  private qp2: string;
  private qp3: string;
  private answerOptions: { label: string; value: string }[];

  constructor() {
    makeAutoObservable(this);
    this.currentSubjectTitle = "";
    this.questionsOrder = [];
    this.currQNumber = "";
    this.qp1Desc = "";
    this.qTableData = [];
    this.qp2 = "";
    this.qp3 = "";
    this.answerOptions = [];
    this.totalQNumber = 0;
  }

  @computed
  get currentQuestion(): IExamCardData {
    return {
      questionData: {
        qNumber: this.currQNumber,
        qp1desc: this.qp1Desc,
        qTableData: this.qTableData,
        qp2: this.qp2,
        qp3: this.qp3,
        answerOptions: this.answerOptions,
      },
    };
  }

  @computed
  get currentQuestionNumber(): string {
    return this.currQNumber;
  }

  @action
  setCurrentSubjectTitle(subjectTitles: string) {
    this.currentSubjectTitle = subjectTitles;
  }

  @action
  setQuestionsOrder(questionsOrder: string[]) {
    this.questionsOrder = questionsOrder;
  }

  setFirstQuestionSet() {
    this.currQNumber = FMQuestions.QuestionsPool[0].MCQ[0].Qid ? FMQuestions.QuestionsPool[0].MCQ[0].Qid : "1";
    this.qp1Desc = FMQuestions.QuestionsPool[0].MCQ[0].QP1 ? FMQuestions.QuestionsPool[0].MCQ[0].QP1 : "";

    this.qTableData = FMQuestions.QuestionsPool[0].MCQ[0].QTable as any[];

    this.qp2 = FMQuestions.QuestionsPool[0].MCQ[0].QP2 ? FMQuestions.QuestionsPool[0].MCQ[0].QP2 : "";
    this.qp3 = FMQuestions.QuestionsPool[0].MCQ[0].QP3 ? FMQuestions.QuestionsPool[0].MCQ[0].QP3 : "";

    this.answerOptions = FMQuestions.QuestionsPool[0].MCQ[0].Options ? FMQuestions.QuestionsPool[0].MCQ[0].Options : [];

    this.totalQNumber = FMQuestions.QuestionsPool[0].MCQ.length;
  }
}

export const questionsUiStore = new QuestionsUiStore();
