import { RouterState, RouterStore } from "mobx-state-router";

class AdminMCQPreviewRouteService {
  onEnter = (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    return Promise.resolve();
  };

  beforEnter = (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    return Promise.resolve();
  };
}

export const adminMCQPreviewRouteService = new AdminMCQPreviewRouteService();
