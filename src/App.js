import "./App.css";

import NavBar from "./components/NavBar";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MapPage from "./components/MapPage";
import AboutUs from "./components/AboutUs";
import AdditionalResources from "./components/AdditionalResources";

function App() {
  const [weights, setWeights] = useState({});
  const [timeFilters, setTimeFilters] = useState([]);

  return (
    <>
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <MapPage
                weights={weights}
                setWeights={setWeights}
                timeFilters={timeFilters}
                setTimeFilters={setTimeFilters}
              />
            }
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route
            path="/additional-resources"
            element={<AdditionalResources />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
