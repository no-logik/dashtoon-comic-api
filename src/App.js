import React from "react";
import Form from "./form";
import Header from "./header";
import PanelProvider from "./context/panelContext";

import "./App.css";

const App = () => {
  return (
    <PanelProvider>
      <div className="container">
        <Header />
        <Form />
      </div>
    </PanelProvider>
  );
};

export default App;
