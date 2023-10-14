import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./app/homeScreen/index";
import SignUpScreen from "./component/signUpScreen";
import HotshotDelivery from "./app/business/hotShot";
import PricingAndBooking from "./app/business/pricingAndBooking";
import MiddleMileDelivery from "./app/business/middlemileDelivery";
import LtlShipment from "./app/business/itlShipment.tsx";
import LastMileDelivery from "./app/business/lastmileDelivered";
import DeliveryLocation from "./app/business/location";
import BusinessIndustries from "./app/business/industries";
import DriversCareer from "./app/drivers/careers";
import CareerForm from "./app/drivers/careers/component/form";
import AboutUs from "./app/drivers/aboutUs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/lastmiledelivery" element={<LastMileDelivery />} />
        <Route path="/middlemistdelivery" element={<MiddleMileDelivery />} />
        <Route path="/ltlshipment" element={<LtlShipment />} />
        <Route path="/hotShotdelivery" element={<HotshotDelivery />} />
        <Route path="/pricingandbooking" element={<PricingAndBooking />} />
        <Route path="/deliverylocation" element={<DeliveryLocation />} />
        <Route path="/industries" element={<BusinessIndustries />} />
        <Route path="/Career" element={<DriversCareer />} />
        <Route path="/careerform" element={<CareerForm />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
