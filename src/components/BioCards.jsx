import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import emmanuelHS from "../Images/emmanuel-hs.jpeg";
import maggieHS from "../Images/MAGGIE_HS_IU-1.jpeg";
import jaredHS from "../Images/jared-hs.jpeg";
import jennHS from "../Images/jenn-hs.jpeg";

function BioCards() {
  return (
    <div className="frank">
      <div className="emmanuel">
        <Card
          className="bios"
          variant="outlined"
          sx={{ height: 500, minWidth: 345, align: "center" }}
          style={{}}
        >
          <CardMedia
            className="photo"
            component="img"
            height="260"
            image={emmanuelHS}
            alt="Photo of Emmanuel"
          />
          <CardContent>
            <div className="titles">
              <Typography variant="h5" component="div">
                Emmanuel
              </Typography>
              <Typography variant="overline" display="block">
                Mr. Manager
              </Typography>
            </div>
            <Typography variant="body2" color="text.secondary">
              Notorious for his status as Monopoly Cheaters Champion 2022.
              <br /> Wants to prevent people from stealing from other people's
              homes… <i>Jared</i>..
            </Typography>
          </CardContent>
          <CardActions className="get-in-touch">
            <a
              href="mailto:a.emman+crime&disorder@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Button size="small">
                <EmailIcon style={{ color: "blue" }} />
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/emmanuelanokye/"
              target="_blank"
              rel="noreferrer"
            >
              <Button size="small">
                <LinkedInIcon style={{ color: "blue" }} />
              </Button>
            </a>
          </CardActions>
        </Card>
      </div>
      <div className="maggie">
        <Card
          className="bios"
          variant="outlined"
          sx={{ height: 500, minWidth: 345, align: "center" }}
          style={{}}
        >
          <CardMedia
            className="photo"
            component="img"
            height="260"
            image={maggieHS}
            alt="Photo of Maggie"
          />
          <CardContent>
            <div className="titles">
              <Typography variant="h5" component="div">
                Maggie
              </Typography>
              <Typography variant="overline" display="block" gutterbottom>
                Disruptor-in-Chief
              </Typography>
            </div>
            <Typography variant="body2" color="text.secondary">
              Joey, do you like movies about gladiators?
            </Typography>
          </CardContent>
          <CardActions className="get-in-touch">
            <a
              href="mailto:maggie.chew.89+crime&disorder@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Button size="small">
                <EmailIcon style={{ color: "blue" }} />
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/maggie-chew-00226273/"
              target="_blank"
              rel="noreferrer"
            >
              <Button size="small">
                <LinkedInIcon style={{ color: "blue" }} />
              </Button>
            </a>
          </CardActions>
        </Card>
      </div>
      <div className="jenn">
        <Card
          className="bios"
          variant="outlined"
          sx={{ height: 500, minWidth: 345, align: "center" }}
          style={{}}
        >
          <CardMedia
            component="img"
            height="260"
            image={jennHS}
            alt="Photo of Jenn"
          />
          <CardContent>
            <div className="titles">
              <Typography variant="h5" component="div">
                Jenn
              </Typography>
              <Typography variant="overline" display="block" gutterbottom>
                Double Trouble Solution Designer
              </Typography>
            </div>
            <Typography variant="body2" color="text.secondary">
              Fighting evil by moonlight, Winning Love by Daylight, Never
              running from a real fight, She's the one named Sailor June!
            </Typography>
          </CardContent>
          <CardActions className="get-in-touch">
            <a
              href="mailto:007JenniferReid+crime&disorder@gmail.com
"
              target="_blank"
              rel="noreferrer"
            >
              <Button size="small">
                <EmailIcon style={{ color: "blue" }} />
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/jennifer-reid-b07763204/"
              target="_blank"
              rel="noreferrer"
            >
              <Button size="small">
                <LinkedInIcon style={{ color: "blue" }} />
              </Button>
            </a>
          </CardActions>
        </Card>
      </div>
      <div className="jared">
        <Card
          className="bios"
          variant="outlined"
          sx={{ height: 500, minWidth: 345, align: "center" }}
          style={{}}
        >
          <CardMedia
            component="img"
            height="260"
            image={jaredHS}
            alt="Photo of Jared"
          />
          <CardContent>
            <div className="titles">
              <Typography variant="h5" component="div">
                Jared
              </Typography>
              <Typography variant="overline" display="block" gutterbottom>
                "I'm Jared"
              </Typography>
            </div>
            <Typography variant="body2" color="text.secondary">
              Jared is passionate about crime, and wanted a way to be sure his
              activity could be properly tracked. Sadly, his crime-enthusiast
              meetup group has had few takers.
            </Typography>
          </CardContent>
          <CardActions className="get-in-touch">
            <a
              href="mailto:jaredbhuddleston+crime&disorder@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Button size="small">
                <EmailIcon style={{ color: "blue" }} />
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/jared-huddleston-715101219/"
              target="_blank"
              rel="noreferrer"
            >
              <Button size="small">
                <LinkedInIcon style={{ color: "blue" }} />
              </Button>
            </a>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default BioCards;
