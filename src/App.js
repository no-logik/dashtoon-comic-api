import React, { useState } from "react";

const App = () => {
  const [text, setText] = useState("");

  const addText = (e) => {
    setText(e.target.value);
  };

  return (
    <form>
      <input type="text" onChange={addText} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
