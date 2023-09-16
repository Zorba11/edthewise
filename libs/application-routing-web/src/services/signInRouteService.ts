import { UserStore } from "@edthewise/application-stores-web";
import { TOKENS } from "@edthewise/common-tokens-web";
import { inject, injectable } from "inversify";
import { RouterState, RouterStore } from "mobx-state-router";
import "reflect-metadata";

@injectable()
export class SignInRouteService {
  constructor(private userStore: UserStore) {}

  onEnterSignIn = (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    return Promise.resolve();
  };

  beforeEnterSignIn = (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    const shouldLogout = toState.params?.logout;

    if (shouldLogout) {
      this.userStore.logout();
    }

    /**
     * TODO: Uncomment this when goinf live
     * make sure userStore is injected correctly too
     */

    // if (this.userStore.isLoggedIn) {
    //   return Promise.resolve(routerStore.goTo("home"));
    // }

    return Promise.resolve();
  };

  beforeExitSignIn = (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    return Promise.resolve();
  };
}
