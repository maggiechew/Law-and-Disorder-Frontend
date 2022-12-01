import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Box from "@mui/material/Box";

import "./FilterMenu.css";

import Slidebar from "./Slidebar.jsx";

const potentialCrimes = {
  assault: "Assault (Non-domestic)",
  bneStore: "Break & Enter - Commercial",
  bneHome: "Break & Enter - Dwelling",
  bneOther: "Break & Enter - Other Premises",
  robStore: "Commercial Robbery",
  robStreet: "Street Robbery",
  robFromCar: "Theft From A Vehicle",
  robOfCar: "Theft Of A Vehicle",
  violence: "Violence Other (Non-domestic)",
};

const potentialTimes = ["Fall", "Summer", "Spring", "Winter"];

function FilterMenu(props) {
  const { weights, timeFilters, setWeights, setTimeFilters, className } = props;
  const [tempWeights, setTempWeights] = useState(weights);
  const [tempTime, setTempTime] = useState(timeFilters);

  useEffect(() => {
    setTempTime(timeFilters);
    setTempWeights(weights);
  }, [weights, timeFilters]);

  const handleSubmit = (event) => {
    // event.preventDefault();
    setWeights(tempWeights);
    setTimeFilters(tempTime);
    localStorage.removeItem("weights");
    localStorage.setItem("weights", JSON.stringify(tempWeights));
    localStorage.removeItem("times");
    localStorage.setItem("times", JSON.stringify(tempTime));
  };
  const handleFilters = (time) => {
    if (tempTime.includes(time.toLowerCase())) {
      setTempTime((current) =>
        current.filter(function (t) {
          return t !== time.toLowerCase();
        })
      );
    } else {
      setTempTime((curTempTime) => [...curTempTime, time.toLowerCase()]);
    }
  };

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
            <Typography>How To Use This Menu</Typography>
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
              {/* TODO: link to about us */}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={[{ p: 0 }, { m: 0 }]}
          TransitionProps={{ unmountOnExit: true }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>About the Data</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Data is provided monthly by the Calgary Police Service. This data
              is considered cumulative as late-reported incidents are often
              received well after an offence has occurred. Therefore, crime
              counts are subject to change as they are updated. Crime count is
              based on the most serious violation (MSV) per incident.
              <br /><br />
              <strong>Violence:</strong> These figures include all violent crime offences as
              defined by the Centre for Canadian Justice Statistics Universal
              Crime Reporting (UCR) rules. Domestic violence is excluded.
              <br />
              <strong>Break and Enter:</strong> Residential B&E includes both House and ‘Other’
              structure break and enters due to the predominantly residential
              nature of this type of break in (e.g. detached garages, sheds).
              B&Es incidents include attempts.
              <br /><br />
              Resident counts are pulled from the latest census data, and
              therefore undergo a change when new census data is collected and
              made available (typically in the summer).
            </Typography>
            <Button size="small">Learn More</Button>
            {/* TODO: update link https://data.calgary.ca/Health-and-Safety/Community-Crime-Statistics/78gh-n26t */}
          </AccordionDetails>
        </Accordion>
        <Box component="form">
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
              {/* <Card className="inputCard" sx={{ mt: 2 }}> */}
              <Typography gutterBottom component="div">
                Season Options
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                {potentialTimes.map((time) => {
                  return (
                    <FormControlLabel
                      key={time}
                      control={
                        <Checkbox
                          onChange={() => handleFilters(time)}
                          checked={tempTime.includes(time.toLowerCase())}
                          id={time}
                        />
                      }
                      label={time}
                    />
                    /* {<label> 
                 <input
                    type="checkbox"
                    onChange={() => handleFilters(time)}
                    id={time}
                    key={time}
                    checked={tempTime.includes(time.toLowerCase())}
                  />
                  {time}
                  <br />{" "}
                </label>
                }*/
                  );
                })}
              </FormGroup>
            </AccordionDetails>
          </Accordion>
          {/* </Card> */}
          <hr />
          <Box sx={{pt:5}}>
            <Button
            size="large"
              variant="contained"
              onClick={() => {
                handleSubmit();
              }}
            >
              UPDATE YOUR FILTERS
            </Button>
            {/* <button onClick={handleSubmit}>Submit</button> */}
          </Box>
        </Box>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}

export default FilterMenu;
