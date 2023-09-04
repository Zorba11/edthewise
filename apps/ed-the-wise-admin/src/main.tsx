import * as ReactDOM from "react-dom/client";

import App from "./app/app";
import React from "react";
import { Context } from "@redtea/react-inversify";
import "reflect-metadata";
import { container } from "@edthewise/common-admin-inversify";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <Context.Provider value={container}>
        <App />
      </Context.Provider>
    </React.StrictMode>,
  );
}
