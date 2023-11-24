import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InfoIcon from "@mui/icons-material/Info";

import "../static/styles.css";
import logo from "../static/dashtoon_logo.png";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="nav">
      <img
        className="logo-icon"
        src={logo}
        alt="Dashtoon"
        width="100px"
        height="100px"
        onClick={() => {
          window.location.reload();
        }}
      />
      <div className="info">
        <Button aria-describedby={id} variant="contained" onClick={handleClick}>
          <InfoIcon />
        </Button>
        <Popover
          className="info-popover"
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography sx={{ p: 2 }}>
            Welocme!! Create Comic Panels with this tool. 1. Describe the panel as
            detailed as possible. 2. Press "Send" 3. Give it some time! AI is still a
            toddler after all😗. 4. If you like it, Click on "Add Panel" to add the panel
            to the strip{" "}
          </Typography>
        </Popover>
      </div>
    </div>
  );
};

export default Header;
