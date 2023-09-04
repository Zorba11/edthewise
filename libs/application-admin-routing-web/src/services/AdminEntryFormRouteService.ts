import { RouterState, RouterStore } from "mobx-state-router";

class AdminEntryFormRouteService {
  onEnter = (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    return Promise.resolve();
  };

  beforEnter = (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    return Promise.resolve();
  };
}

export const adminEntryFormRouteService = new AdminEntryFormRouteService();
