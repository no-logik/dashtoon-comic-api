import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import PanelProvider from "./context/panelContext";
// import Masonry from "masonry-layout";

// window.onload = () => {
//   const grid = document.querySelector(".comic-container");

//   const masonry = new Masonry(grid, {
//     itemSelector: ".panel",
//     gutter: 10,
//   });
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PanelProvider>
      <App />
    </PanelProvider>
  </React.StrictMode>
);
