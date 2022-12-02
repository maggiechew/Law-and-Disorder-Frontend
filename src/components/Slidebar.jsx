import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

export default function InputSlider(props) {
  const { tempWeights, setTempWeights, crime, potentialCrimes } = props;
  const [value, setValue] = React.useState(tempWeights[crime]);

  React.useEffect(() => {
    setValue(tempWeights[crime]);
  }, [tempWeights, crime]);

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
      default:
        break;
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
        </Grid>
      </Grid>
    </Box>
  );
}
