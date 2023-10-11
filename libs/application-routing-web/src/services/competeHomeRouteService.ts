import { RouterState, RouterStore } from "mobx-state-router";
import { inject, injectable } from "inversify";
import { CompeteExamsStore, UserStore } from "@edthewise/application-stores-web";
import { TOKENS } from "@edthewise/common-tokens-web";
import "reflect-metadata";

@injectable()
export class CompeteHomeRouteService {
  private examStore: CompeteExamsStore;

  constructor(
    @inject(TOKENS.ExamStoreToken) examStore: CompeteExamsStore,
    @inject(TOKENS.UserStoreToken) private userStore: UserStore,
  ) {
    this.examStore = examStore;
  }

  onEnterCompeteHome = (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    return Promise.resolve();
  };

  beforeEnterCompeteHome = async (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    /**
     * TODO: Uncomment this when goinf live
     * make sure userStore is injected correctly too
     */

    // if (!this.userStore.isLoggedIn) {
    //   return Promise.resolve(routerStore.goTo("signIn"));
    // }

    await this.examStore.setSubjectTitles();

    return Promise.resolve();
  };
}
