import React from "react";
import Form from "./components/form";
import Header from "./components/header";
import Comic from "./components/comic";

import "./static/App.css";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Form />
      <Comic />
    </div>
  );
};

export default App;
