// import logo from "./Law&DisOrderLogoV11_Horizontal.png";
import "./App.css";
import NavBar from "./components/NavBar";
import Hamburgler from "./components/Hamburgler";
import { useState } from "react";
// import MainLayoutPage from "./components/MainLayoutPage";
import LoadingModal from "./components/LoadingModal";
import MapPage from "./components/MapPage";

function App() {
  // const [blurLoading, setBlurLoading] = useState(true);
  // console.log(menuOpen);

  return (
    <>
      <LoadingModal />
    <div className="App">
      {/* <img src={logo} alt="Law & DisOrder Logo V11" /> */}
      <NavBar />
      {/* <div className="page"></div> */}
        <MapPage />
        {/* <MainLayoutPage /> */}
    </div>
    </>
  );
}

export default App;
