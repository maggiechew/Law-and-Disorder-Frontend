import React from "react";
import Typography from "@mui/material/Typography";

import BioCards from "./BioCards";


import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-us">
      <div className="header">
        <Typography variant="h2">About Us</Typography>
        <p>Learn more about us!</p>
      </div>
      <BioCards />
    </div>
  );
}

export default AboutUs;
