import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

import { CotextProvider } from "./contexts/ContextProvider";

ReactDOM.render(
  <CotextProvider>
    <App />
  </CotextProvider>,
  document.getElementById("root")
);
