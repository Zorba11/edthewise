import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app/app";
import "./index.css";

/**
 * Fonts
 */
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
