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

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );

// function LoadingCard() {
//   return (

//   );
// }

// // export default LoadingCard;

// // function LoadingCard() {

// //   );
// // }

export default function LoadingModal() {
  const [open, setOpen] = React.useState(true);
  // const handleClose = () => {
  //   setOpen(false);
  // };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Backdrop
      sx={{
        backdropFilter: "blur(20px)",
        zIndex: (theme) => theme.zIndex.drawer + 1,
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
              defaultValue="female"
              name="radio-buttons-group"
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
                value="Homebuyer"
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
          <Button size="small" onClick={handleToggle}>
            Submit
          </Button>
        </CardActions>
      </Card>
      {/* <Button onClick={handleToggle}>Hide backdrop</Button> */}
    </Backdrop>
  );
}
