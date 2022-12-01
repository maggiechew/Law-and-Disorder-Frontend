import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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
          </Typography>{" "}
          <br />
          <Typography variant="body1" sx={{ pt: 2, fontSize: 16 }}>
            At Law & Disorder, we are inspired to make meaningful change in our
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
          <br />
          <Typography
            variant="body1"
            sx={{ pt: 2, fontSize: 16, textDecoration: "none" }}
          >
            Data collected by the City of Calgary is collected monthly and
            stored on their publicly-accessible&nbsp;
            <a
              href="https://data.calgary.ca/Health-and-Safety/Community-Crime-Statistics/78gh-n26t/data"
              target="_blank"
              rel="noreferrer"
              // className="krang"
            >
              website
            </a>
            .<br />
            We are able to access this data, thanks to&nbsp;
            <a
              href="https://dev.socrata.com/foundry/data.calgary.ca/78gh-n26t"
              target="_blank"
              rel="noreferrer"
              // className="krang"
            >
              Socrata Open Data
            </a>
            , which allows us to fetch from their SODA API using "SoQL queries",
            in which our requests can use SQL-like queries to fetch the
            information we need.
          </Typography>
          <br />
          <Box sx={{ textAlign: "center", pt: 0, pb: 2, boxShadow: 4 }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: 16,
                fontWeight: "bold",
                textDecoration: "none",
                pb: 1,
                pt:1
              }}
            >
              Example Query:
            </Typography>
            <Typography variant="body2" sx={{ fontSize: 16 }}>
              https://data.calgary.ca/resource/78gh-n26t.json?$where=crime_count&nbsp;
              {">"} 1
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{ pt: 2, fontSize: 16, textDecoration: "none" }}
          >
            We, in turn, interpret this data in order to help users gain
            meaningful insights through what we hope is a highly-accessible user
            interface.
            <br /> We have used MapBox to provide highly visual feedback about
            the density of crime in all of Calgary's neighborhoods; the user
            input of Crime Filters will allow them to see "hot spots" in their
            communities, where all, some, or even only one crime type is more
            prevalent. Users can even limit their queries to specific seasons;
            this might be particularly useful to tourists visiting the city, or
            new arrivals moving here.<br />By allowing users to increase the
            weighting of certain crimes, we believe that they will be able to make their own decisions about what types of crime matter to them, and then make better-informed decisions about their and their loved ones' safety.
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
