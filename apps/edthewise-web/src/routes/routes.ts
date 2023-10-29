import {
  CompeteExamCardRouteService,
  CompeteExamResultRouteService,
  CompeteHomeRouteService,
  CompeteListRouteService,
  LeaderBoardRouteService,
  LearnExamCardRouteService,
  LearnExamResultRouteService,
  LearnExamStarterRouteService,
  LearnHomeRouteService,
  LearnListRouteService,
  MainHomeRouteService,
  SignInRouteService,
} from "@edthewise/application-routing-web";
import { container } from "@edthewise/common-inversify";
import { TOKENS } from "@edthewise/common-tokens-web";
import { browserHistory, createRouterState, HistoryAdapter, Route, RouterStore } from "mobx-state-router";

const notFound = createRouterState("notFound");

const mainHomeRouteService = container.get<MainHomeRouteService>(TOKENS.MainHomeRouteServiceToken);
const signInRouteService = container.get<SignInRouteService>(TOKENS.SignInRouteServiceToken);
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

const leaderBoardRouteService = container.get<LeaderBoardRouteService>(TOKENS.LeaderBoardRouteServiceToken);

export const routes: Route[] = [
  {
    name: "signUp",
    pattern: "/sign-up",
  },
  {
    name: "signIn",
    pattern: "/sign-in",
    onEnter: signInRouteService.onEnterSignIn,
    beforeEnter: signInRouteService.beforeEnterSignIn,
  },
  {
    name: "home",
    pattern: "/",
    onEnter: mainHomeRouteService.onEnterMainHome,
    beforeEnter: mainHomeRouteService.beforeEnterMainHome,
    beforeExit: mainHomeRouteService.beforeExitMainHome,
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
    pattern: "/compete-list",
    onEnter: competeListRouteService.onEnterCompeteList,
    beforeEnter: competeListRouteService.beforeEnterCompeteList,
  },
  {
    name: "notFound",
    pattern: "/not-found",
  },
  {
    name: "competeExamCard",
    pattern: "/compete-exam",
    onEnter: competeExamCardRouteService.onEnterCompeteExamCard,
    beforeEnter: competeExamCardRouteService.beforeEnterCompeteCard,
    onExit: competeExamCardRouteService.onExitCompeteExamCard,
  },
  {
    name: "learnExamCard",
    pattern: "/learn-exam/:id",
    onEnter: learnExamCardRouteService.onEnterLearnExamCard,
    beforeEnter: learnExamCardRouteService.beforeEnterLearnCard,
    onExit: learnExamCardRouteService.onExitLearnExamCard,
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
    beforeEnter: competeExamResultRouteService.beforeEnterCompeteExamResult,
  },
  {
    name: "userProfile",
    pattern: "/user-profile",
  },
  {
    name: "dashboard",
    pattern: "/dashboard",
  },
  {
    name: "leaderboardsList",
    pattern: "/leaderboardsList",
  },
  {
    name: "leaderboard",
    pattern: "/leaderBoard",
    onEnter: leaderBoardRouteService.onEnterLeaderBoard,
    beforeEnter: leaderBoardRouteService.beforeEnterLeaderBoard,
  },
  {
    name: "chatHome",
    pattern: "/chat-home",
  },
];

export function initRouter() {
  const routerStore = new RouterStore(routes, notFound);

  // Observe history changes
  const historyAdapter = new HistoryAdapter(routerStore, browserHistory);
  historyAdapter.observeRouterStateChanges();

  return routerStore;
}
