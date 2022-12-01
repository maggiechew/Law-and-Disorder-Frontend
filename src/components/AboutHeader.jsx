import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


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
