import { UserStore } from "@edthewise/application-stores-web";
import { TOKENS } from "@edthewise/common-tokens-web";
import { inject, injectable } from "inversify";
import { RouterState, RouterStore } from "mobx-state-router";

@injectable()
export class CompeteExamResultRouteService {
  constructor(private userStore: UserStore) {}

  onEnterCompeteExamResult = (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    return Promise.resolve();
  };

  beforeEnterCompeteExamResult = (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    if (!this.userStore.isLoggedIn) {
      return Promise.resolve(routerStore.goTo("signIn"));
    }
    return Promise.resolve();
  };
}
