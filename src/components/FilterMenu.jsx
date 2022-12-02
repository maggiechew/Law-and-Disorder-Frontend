import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import {
  CardActions,
  CardContent,
  Button,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
      id="filter-menu"
      sx={[{ maxWidth: 1 / 3 }, { minWidth: 350 }, { width: 4 / 12 }]}
      className={className}
    >
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
              Update your filters to see new information
              <br />
              Zoom in to see more details about specific communities.
              <br />
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
              <br />
              <br />
              <strong>Violence:</strong> These figures include all violent crime
              offences as defined by the Centre for Canadian Justice Statistics
              Universal Crime Reporting (UCR) rules. Domestic violence is
              excluded.
              <br />
              <strong>Break and Enter:</strong> Residential B&E includes both
              House and ‘Other’ structure break and enters due to the
              predominantly residential nature of this type of break in (e.g.
              detached garages, sheds). B&Es incidents include attempts.
              <br />
              <br />
              Resident counts are pulled from the latest census data, and
              therefore undergo a change when new census data is collected and
              made available (typically in the summer).
            </Typography>
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
                  );
                })}
              </FormGroup>
            </AccordionDetails>
          </Accordion>
          <hr />
          <Box sx={{ pt: 5 }}>
            <Button
              size="large"
              variant="contained"
              onClick={() => {
                handleSubmit();
              }}
            >
              UPDATE YOUR FILTERS
            </Button>
          </Box>
        </Box>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}

export default FilterMenu;
