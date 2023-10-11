import { QuestionsStore, UserStore } from "@edthewise/application-stores-web";
import { TOKENS } from "@edthewise/common-tokens-web";
import { inject, injectable } from "inversify";
import { RouterState, RouterStore } from "mobx-state-router";

@injectable()
export class LearnExamCardRouteService {
  private questionsUiStore: QuestionsStore;

  constructor(
    @inject(TOKENS.QuestionsStoreToken) questionsUiStore: QuestionsStore,
    @inject(TOKENS.UserStoreToken) private userStore: UserStore,
  ) {
    this.questionsUiStore = questionsUiStore;
  }

  onEnterLearnExamCard = (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    return Promise.resolve();
  };

  beforeEnterLearnCard = async (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    /**
     * TODO: Uncomment this when goinf live
     * make sure userStore is injected correctly too
     */

    // if (!this.userStore.isLoggedIn) {
    //   return Promise.resolve(routerStore.goTo("signIn"));
    // }

    this.questionsUiStore.subject = toState.params.subject;
    await this.questionsUiStore.setQuestionSetAndCurrentQ();

    return Promise.resolve();
  };
}
