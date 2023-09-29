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
import { Context } from "@redtea/react-inversify";
import { container } from "@edthewise/common-inversify";

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={container}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);

// disable text selection
document.addEventListener("selectstart", (event) => {
  event.preventDefault();
});
