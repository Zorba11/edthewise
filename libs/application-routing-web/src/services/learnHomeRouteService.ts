import { injectable } from "inversify";
import { RouterState, RouterStore } from "mobx-state-router";

@injectable()
export class LearnHomeRouteService {
  onEnterLearnHome = (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    return Promise.resolve();
  };
}
