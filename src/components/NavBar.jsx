//TODO: https://mui.com/material-ui/react-drawer/#main-content is this better?

import React, { useState } from "react";
import GlobalStyles from "@mui/material/GlobalStyles";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Hamburgler from "./Hamburgler";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState();

  return (
    <nav id="navbar">
      {menuOpen && (
        <ul className="nav-links">
          <li key={'crime-map'}>
            <NavLink
              to="/"
              style={{textDecoration: 'none'}}
              className={(isActive) =>
                "nav-link" + (!isActive ? "unselected" : "")
                //TODO: Active Styling Option
              }
              activeStyle={{ fontWeight: "bold" }}
            >
              <Typography color="white" gutterBottom>
                CRIME MAP
              </Typography>
            </NavLink>
          </li>
          <li key={'about-us'}>
          <NavLink
              to="/about-us"
              style={{textDecoration: 'none'}}
              className={(isActive) =>
                "nav-link" + (!isActive ? "unselected" : "")
              }
              activeStyle={{ fontWeight: "bold" }}
            >
              <Typography color="white" gutterBottom>
                ABOUT US
              </Typography>
            </NavLink>
          </li>
          <li key={'additional-resources'}>
          <NavLink
              to="/additional-resources"
              style={{textDecoration: 'none'}}
              className={(isActive) =>
                "nav-link" + (!isActive ? "unselected" : "")
              }
              activeStyle={{ fontWeight: "bold" }}
            >
              <Typography color="white" gutterBottom>
                ADDITIONAL RESOURCES
              </Typography>
            </NavLink>
          </li>
          {/* <li>
        <a>
        <Typography sx={{ fontSize: 14 }} color='white' gutterBottom>About Us</Typography></a>        </li> */}
        </ul>
      )}

      <Tooltip title={menuOpen ? "Hide Menu" : "Show Menu"}>
        <IconButton sx={{ m: 0, mt: 1, p: 0 }}>
          <Hamburgler setMenuOpen={setMenuOpen} />
        </IconButton>
      </Tooltip>
    </nav>
  );
}

export default NavBar;
