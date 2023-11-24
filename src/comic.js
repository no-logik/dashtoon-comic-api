import "./styles.css";

import { UsePanelContext } from "./context/panelContext";

const Panel = ({ source }) => {
  return (
    <div className="panel-container">
      <img src={source} alt="panel" width="100%" height="100%" />
    </div>
  );
};

const Comic = () => {
  const { imagesArr } = UsePanelContext();

  return (
    <div id="comic-strip" className="comic-container">
      {imagesArr.length ? (
        imagesArr.map((img) => {
          return <Panel key={img.id} source={img.label} />;
        })
      ) : (
        <h2>{"View you comic strip here"}</h2>
      )}
    </div>
  );
};

export default Comic;
