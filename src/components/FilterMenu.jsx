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
import Slide from "@mui/material/Slide";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import './FilterMenu.css'

function FilterMenu(props) {
  const {
    crimeFilters,
    timeFilters,
    setCrimeFilters,
    setTimeFilters,
    className,
  } = props;

  const [data, setData] = useState([]);

  const potentialCrimes = [
    "Assault (Non-domestic)",
    "Break & Enter - Commercial",
    "Break & Enter - Dwelling",
    "Break & Enter - Other Premises",
    "Commercial Robbery",
    "Street Robbery",
    "Theft From A Vehicle",
    "Theft Of A Vehicle",
    "Violence Other (Non-domestic)",
  ];
  const potentialTimes = ["Fall", "Summer", "Spring", "Winter", "Any"];

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
            </Typography>
          </AccordionDetails>
        </Accordion>
        <form>
          <Card className="radio" sx={{ mt: 2 }}>
            <Typography gutterBottom variant="h6" component="div">
              Crime Options
            </Typography>
            <ul>
              {potentialCrimes.map((crime) => {
                return <li key={crime}>{crime}</li>;
              })}
            </ul>
          </Card>

          <Card className="radio" sx={{ mt: 2 }}>
            <Typography gutterBottom variant="h6" component="div">
              Season Options
            </Typography>

            {potentialTimes.map((time) => {
              return (
                <label>
                  <input type="radio" value={time} key={time} />
                  {time}
                  <br />{" "}
                </label>
              );
            })}
          </Card>

          <Card sx={{ mt: 2 }}>
            <button>Submit</button>
          </Card>
        </form>

        <FormControl>
          <FormLabel className="radio">Season Options</FormLabel>
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
