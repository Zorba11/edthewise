import { RouterState, RouterStore } from "mobx-state-router";
import { inject, injectable } from "inversify";
import { ExamsStore } from "@edthewise/application-stores-web";
import { TOKENS } from "@edthewise/common-tokens-web";
import "reflect-metadata";

@injectable()
export class CompeteHomeRouteService {
  private examStore: ExamsStore;

  constructor(@inject(TOKENS.ExamStoreToken) examStore: ExamsStore) {
    this.examStore = examStore;
  }

  onEnterCompeteHome = (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    return Promise.resolve();
  };

  beforeEnterCompeteHome = async (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    await this.examStore.setSubjectTitles();

    return Promise.resolve();
  };
}
