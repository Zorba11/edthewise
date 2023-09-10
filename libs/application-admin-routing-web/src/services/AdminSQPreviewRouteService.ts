import { RouterState, RouterStore } from "mobx-state-router";

class AdminSQPreviewRouteService {
  onEnter = (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    return Promise.resolve();
  };

  beforEnter = (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    return Promise.resolve();
  };
}

export const adminSQPreviewRouteService = new AdminSQPreviewRouteService();
