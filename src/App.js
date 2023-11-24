import React from "react";
import Form from "./form";
import Header from "./header";
import Comic from "./comic";

import { UsePanelContext } from "./context/panelContext";

import "./App.css";

const App = () => {
  const { imagesArr } = UsePanelContext();

  return (
    <div className="container">
      <Header />
      <Form />
      <Comic />
    </div>
  );
};

export default App;
