import { QuestionsStore } from "@edthewise/application-stores-web";
import { TOKENS } from "@edthewise/common-tokens-web";
import { inject, injectable } from "inversify";
import { RouterState, RouterStore } from "mobx-state-router";

@injectable()
export class LearnExamCardRouteService {
  private questionsUiStore: QuestionsStore;

  constructor(@inject(TOKENS.QuestionsStoreToken) questionsUiStore: QuestionsStore) {
    this.questionsUiStore = questionsUiStore;
  }

  onEnterLearnExamCard = (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    return Promise.resolve();
  };

  beforeEnterLearnCard = async (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    this.questionsUiStore.subject = toState.params.subject;
    await this.questionsUiStore.setFirstQuestionSet();

    return Promise.resolve();
  };
}
