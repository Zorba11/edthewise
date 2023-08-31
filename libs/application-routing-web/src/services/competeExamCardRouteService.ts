import { QuestionsUiStore, questionsUiStore } from "@edthewise/application-stores-web";
import { FMQuestions } from "@edthewise/foundation-appwrite";
import { injectable } from "inversify";
import { RouterState, RouterStore } from "mobx-state-router";

@injectable()
export class CompeteExamCardRouteService {
  onEnterCompeteExamCard = (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    return Promise.resolve();
  };

  beforeEnterCompeteCard = (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    questionsUiStore.setFirstQuestionSet();

    return Promise.resolve();
  };
}
