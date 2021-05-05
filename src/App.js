import React from "react";
import './App.css';
import Classic from "./Components/Navbar/Classic";
import BannerVideo from "./Components/Navbar/VideoForBanner/BannerVideo";
import CustomerInfo from "./Components/CustomersInfo/CustomerInfo";
import FeatureComponent from "./Components/FeatureComponent/FeatureComponent";
import Map from './Components/Map/Map'

function App() {
  return (
    <div className="App">
        <Classic/>
        <BannerVideo/>
        <CustomerInfo/>
        <FeatureComponent/>
        <Map/>
    </div>
  );
}

export default App;
