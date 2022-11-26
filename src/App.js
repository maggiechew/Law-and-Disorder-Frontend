import logo from "./Law&DisOrderLogoV11_Horizontal.png";
import "./App.css";
import NavBar from "./components/NavBar";
import Hamburguler from "./components/Hamburguler";
import { useState } from "react";
import MainLayoutPage from "./components/MainLayoutPage";
import Map from "./components/Map";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);
  return (
    <div className="App">
      <div className="header">
        <img src={logo} alt="Law & DisOrder Logo V11" />
        {menuOpen && <NavBar />}
        <div className="page"></div>
        <Hamburguler setMenuOpen={setMenuOpen} />
      </div>
      <Map />
      {/* <MainLayoutPage /> */}
    </div>
  );
}

export default App;
