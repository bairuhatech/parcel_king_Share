import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./app/homeScreen/index";
import SignUpScreen from "./component/signUpScreen";
import SignUpToDrive from "./app/drivers/signUpToDrive/intex";
import LernMoreDrivers from "./app/drivers/lernMore";
import HotshotDelivery from "./app/business/hotShot";
import PricingAndBooking from "./app/business/pricingAndBooking";
import DeliveryLocation from "./app/business/DeliveryLocation";
import MiddleMileDelivery from "./app/business/middlemileDelivery";
import LtlShipment from "./app/business/itlShipment.tsx";
import LastMileDelivered from "./app/business/lastmileDelivered";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/signUpToDrive" element={<SignUpToDrive />} />
        <Route path="/middlemistdelivery" element={<MiddleMileDelivery />} />
        <Route path="/ltlshipment" element={<LtlShipment />} />
        <Route path="/lernMoreDrivers" element={<LernMoreDrivers />} />
        <Route path="/lastmiledelivery" element={<LastMileDelivered />} />
        <Route path="/middlemistdelivery" element={<MiddleMileDelivery />} />
        <Route path="/ltlshipment" element={<LtlShipment />} />
        <Route path="/hotShotdelivery" element={<HotshotDelivery />} />
        <Route path="/pricingandbooking" element={<PricingAndBooking />} />
        <Route path="/deliverylocation" element={<DeliveryLocation />} />
      </Routes>
    </div>
  );
}

export default App;
