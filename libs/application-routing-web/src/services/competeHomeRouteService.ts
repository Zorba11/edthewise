import { RouterState, RouterStore } from "mobx-state-router";
import { examStore } from "@edthewise/application-stores-web";
import { examsService } from "@edthewise/foundation-appwrite";

export const onEnterCompeteHome = (fromState: RouterState, toState: RouterState, routerStore: RouterStore) => {
  return Promise.resolve();
};

export const beforeEnterCompeteHome = async (
  fromState: RouterState,
  toState: RouterState,
  routerStore: RouterStore,
) => {
  const subjectTitles = await examsService.getSubjectTitles();

  if (subjectTitles) {
    examStore.setSubjectTitles(subjectTitles);
  }

  return Promise.resolve();
};
