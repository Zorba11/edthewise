import { RouterState, RouterStore } from "mobx-state-router";

class AdminQPreviewRouteService {
  onEnter = (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    return Promise.resolve();
  };

  beforEnter = (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    return Promise.resolve();
  };
}

export const adminQPreviewRouteService = new AdminQPreviewRouteService();
