import React, { useState, useContext } from "react";

//create context to store panel image sources
const PanelContext = React.createContext();

export const UsePanelContext = () => {
  return useContext(PanelContext);
};

const PanelProvider = ({ children }) => {
  const [imagesArr, setImagesArr] = useState([]);

  const updatePanels = (src, idx) => {
    const entryTemp = { key: idx, label: src };
    setImagesArr([...imagesArr, entryTemp]);
  };

  return (
    <>
      <PanelContext.Provider value={{ imagesArr, updatePanels }}>
        {children}
      </PanelContext.Provider>
    </>
  );
};

export default PanelProvider;
