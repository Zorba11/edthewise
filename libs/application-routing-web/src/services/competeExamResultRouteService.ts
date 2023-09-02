import { injectable } from "inversify";
import { RouterState, RouterStore } from "mobx-state-router";

@injectable()
export class CompeteExamResultRouteService {
  onEnterCompeteExamResult = (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    return Promise.resolve();
  };
}
