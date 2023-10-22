import { TOKENS } from "@edthewise/common-tokens-web";
import { inject, injectable } from "inversify";
import { QuestionsStore } from "./QuestionsStore";
import { CompeteExamsStore } from "../stores/CompeteExamStore";
import { RouterStore } from "mobx-state-router";

@injectable()
export class QuestionsUiStore {
  constructor(
    @inject(TOKENS.QuestionsStoreToken) private questionsStore: QuestionsStore,
    @inject(TOKENS.ExamStoreToken) private examsStore: CompeteExamsStore, //should be different for Learn
  ) {}

  onFinishHandler = (event: any) => {
    event.preventDefault();
    console.log("onFinishHandler");
  };

  onQNumberClick = (event: any, questionNumber: number) => {
    event?.preventDefault();
    this.questionsStore.setQuestionByNum(questionNumber);
  };

  goToNextQuestion = (event: any) => {
    event.preventDefault();
    // TODO: Remove this in production
    if (this.questionsStore.currentQuestion.qNumber === this.questionsStore.totalQuestions) {
      return;
    }
    this.questionsStore.setNextQuestion();
  };

  goToPreviousQuestion = (event: any) => {
    event.preventDefault();
    if (this.questionsStore.currentQuestion.qNumber && this.questionsStore.currentQuestion.qNumber !== 1) {
      this.questionsStore.setPreviousQuestion();
    }
  };

  goToQuestion = (event: any, qNumber: number) => {
    event.preventDefault();
    this.onQNumberClick(event, qNumber);
  };

  submitAnswer() {
    this.questionsStore.submitAnswer();
  }

  submitExam() {
    this.questionsStore.submitExam();
  }

  get shouldSubmitExam() {
    return this.questionsStore.shouldSubmitExam;
  }

  get currentQuestion() {
    return this.questionsStore.currentQuestion;
  }

  get submittedQuestions() {
    return this.questionsStore.submittedQuestions;
  }

  get totalQuestions() {
    return this.questionsStore.totalQuestions;
  }

  get showOptionNotSelectedError() {
    return this.questionsStore.showOptionNotSelectedError;
  }

  initkeyBoardNavListeners() {
    const handleKeyDown = (event: KeyboardEvent) => {
      const qNumber = this.questionsStore?.currentQuestion?.qNumber ?? 1;
      const totalQuestions = this.questionsStore.totalQuestions;

      if (event.key === "ArrowLeft") {
        this.goToPreviousQuestion(event);
      } else if (event.key === "ArrowRight") {
        this.goToNextQuestion(event);
      } else if (event.key === "ArrowDown" && qNumber + 10 <= totalQuestions) {
        this.goToQuestion(event, qNumber + 10);
      } else if (event.key === "ArrowUp" && qNumber - 10 >= 1) {
        this.goToQuestion(event, qNumber - 10);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }
}
