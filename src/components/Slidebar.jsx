import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";

const Input = styled(MuiInput)`
  width: 42px;
`;

export default function InputSlider(props) {
  const { tempWeights, setTempWeights, crime, potentialCrimes } = props;
  const [value, setValue] = React.useState(tempWeights[crime]);
  // console.log(weights);
  // console.log(crime);
  // console.log(potentialCrimes);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    switch (crime) {
      case "assault":
        setTempWeights({ ...tempWeights, assault: newValue });
        break;
      case "bneStore":
        setTempWeights({ ...tempWeights, bneStore: newValue });
        break;
      case "bneHome":
        setTempWeights({ ...tempWeights, bneHome: newValue });
        break;
      case "bneOther":
        setTempWeights({ ...tempWeights, bneOther: newValue });
        break;
      case "robFromCar":
        setTempWeights({ ...tempWeights, robFromCar: newValue });
        break;
      case "robOfCar":
        setTempWeights({ ...tempWeights, robOfCar: newValue });
        break;
      case "robStreet":
        setTempWeights({ ...tempWeights, robStreet: newValue });
        break;
      case "robStore":
        setTempWeights({ ...tempWeights, robStore: newValue });
        break;
      case "violence":
        setTempWeights({ ...tempWeights, violence: newValue });
        break;
    }
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
    switch (crime) {
      case "assault":
        setTempWeights({ ...tempWeights, assault: Number(event.target.value) });
        break;
      case "bneStore":
        setTempWeights({
          ...tempWeights,
          bneStore: Number(event.target.value),
        });
        break;
      case "bneHome":
        setTempWeights({ ...tempWeights, bneHome: Number(event.target.value) });
        break;
      case "bneOther":
        setTempWeights({
          ...tempWeights,
          bneOther: Number(event.target.value),
        });
        break;
      case "robFromCar":
        setTempWeights({
          ...tempWeights,
          robFromCar: Number(event.target.value),
        });
        break;
      case "robOfCar":
        setTempWeights({
          ...tempWeights,
          robOfCar: Number(event.target.value),
        });
        break;
      case "robStreet":
        setTempWeights({
          ...tempWeights,
          robStreet: Number(event.target.value),
        });
        break;
      case "robStore":
        setTempWeights({
          ...tempWeights,
          robStore: Number(event.target.value),
        });
        break;
      case "violence":
        setTempWeights({
          ...tempWeights,
          violence: Number(event.target.value),
        });
        break;
    }
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 10) {
      setValue(10);
    }
  };

  return (
    <Box sx={{ width: 250 }}>
      <Typography id="input-slider" gutterBottom>
        {potentialCrimes[crime]}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === "number" ? value : 0}
            onChange={handleSliderChange}
            aria-label="Weighted Score"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
          />
        </Grid>
        <Grid item>
          {tempWeights[crime]}
          {/* <Input
            value={value}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 0,
              max: 10,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          /> */}
        </Grid>
      </Grid>
    </Box>
  );
}
