import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "./App.css";

function routerBasename(): string | undefined {
  const base = import.meta.env.BASE_URL;
  if (base === "/") return undefined;
  return base.endsWith("/") ? base.slice(0, -1) : base;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={routerBasename()}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
