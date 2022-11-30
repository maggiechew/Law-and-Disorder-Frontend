// import logo from "./Law&DisOrderLogoV11_Horizontal.png";
import "./App.css";

import NavBar from "./components/NavBar";
import Hamburgler from "./components/Hamburgler";
import { useState } from "react";
import LoadingModal from "./components/LoadingModal";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MapPage from "./components/MapPage";
import AboutUs from "./components/AboutUs";
import AdditionalResources from "./components/AdditionalResources";

function App() {
  // const [blurLoading, setBlurLoading] = useState(true);
  const [weights, setWeights] = useState({
    assault: 0,
    bneStore: 0,
    bneHome: 1,
    bneOther: 1,
    robStreet: 1,
    robStore: 1,
    violence: 1,
    robOfCar: 1,
    robFromCar: 1,
  });
  // const [crimeFilters, setCrimeFilters] = useState(["assault"]);
  const [timeFilters, setTimeFilters] = useState(["winter"]);
  // console.log(menuOpen);

  return (
    <>
      <div className="App">
      <NavBar />
      <Routes>
        <Route path = "/" element= {<MapPage
          weights={weights}
          setWeights={setWeights}
          timeFilters={timeFilters}
          setTimeFilters={setTimeFilters}
        />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/additional-resources' element={<AdditionalResources />} />
        </Routes>
        
      </div>
    </>
  );
}

export default App;
