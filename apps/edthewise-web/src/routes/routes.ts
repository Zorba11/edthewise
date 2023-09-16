import {
  CompeteExamCardRouteService,
  CompeteExamResultRouteService,
  CompeteHomeRouteService,
  CompeteListRouteService,
  LearnExamCardRouteService,
  LearnExamResultRouteService,
  LearnExamStarterRouteService,
  LearnHomeRouteService,
  LearnListRouteService,
  MainHomeRouteService,
} from "@edthewise/application-routing-web";
import { container } from "@edthewise/common-inversify";
import { TOKENS } from "@edthewise/common-tokens-web";
import { browserHistory, createRouterState, HistoryAdapter, Route, RouterStore } from "mobx-state-router";

const notFound = createRouterState("notFound");

const mainHomeRouteService = container.get<MainHomeRouteService>(TOKENS.MainHomeRouteServiceToken);

const competeExamCardRouteService = container.get<CompeteExamCardRouteService>(TOKENS.CompeteExamCardRouteServiceToken);
const competeExamResultRouteService = container.get<CompeteExamResultRouteService>(
  TOKENS.CompeteExamResultRouteServiceToken,
);
const competeHomeRouteService = container.get<CompeteHomeRouteService>(TOKENS.CompeteHomeRouteServiceToken);
const competeListRouteService = container.get<CompeteListRouteService>(TOKENS.CompeteListRouteServiceToken);
const learnExamCardRouteService = container.get<LearnExamCardRouteService>(TOKENS.LearnExamCardRouteServiceToken);
const learnExamResultRouteService = container.get<LearnExamResultRouteService>(TOKENS.LearnExamResultRouteServiceToken);
const learnExamStarterRouteService = container.get<LearnExamStarterRouteService>(
  TOKENS.LearnExamStarterRouteServiceToken,
);
const learnHomeRouteService = container.get<LearnHomeRouteService>(TOKENS.LearnHomeRouteServiceToken);
const learnListRouteService = container.get<LearnListRouteService>(TOKENS.LearnListRouteServiceToken);

export const routes: Route[] = [
  {
    name: "signUp",
    pattern: "/sign-up",
  },
  {
    name: "signIn",
    pattern: "/sign-in",
  },
  {
    name: "home",
    pattern: "/",
    onEnter: mainHomeRouteService.onEnterMainHome,
    beforeEnter: mainHomeRouteService.beforeEnterMainHome,
  },
  {
    name: "learnHome",
    pattern: "/learn-home",
    onEnter: learnHomeRouteService.onEnterLearnHome,
  },
  {
    name: "learnList",
    pattern: "/learn-list/:subject",
    onEnter: learnListRouteService.onEnterLearnList,
  },
  {
    name: "learnExamStarter",
    pattern: "/learn-exam-starter/:id",
    onEnter: learnExamStarterRouteService.onEnterLearnExamStarter,
  },
  {
    name: "competeHome",
    pattern: "/compete-home",
    onEnter: competeHomeRouteService.onEnterCompeteHome,
    beforeEnter: competeHomeRouteService.beforeEnterCompeteHome,
  },
  {
    name: "competeList",
    pattern: "/compete-list/?=subject",
    onEnter: competeListRouteService.onEnterCompeteList,
    beforeEnter: competeListRouteService.beforeEnterCompeteList,
  },
  {
    name: "notFound",
    pattern: "/not-found",
  },
  {
    name: "competeExamCard",
    pattern: "/compete-exam/:id",
    onEnter: competeExamCardRouteService.onEnterCompeteExamCard,
    beforeEnter: competeExamCardRouteService.beforeEnterCompeteCard,
  },
  {
    name: "learnExamCard",
    pattern: "/learn-exam/:id",
    onEnter: learnExamCardRouteService.onEnterLearnExamCard,
    beforeEnter: learnExamCardRouteService.beforeEnterLearnCard,
  },
  {
    name: "learnExamResult",
    pattern: "/learn-exam-result/:id",
    onEnter: learnExamResultRouteService.onEnterLearnExamResult,
  },
  {
    name: "competeExamResult",
    pattern: "/compete-exam-result/:id",
    onEnter: competeExamResultRouteService.onEnterCompeteExamResult,
  },
];

export function initRouter() {
  const routerStore = new RouterStore(routes, notFound);

  // Observe history changes
  const historyAdapter = new HistoryAdapter(routerStore, browserHistory);
  historyAdapter.observeRouterStateChanges();

  return routerStore;
}
