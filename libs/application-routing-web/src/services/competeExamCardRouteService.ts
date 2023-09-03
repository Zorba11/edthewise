import { QuestionsStore } from "@edthewise/application-stores-web";
import { TOKENS } from "@edthewise/common-tokens-web";
import { inject, injectable } from "inversify";
import { RouterState, RouterStore } from "mobx-state-router";

@injectable()
export class CompeteExamCardRouteService {
  questionsUiStore: QuestionsStore;

  constructor(@inject(TOKENS.QuestionsStoreToken) questionsUiStore: QuestionsStore) {
    this.questionsUiStore = questionsUiStore;
  }

  onEnterCompeteExamCard = (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    return Promise.resolve();
  };

  beforeEnterCompeteCard = async (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    await this.questionsUiStore.setFirstQuestionSet();

    return Promise.resolve();
  };
}
