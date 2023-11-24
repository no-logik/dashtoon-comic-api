import { useState } from "react";
import query from "../api/strip";
import { UsePanelContext } from "../context/panelContext";
import "../static/styles.css";
import Theme from "../static/theme";

import JSZip from "jszip";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import DownloadIcon from "@mui/icons-material/Download";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import { ThemeProvider } from "@emotion/react";
import Tooltip from "@mui/material/Tooltip";

const Form = () => {
  const { imagesArr, updatePanels } = UsePanelContext();

  const [text, setText] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const addText = (e) => {
    setText(e.target.value);
  };

  const data = { inputs: text };

  const zip = new JSZip();

  const downloadStrip = async (e) => {
    e.preventDefault();

    for (var i = 0; i < imagesArr.length; i++) {
      const response = await fetch(imagesArr[i].label);
      const blob = await response.blob();
      console.log(blob);
      zip.file(imagesArr[i].label.split("/").pop(), blob);

      if (i === imagesArr.length - 1) {
        const zipData = await zip.generateAsync({
          type: "blob",
          streamFiles: true,
        });
        console.log(zipData);
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(zipData);
        link.download = "snapcial-ai.zip";
        link.click();
      }
    }
  };

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

  const addPanel = (e) => {
    e.preventDefault();
    const lastSrc = imagesArr.length ? imagesArr[imagesArr.length - 1].label : "";

    if (imgSrc && imgSrc !== lastSrc) {
      updatePanels(imgSrc, imagesArr.length);
    }
  };

  return (
    <ThemeProvider theme={Theme}>
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
              placeholder="comic-panel, boy, girl, text bubble, dialogue of boy says - i like to play piano"
              variant="outlined"
              onChange={addText}
            />
          </Box>
          <Stack className="buttons" direction="column" spacing={2}>
            <Tooltip title="Generate Image" placement="top-end">
              <Button variant="contained" endIcon={<SendIcon />} onClick={callAPI}>
                SEND
              </Button>
            </Tooltip>
            <Tooltip title="Add Panel to Strip" placement="top-end">
              <Button variant="outlined" startIcon={<AddIcon />} onClick={addPanel}>
                ADD PANEL
              </Button>
            </Tooltip>
            <Tooltip title="Download all panels in zip file" placement="top-end">
              <Button
                variant="contained"
                startIcon={<DownloadIcon />}
                onClick={downloadStrip}
              >
                {"Download Strip [zip]"}
              </Button>
            </Tooltip>
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
    </ThemeProvider>
  );
};

export default Form;
