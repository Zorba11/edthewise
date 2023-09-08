import { CompeteListStore, CompeteListStoreToken } from "@edthewise/application-stores-web";
import { inject, injectable } from "inversify";
import { RouterState, RouterStore } from "mobx-state-router";
import "reflect-metadata";

@injectable()
export class CompeteListRouteService {
  private competeListStore: CompeteListStore;

  constructor(@inject(CompeteListStoreToken) competeListStore: CompeteListStore) {
    this.competeListStore = competeListStore;
  }

  onEnterCompeteList = (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    return Promise.resolve();
  };

  beforeEnterCompeteList = async (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    const subjectTitle = toState.queryParams.subject;

    await this.competeListStore.setCurrentSubjectTitleAndStats(subjectTitle);

    return Promise.resolve();
  };
}
