import React, { useState } from "react";
import FilterBar from "./FilterBar";
import FilterMenu from "./FilterMenu";
import Map from "./Map";
import "./MapPage.css";
//TODO: animations?? transitions??

function MapPage(props) {
  const { timeFilters, weights, setWeights, setTimeFilters } = props;
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(weights);
  return (
    <div className="map-page">
      <Map timeFilters={timeFilters} weights={weights} />
      <FilterBar
        className="filter-bar"
        setMenuOpen={setMenuOpen}
        menuOpen={menuOpen}
      />
      {menuOpen && <FilterMenu id="filter-menu" {...props} />}
    </div>
  );
}

export default MapPage;
