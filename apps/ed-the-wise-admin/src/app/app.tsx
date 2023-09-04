// eslint-disable-next-line @typescript-eslint/no-unused-vars

import "reflect-metadata";
import { AdminLoginService } from "@edthewise/foundation-communication-admin";
import { RouterContext, RouterView } from "mobx-state-router";
import { useEffect } from "react";
import { initRouter } from "../routes/AdminRoutes";
import { adminViewMap } from "@edthewise/application-admin-routing-web";
import { container } from "@edthewise/common-admin-inversify";
import { ADMIN_TOKENS } from "@edthewise/common-admin-token";

export function App() {
  const adminLoginService = container.get<AdminLoginService>(ADMIN_TOKENS.AdminLoginServiceToken);
  const routerStore = initRouter();

  useEffect(() => {
    adminLoginService.login();
  });

  return (
    <RouterContext.Provider value={routerStore}>
      <RouterView viewMap={adminViewMap} />
    </RouterContext.Provider>
  );
}

export default App;
