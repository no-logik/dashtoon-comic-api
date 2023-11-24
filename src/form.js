import { useState, useRef } from "react";
import query from "./api/strip";
import { UsePanelContext } from "./context/panelContext";
import "./styles.css";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
// import DownloadIcon from "@mui/icons-material/Download";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

// import * as domToImage from "dom-to-image";
// import * as FileSaver from "file-saver";

const Form = () => {
  const { imagesArr, updatePanels } = UsePanelContext();

  const [text, setText] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const addText = (e) => {
    setText(e.target.value);
  };

  const data = { inputs: text };

  // const downloadStrip = (e) => {
  //   e.preventDefault();
  //   var node = document.querySelector(".form-box");

  //   domToImage
  //     .toBlob(node)
  //     .then((blob) => {
  //       console.log(blob);
  //       if (window.saveAs) {
  //         window.saveAs(blob, "comic-strip.png");
  //       } else {
  //         FileSaver.saveAs(blob, "comoic-strip.png");
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const callAPI = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const imageSource = await query(data);

      if (imageSource !== "error") {
        setImgSrc(imageSource);
        setIsLoading(false);
      } else {
        console.log("error in API");
      }
    } catch (error) {
      console.log("image not loaded: ", error);
    }
  };

  const addPanel = () => {
    const lastSrc = imagesArr.length ? imagesArr[imagesArr.length - 1].label : "";
    // console.log(lastSrc);
    if (imgSrc && imgSrc !== lastSrc) {
      // console.log(text);
      updatePanels(imgSrc, imagesArr.length);
    }
  };

  // console.log(imagesArr);

  return (
    <div className="body">
      <div className="form-box">
        <Box
          className="form-textbox"
          component="form"
          sx={{
            "& > :not(style)": { m: 2, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            className="textbox"
            id="outlined-basic"
            label="Panel Description"
            variant="outlined"
            onChange={addText}
          />
        </Box>
        <Stack className="buttons" direction="column" spacing={2}>
          <Button variant="contained" endIcon={<SendIcon />} onClick={callAPI}>
            SEND
          </Button>
          <Button variant="outlined" startIcon={<AddIcon />} onClick={addPanel}>
            ADD PANEL
          </Button>
        </Stack>

        <br />
      </div>
      <div className="storyline-box">
        {isLoading ? (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        ) : (
          <img
            className="renderedImg "
            src={imgSrc}
            alt="view-your-rendered-panel-here"
            width="100%"
            height="100%"
          />
        )}
      </div>
    </div>
  );
};

export default Form;

// <Button
//             variant="contained"
//             startIcon={<DownloadIcon />}
//             onClick={downloadStrip}
//           >
//             Download Strip
//           </Button>
