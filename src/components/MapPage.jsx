import React, { useState } from "react";
import FilterBar from "./FilterBar";
import FilterMenu from "./FilterMenu";
import Map from "./Map";
import LoadingModal from "./LoadingModal";
import "./MapPage.css";
//TODO: animations?? transitions??

function MapPage(props) {
  const { timeFilters, weights, setWeights, setTimeFilters } = props;
const tempTime = localStorage.getItem('times');
const tempWeight = localStorage.getItem('weights');
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
    {!tempTime | !tempWeight &&
      <LoadingModal setWeights={setWeights} setTimeFilters={setTimeFilters} />
}
      <div className="map-page">
        <Map timeFilters={timeFilters} weights={weights} />
        <FilterBar
          className="filter-bar"
          setMenuOpen={setMenuOpen}
          menuOpen={menuOpen}
        />
        <FilterMenu
          id="filter-menu"
          {...props}
          className={menuOpen ? "filtermenu open" : "filtermenu"}
        />
        ;
      </div>
    </>
  );
}

export default MapPage;
