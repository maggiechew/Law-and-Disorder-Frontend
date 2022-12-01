import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
// import LoadingCard from './LoadingCard';

// import React from "react";
// import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import logo from "../Law&DisOrderLogoV11_Horizontal.png";

export default function LoadingModal(props) {
  const { setTimeFilters, setWeights } = props;
  const [open, setOpen] = React.useState(true);
  const [value, setValue] = React.useState("tourist");
  const touristWeight = {
    assault: 7,
    bneStore: 0,
    bneHome: 9,
    bneOther: 0,
    robStreet: 10,
    robStore: 0,
    violence: 10,
    robOfCar: 5,
    robFromCar: 5,
  };
  const touristTime = ["summer", "fall"];
  const homebuyerWeight = {
    assault: 7,
    bneStore: 3,
    bneHome: 10,
    bneOther: 7,
    robStreet: 3,
    robStore: 2,
    violence: 5,
    robOfCar: 8,
    robFromCar: 8,
  };
  const homebuyerTime = ["fall", "summer", "spring", "winter"];
  const communityMemberWeight = {
    assault: 6,
    bneStore: 7,
    bneHome: 8,
    bneOther: 6,
    robStreet: 8,
    robStore: 8,
    violence: 7,
    robOfCar: 8,
    robFromCar: 8,
  };
  const communityMemberTime = ["fall", "summer", "spring", "winter"];
  // const blurLoading = props.blurLoading;
  // const handleClose = () => {
  //   setOpen(false);
  // };
  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(!open);
    console.log(value);
    switch (value) {
      case "tourist":
        setWeights(touristWeight);
        setTimeFilters(touristTime);
        localStorage.setItem("weights", JSON.stringify(touristWeight));
        localStorage.setItem("times", JSON.stringify(touristTime));
        break;
      case "homebuyer":
        setWeights(homebuyerWeight);
        setTimeFilters(homebuyerTime);
        localStorage.setItem("weights", JSON.stringify(homebuyerWeight));
        localStorage.setItem("times", JSON.stringify(homebuyerTime));
        break;
      case "communityMember":
        setWeights(communityMemberWeight);
        setTimeFilters(communityMemberTime);
        localStorage.setItem("weights", JSON.stringify(communityMemberWeight));
        localStorage.setItem("times", JSON.stringify(communityMemberTime));
        break;
      default:
        break;
    }
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Backdrop
      sx={{
        backdropFilter: "blur(20px)",
        // zIndex: (theme) => theme.zIndex.drawer + 1,
        zIndex: 100,
      }}
      // sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      // onClick={handleClose}
    >
      {/* <CircularProgress color="inherit" /> */}
      <Card sx={{ minWidth: 275 }} variant="outlined">
        <CardContent>
          <img src={logo} alt="Law & DisOrder Logo V11" />
          <br />
          <hr />

          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              Please choose your user type to continue:
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="tourist"
              name="profile_select"
              id="profile_select"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="communityMember"
                control={<Radio />}
                label="Community Member"
              />
              <FormControlLabel
                value="tourist"
                control={<Radio />}
                label="Tourist"
              />
              <FormControlLabel
                value="homebuyer"
                control={<Radio />}
                label="Homebuyer"
              />
            </RadioGroup>
          </FormControl>

          {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography> */}
        </CardContent>
        <CardActions>
          <Button type="submit" size="small" onClick={handleSubmit}>
            Submit
          </Button>
        </CardActions>
      </Card>
      {/* <Button onClick={handleToggle}>Hide backdrop</Button> */}
    </Backdrop>
  );
}
