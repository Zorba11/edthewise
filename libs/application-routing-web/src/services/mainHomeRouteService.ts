import { UserStore } from "@edthewise/application-stores-web";
import { TOKENS } from "@edthewise/common-tokens-web";
import { inject, injectable } from "inversify";
import { RouterState, RouterStore, useRouterStore } from "mobx-state-router";
import "reflect-metadata";

@injectable()
export class MainHomeRouteService {
  constructor(@inject(TOKENS.UserStoreToken) private userStore: UserStore) {}

  onEnterMainHome = (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    return Promise.resolve();
  };

  beforeEnterMainHome = (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    if (!this.userStore.isLoggedIn) {
      routerStore.goTo("signIn");
    }

    return Promise.resolve();
  };
}
