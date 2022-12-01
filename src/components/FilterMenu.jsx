import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "./FilterMenu.css";

import Slidebar from "./Slidebar.jsx";

function FilterMenu(props) {
  const { weights, timeFilters, setWeights, setTimeFilters, className } = props;
  const [tempWeights, setTempWeights] = useState(weights);
  const [tempTime, setTempTime] = useState(timeFilters);

  const handleSubmit = (event) => {
    event.preventDefault();
    setWeights(tempWeights);
    setTimeFilters(tempTime);
    localStorage.removeItem("weights");
    localStorage.setItem("weights", JSON.stringify(tempWeights));
  };
  const handleFilters = (event) => {
    setTempTime([]);
    if (event) {
      setTempTime((tempTime) => [...tempTime, "fall"]);
    }
    if (event) {
      setTempTime((tempTime) => [...tempTime, "winter"]);
    }
    if (event) {
      setTempTime((tempTime) => [...tempTime, "spring"]);
    }
    if (event) {
      setTempTime((tempTime) => [...tempTime, "summer"]);
    }
  };

  const [potentialCrimes, setPotentialCrimes] = useState({
    assault: "Assault (Non-domestic)",
    bneStore: "Break & Enter - Commercial",
    bneHome: "Break & Enter - Dwelling",
    bneOther: "Break & Enter - Other Premises",
    robStore: "Commercial Robbery",
    robStreet: "Street Robbery",
    robFromCar: "Theft From A Vehicle",
    robOfCar: "Theft Of A Vehicle",
    violence: "Violence Other (Non-domestic)",
  });

  const [potentialTimes, setPotentialTimes] = useState([
    "Fall",
    "Summer",
    "Spring",
    "Winter",
  ]);

  return (
    <Card
      // className='the-card'
      id="filter-menu"
      sx={[{ maxWidth: 1 / 3 }, { minWidth: 350 }, { width: 4 / 12 }]}
      className={className}
    >
      {/* <Slide direction="up" in={menuOpen} mountOnEnter unmountOnExit></Slide> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Map Menu
        </Typography>
        <Accordion
          sx={[{ p: 0 }, { m: 0 }]}
          TransitionProps={{ unmountOnExit: true }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography >How To Use This Menu</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Please choose from the filters below to select which crimes you
              would like to see reflected in this map.
              <br />
              Choosing seasons will allow you to look for crime at specific
              times of the year.
              <br />
              Click submit to see your changes
              <br />
              <Button size="small">Learn More</Button>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <form>
          <Accordion
            sx={[{ p: 0 }, { m: 0 }]}
            TransitionProps={{ unmountOnExit: true }}
            defaultExpanded={true}
            className="hello-there"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography gutterBottom component="div">
                Crime Options
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                {Object.keys(potentialCrimes).map((crime) => {
                  return (
                    <li key={potentialCrimes[crime]}>
                      <Slidebar
                        tempWeights={tempWeights}
                        setTempWeights={setTempWeights}
                        crime={crime}
                        potentialCrimes={potentialCrimes}
                      />
                    </li>
                  );
                })}
              </ul>
            </AccordionDetails>
          </Accordion>

          <Card className="inputCard" sx={{ mt: 2 }}>
            <Typography gutterBottom component="div">
              Season Options
            </Typography>

            {potentialTimes.map((time) => {
              return (
                <label>
                  <input
                    type="radio"
                    // onChange={handleFilters}
                    value={time}
                    key={time}
                  />
                  {time}
                  <br />{" "}
                </label>
              );
            })}
          </Card>

          <Card sx={{ mt: 2 }}>
            <button onClick={handleSubmit}>Submit</button>
          </Card>
        </form>
        <FormControl>
          <FormLabel className="inputCard">Season Options</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

        {/* <Typography variant="body2" color="red">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
          
        </Typography> */}
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}

export default FilterMenu;
