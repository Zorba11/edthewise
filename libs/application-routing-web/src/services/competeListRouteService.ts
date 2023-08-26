import { competeListUiStore } from "@edthewise/application-stores-web";
import { RouterState, RouterStore } from "mobx-state-router";

export const onEnterCompeteList = (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
  return Promise.resolve();
};

export const beforeEnterCompeteList = async (
  fromState: RouterState,
  toState: RouterState,
  routerStore: RouterStore,
) => {
  const subjectTitle = toState.queryParams.subject;

  competeListUiStore.setCurrentSubjectTitle(subjectTitle);

  return Promise.resolve();
};
