import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
// import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import "./FilterBar.css";

function FilterBar(props) {
  const { menuOpen, setMenuOpen } = props;
  const [value, setValue] = useState(0);
  // const [menuClosed, setMenuClosed] = useState(false);

  return (
    <Box sx={{ boxShadow: 1 }} id="filterbar" variant="outlined" onClick={() => setMenuOpen((curr) => !curr)}>
     <BottomNavigation sx={[{width: 350}, {pb: 1}]} position="static"
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >

{menuOpen &&
  <BottomNavigationAction label="Hide Map Menu" icon={<KeyboardArrowDownIcon />} />
}
{!menuOpen &&
        <BottomNavigationAction label="Show Map Menu" icon={<KeyboardArrowUpIcon />} /> }
        
      </BottomNavigation>
      {/* <AppBar id="appbar" position="static">
        {menuOpen &&
        <> */}
          {/* <Typography color="black">
          Lizard
        </Typography> */}
         {/* <KeyboardArrowDownIcon class="arrow-button" />
         </>}
        {!menuOpen && <KeyboardArrowUpIcon class="arrow-button" />}
      </AppBar> */}
    </Box>
  );
}

export default FilterBar;
