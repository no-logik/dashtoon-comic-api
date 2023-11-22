import { useState } from "react";
import "./styles.css";

import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const Storyline = ({ dataset }) => {
  const [chipData, setChipData] = useState(dataset);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  return (
    <div>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          flexWrap: "wrap",
          listStyle: "none",
          p: 0.5,
          m: 0,
        }}
        component="ul"
      >
        {chipData.map((data) => {
          return (
            <>
              <ListItem key={data.key}>
                <Chip
                  label={data.label}
                  onClick={() => {
                    console.log(data.label); //add here the feature to edit that label
                  }}
                  onDelete={handleDelete(data)}
                />
              </ListItem>
              <br />
            </>
          );
        })}
      </Paper>
    </div>
  );
};

export default Storyline;
