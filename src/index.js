import React from "react";
import ReactDOM from "react-dom/client";
import "./static/index.css";
import App from "./App";
import PanelProvider from "./context/panelContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PanelProvider>
      <App />
    </PanelProvider>
  </React.StrictMode>
);
