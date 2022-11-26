// import logo from "./Law&DisOrderLogoV11_Horizontal.png";
import "./App.css";
import NavBar from "./components/NavBar";
import Hamburgler from "./components/Hamburgler";
import { useState } from "react";
// import MainLayoutPage from "./components/MainLayoutPage";
import Map from "./components/Map";
import SimpleBackdrop from "./components/Backdrop";

function App() {
  const [menuOpen, setMenuOpen] = useState(true);
  // const [blurLoading, setBlurLoading] = useState(true);
  // console.log(menuOpen);

  return (
    <div className="App">
      <SimpleBackdrop />
      <div className="header">
        {/* <img src={logo} alt="Law & DisOrder Logo V11" /> */}
        {menuOpen && <NavBar />}
        {/* <div className="page"></div> */}
        <Hamburgler setMenuOpen={setMenuOpen} />
      </div>
      <div className="Body">
        {/* {blurLoading && <LoadingCard />} */}
        <Map />
        {/* <MainLayoutPage /> */}
      </div>
    </div>
  );
}

export default App;
