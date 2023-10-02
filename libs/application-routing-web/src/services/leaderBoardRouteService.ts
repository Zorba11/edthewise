import { LeaderBoardStore } from "@edthewise/application-stores-web";
import { TOKENS } from "@edthewise/common-tokens-web";
import { inject, injectable } from "inversify";
import { RouterState, RouterStore } from "mobx-state-router";

@injectable()
export class LeaderBoardRouteService {
  constructor(@inject(TOKENS.LeaderBoardStoreToken) private leaderBoardStore: LeaderBoardStore) {}

  beforeEnterLeaderBoard = async (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    /**
     * TODO: Uncomment this when goinf live
     * make sure userStore is injected correctly too
     */

    // if (!this.userStore.isLoggedIn) {
    //   return Promise.resolve(routerStore.goTo("signIn"));
    // }

    await this.leaderBoardStore.fetchLeaderBoard();

    return Promise.resolve();
  };

  onEnterLeaderBoard = (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    return Promise.resolve();
  };
}
