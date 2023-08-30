import { QuestionsUiStore, questionsUiStore } from "@edthewise/application-stores-web";
import { FMQuestions } from "@edthewise/foundation-appwrite";
import { RouterState, RouterStore } from "mobx-state-router";

export const onEnterCompeteExamCard = (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
  return Promise.resolve();
};

export const beforeEnterCompeteCard = (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
  questionsUiStore.setFirstQuestionSet();

  return Promise.resolve();
};
