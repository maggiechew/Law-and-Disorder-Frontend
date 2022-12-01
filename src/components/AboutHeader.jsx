import React from "react";
import Typography from "@mui/material/Typography";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";
import Button from "@mui/material/Button";
// import BioCards from "./BioCards";

// import "./AboutUs.css";
// import AboutProject from "./AboutProject";

function AboutHeader(props) {
  const {setAboutProject, aboutProject} = props;
  return (
    <div className="header">
      <div className="page-title">
        <Typography variant="h3" gutterbottom>About This Project</Typography>
      </div>
      <br />
      <div className="aboutUs-nav">
      <Button id= {'headerButton' + (aboutProject ? 'selected' : '')} variant="outlined" onClick={() => {
          setAboutProject(true)
        }}>     
           <Typography gutterBottom>
              ABOUT OUR PROJECT
            </Typography>
        </Button>
        <Button id= {'headerButton' + (aboutProject ? '' : 'selected')} variant="outlined" onClick={() => {
          setAboutProject(false)
        }}>
          <Typography gutterBottom>
              ABOUT US
            </Typography>
        </Button>
      </div>
      
    </div>
  );
}

export default AboutHeader;
