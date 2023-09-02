import { competeListUiStore } from "@edthewise/application-stores-web";
import { injectable } from "inversify";
import { RouterState, RouterStore } from "mobx-state-router";

@injectable()
export class CompeteListRouteService {
  onEnterCompeteList = (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    return Promise.resolve();
  };

  beforeEnterCompeteList = async (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
    const subjectTitle = toState.queryParams.subject;

    competeListUiStore.setCurrentSubjectTitle(subjectTitle);

    return Promise.resolve();
  };
}
