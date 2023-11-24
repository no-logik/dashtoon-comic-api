import "../static/styles.css";
import logo from "../static/dashtoon_logo.png";

const Header = () => {
  return (
    <div className="nav">
      <img src={logo} alt="Dashtoon" width="100px" height="100px" />
    </div>
  );
};

export default Header;
