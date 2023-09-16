import { UserStore } from "@edthewise/application-stores-web";
import { TOKENS } from "@edthewise/common-tokens-web";
import { inject, injectable } from "inversify";
import { RouterState, RouterStore } from "mobx-state-router";
import "reflect-metadata";

@injectable()
export class MainHomeRouteService {
  constructor(private userStore: UserStore) {}

  onEnterMainHome = (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    return Promise.resolve();
  };

  beforeEnterMainHome = (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    if (!this.userStore.isLoggedIn) {
      return Promise.resolve(routerStore.goTo("signIn"));
    }

    return Promise.resolve();
  };

  beforeExitMainHome = (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    return Promise.resolve();
  };
}
