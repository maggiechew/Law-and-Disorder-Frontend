import React, { useState } from "react";
import FilterBar from "./FilterBar";
import FilterMenu from "./FilterMenu";
import Map from "./Map";
import LoadingModal from "./LoadingModal";
import "./MapPage.css";
//TODO: animations?? transitions??

function MapPage(props) {
  const { timeFilters, weights, setWeights } = props;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <LoadingModal setWeights={setWeights} />

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
          className={menuOpen ? "filtermenu open" : "filtermenu" }
        />
        ;
      </div>
    </>
  );
}

export default MapPage;
