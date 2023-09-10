import {
  adminMCQEntryFormRouteService,
  adminSQEntryFormRouteService,
  adminMCQPreviewRouteService,
  adminSQPreviewRouteService,
} from "@edthewise/application-admin-routing-web";
import { HistoryAdapter, Route, RouterStore, browserHistory, createRouterState } from "mobx-state-router";

const notFound = createRouterState("notFound");

export const routes: Route[] = [
  {
    name: "home",
    pattern: "/",
    onEnter: adminMCQEntryFormRouteService.onEnter,
    beforeEnter: adminMCQEntryFormRouteService.beforEnter,
  },
  {
    name: "notFound",
    pattern: "/not-found",
  },
  {
    name: "mCQPreview",
    pattern: "/mcq-preview",
    onEnter: adminMCQPreviewRouteService.onEnter,
    beforeEnter: adminMCQPreviewRouteService.beforEnter,
  },
  {
    name: "sqEntryForm",
    pattern: "/sq-entry-form",
    onEnter: adminSQEntryFormRouteService.onEnter,
    beforeEnter: adminSQEntryFormRouteService.beforEnter,
  },
  {
    name: "sqPreview",
    pattern: "/sq-preview",
    onEnter: adminSQPreviewRouteService.onEnter,
    beforeEnter: adminSQPreviewRouteService.beforEnter,
  },
  {
    name: "sqMCQEntryForm",
    pattern: "/sq-mcq-entry-form",
  },
];

export function initRouter() {
  const routerStore = new RouterStore(routes, notFound);

  // Observe history changes
  const historyAdapter = new HistoryAdapter(routerStore, browserHistory);
  historyAdapter.observeRouterStateChanges();

  return routerStore;
}
