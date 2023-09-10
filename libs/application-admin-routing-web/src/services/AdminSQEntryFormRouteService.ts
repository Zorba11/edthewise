import { RouterState, RouterStore } from "mobx-state-router";

class AdminSQEntryFormRouteService {
  onEnter = (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    return Promise.resolve();
  };

  beforEnter = (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    return Promise.resolve();
  };
}

export const adminSQEntryFormRouteService = new AdminSQEntryFormRouteService();
