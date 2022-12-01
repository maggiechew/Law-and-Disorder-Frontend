import React, {useState} from "react";
import Typography from "@mui/material/Typography";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";
import BioCards from "./BioCards";

import "./AboutUs.css";
import AboutProject from "./AboutProject";
import AboutHeader from "./AboutHeader";


function AboutUs() {
  const [aboutProject, setAboutProject] = useState(false)
  return (
    <div className="about-us">
    <AboutHeader setAboutProject={setAboutProject} aboutProject={aboutProject}/>
     {aboutProject &&
     <AboutProject />
     }
     {!aboutProject &&
     <BioCards />
     }
     
      {/* <BioCards /> */}
    </div>
  );
}

export default AboutUs;
