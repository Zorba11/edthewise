import { QuestionsUiStore, questionsUiStore } from "@edthewise/application-stores-web";
import { FMQuestions } from "@edthewise/foundation-appwrite";
import { RouterState, RouterStore } from "mobx-state-router";

export const onEnterCompeteExamCard = (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
  return Promise.resolve();
};

export const beforeEnterCompeteCard = (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
  let qUiStore = questionsUiStore;

  if (!questionsUiStore.qPool) {
    qUiStore = new QuestionsUiStore();
  }
  const subjectTitle = FMQuestions.SubjectTitle;
  qUiStore.setCurrentSubjectTitle(subjectTitle);

  const questionsOrder = FMQuestions.QuestionsOrder;
  qUiStore.setQuestionsOrder(questionsOrder);

  const qPool = FMQuestions.QuestionsPool;
  qUiStore.setQPool(qPool);

  qUiStore.setFirsQuestion();

  return Promise.resolve();
};
