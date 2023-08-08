import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app/app";
import "./index.css";
import { AuthProvider } from "@edthewise/foundation-firebase";

/**
 * Fonts
 */
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
