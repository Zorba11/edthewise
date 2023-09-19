import { CompeteListStore, CompeteListStoreToken, UserStore } from "@edthewise/application-stores-web";
import { TOKENS } from "@edthewise/common-tokens-web";
import { inject, injectable } from "inversify";
import { RouterState, RouterStore } from "mobx-state-router";
import "reflect-metadata";

@injectable()
export class CompeteListRouteService {
  private competeListStore: CompeteListStore;

  constructor(@inject(CompeteListStoreToken) competeListStore: CompeteListStore, private userStore: UserStore) {
    this.competeListStore = competeListStore;
  }

  onEnterCompeteList = (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    return Promise.resolve();
  };

  beforeEnterCompeteList = async (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    /**
     * TODO: Uncomment this when goinf live
     * make sure userStore is injected correctly too
     */

    // if (!this.userStore.isLoggedIn) {
    //   return Promise.resolve(routerStore.goTo("signIn"));
    // }

    const subjectTitle = toState.queryParams.subject;

    // Using subjectTitle get the current Global Exam name and add it to exam store

    await this.competeListStore.setCurrentSubjectTitleAndStats(subjectTitle);

    return Promise.resolve();
  };
}
