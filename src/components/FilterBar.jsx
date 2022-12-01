import React, { useState } from "react";
import Box from "@mui/material/Box";
// import Box from '@mui/material/Box';
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import "./FilterBar.css";

function FilterBar(props) {
  const { menuOpen, setMenuOpen } = props;
  const [value, setValue] = useState(0);
  // const [menuClosed, setMenuClosed] = useState(false);

  return (
    <Box
      sx={{ boxShadow: 1 }}
      id="filterbar"
      variant="outlined"
      onClick={() => setMenuOpen((curr) => !curr)}
    >
      <BottomNavigation
        sx={[{ width: 350 }, { pb: 1 }]}
        position="static"
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {menuOpen && (
          <BottomNavigationAction
            label="Hide Map Menu"
            icon={<VisibilityOffIcon />}
          />
        )}
        {!menuOpen && (
          <BottomNavigationAction
            label="Show Map Menu"
            icon={<RemoveRedEyeIcon />}
          />
        )}
      </BottomNavigation>
    </Box>
  );
}

export default FilterBar;
