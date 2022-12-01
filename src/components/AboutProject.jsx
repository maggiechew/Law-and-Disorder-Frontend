import React from "react";
import Typography from "@mui/material/Typography";

import logo from "../Law&DisOrderLogoV11_Horizontal.png";

function AboutProject() {
  return (
    <div className="frank2">
      <div className="banana">
        <img className="about-logo" src={logo} alt="Law-and-Disorder-Logo" />
      </div>
      <div className="project-detail-content">
        <div className="content">
          <Typography variant="h4" gutterbottom>
            Our Mission
            <hr />
          </Typography>
          <Typography variant="body1" sx={{ pt: 2, fontSize: 20 }}>
            At Law & Disorder, We are inspired to make meaningful change in our
            city by bringing awareness to key issues as they progress each year,
            and eventually be able to give us a more accurate idea of how we can
            tackle crime in a new innovative way with the power of community
            connection along with capturing more relevant data for those crimes
            that are less likely to be reported. Being aware allows you to be
            prepared.
          </Typography>
        </div>
        <br />
        <div className="content">
          <Typography variant="h4" gutterbottom>
            How It Works
            <hr />
          </Typography>
          <Typography variant="body1"  sx={{ pt: 2, fontSize: 20, textDecoration:'none'}}>
              
            <span></span>
            Data collected by the City of Calgary is collected monthly and
            stored on their publicly-accessible&nbsp;
            <a
              href="https://data.calgary.ca/Health-and-Safety/Community-Crime-Statistics/78gh-n26t/data"
              target="_blank"
              rel="noreferrer"
              className="krang"
            >
              website 
            </a>
            . )
          </Typography>
        </div>
      </div>
      {/* <div className='test'>
    <Typography variant='h4'>
      Hi
    </Typography>
    </div> */}
    </div>
  );
}

export default AboutProject;
