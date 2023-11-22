import { useState } from "react";
import query from "./api/strip";
import Storyline from "./storyline";
import { UsePanelContext } from "./context/panelContext";
import "./styles.css";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

const Form = () => {
  const { imagesArr, updatePanels } = UsePanelContext();

  const [text, setText] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const addText = (e) => {
    setText(e.target.value);
  };

  const data = { inputs: text };

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

  //////////////////ADD FEATURE OF SELECTING WHAT KEYWORDS TO SEND//////////////////////////////

  // const list = [
  //   { key: 0, label: "Angular" },
  //   { key: 1, label: "jQuery" },
  //   { key: 2, label: "Polymer" },
  //   { key: 3, label: "React" },
  //   { key: 4, label: "Vue.js" },
  // ];

  const addPanel = () => {
    const lastSrc = imagesArr.length ? imagesArr[imagesArr.length - 1].label : "";
    // console.log(lastSrc);
    if (imgSrc && imgSrc !== lastSrc) {
      // console.log(text);
      updatePanels(imgSrc, imagesArr.length);
    }
  };

  console.log(imagesArr);

  return (
    <div className="body">
      <div className="form-box">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 4, width: "80%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Panel Description"
            variant="outlined"
            onChange={addText}
          />
        </Box>
        <Stack className="buttons" direction="row" spacing={2}>
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
            alt="view-your-rendered-image-here"
            width="100%"
            height="100%"
          />
        )}
      </div>
    </div>
  );
};

export default Form;

// <form>
//         <input type="text" onChange={addText} />
//         <br />
//         <button type="button" onClick={updateList}>
//           Add
//         </button>
//         <button type="submit" onClick={callAPI}>
//           Submit
//         </button>
//       </form>
