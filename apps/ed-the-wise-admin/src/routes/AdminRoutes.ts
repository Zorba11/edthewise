import { adminEntryFormRouteService, adminQPreviewRouteService } from "@edthewise/application-admin-routing-web";
import { HistoryAdapter, Route, RouterStore, browserHistory, createRouterState } from "mobx-state-router";

const notFound = createRouterState("notFound");

export const routes: Route[] = [
  {
    name: "home",
    pattern: "/",
    onEnter: adminEntryFormRouteService.onEnter,
    beforeEnter: adminEntryFormRouteService.beforEnter,
  },
  {
    name: "notFound",
    pattern: "/not-found",
  },
  {
    name: "questionPreview",
    pattern: "/question-preview",
    onEnter: adminQPreviewRouteService.onEnter,
    beforeEnter: adminQPreviewRouteService.beforEnter,
  },
];

export function initRouter() {
  const routerStore = new RouterStore(routes, notFound);

  // Observe history changes
  const historyAdapter = new HistoryAdapter(routerStore, browserHistory);
  historyAdapter.observeRouterStateChanges();

  return routerStore;
}
