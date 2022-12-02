import React, { useEffect, useState } from "react";
import FilterBar from "./FilterBar";
import FilterMenu from "./FilterMenu";
import Map from "./Map";
import LoadingModal from "./LoadingModal";
import "./MapPage.css";
//TODO: animations?? transitions??

function MapPage(props) {
  const { timeFilters, weights, setWeights, setTimeFilters } = props;

  // let tempTime;
  // let tempWeight; 
  useEffect(() => {
    const tempTime=JSON.parse(localStorage.getItem("times"));
    const tempWeight=JSON.parse(localStorage.getItem("weights"));

    if (tempWeight) {
      setWeights(tempWeight);
    }
    if (tempTime) {
      setTimeFilters(tempTime);
    }
  }, [setTimeFilters, setWeights]);

console.log("Hello there", timeFilters, weights)

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {(!(timeFilters.length>0) || (weights.assault===undefined)) && (
        <LoadingModal setWeights={setWeights} setTimeFilters={setTimeFilters} />
      )}
      <div className="map-page">
        <Map timeFilters={timeFilters} weights={weights} />
        <FilterMenu
          id="filter-menu"
          {...props}
          className={menuOpen ? "filtermenu open" : "filtermenu"}
        />
        <FilterBar
          className="filter-bar"
          setMenuOpen={setMenuOpen}
          menuOpen={menuOpen}
        />
        
      </div>
    </>
  );
}

export default MapPage;
