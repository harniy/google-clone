import React, { useCallback } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../src/global.css";
import { HashRouter } from "react-router-dom";

import { GoogleContextProvider } from './api/GoogleApi'
ReactDOM.render(
  <React.StrictMode>
    <GoogleContextProvider>
      <HashRouter>
        <App />
      </HashRouter>
      </GoogleContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
