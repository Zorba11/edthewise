import React from "react";
import { RouterContext, RouterView } from "mobx-state-router";
import { initRouter } from "../routes/routes";
import { viewMap } from "@edthewise/application-pages-web";

export const App = () => {
  const routerStore = initRouter();

  return (
    <RouterContext.Provider value={routerStore}>
      <RouterView viewMap={viewMap} />
    </RouterContext.Provider>
  );
};
