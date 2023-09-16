import { UserStore } from "@edthewise/application-stores-web";
import { TOKENS } from "@edthewise/common-tokens-web";
import { inject, injectable } from "inversify";
import { RouterState, RouterStore } from "mobx-state-router";

@injectable()
export class LearnListRouteService {
  constructor(private userStore: UserStore) {}

  onEnterLearnList = (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    return Promise.resolve();
  };

  beforeEnterLearnList = (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    if (!this.userStore.isLoggedIn) {
      return Promise.resolve(routerStore.goTo("signIn"));
    }

    return Promise.resolve();
  };
}
