import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./app/homeScreen/index";
import SignUpScreen from "./component/signUpScreen";
import IndividualHelpmoving from "./app/individuals/helpingMoving";
import HotshotDelivery from "./app/business/hotShot";
import PricingAndBooking from "./app/business/pricingAndBooking";
import DeliveryLocation from "./app/business/DeliveryLocation";
import MiddleMileDelivery from "./app/business/middlemileDelivery";
import LtlShipment from "./app/business/itlShipment.tsx";
import LastMileDelivered from "./app/business/lastmileDelivered";
import IndividualMovingTruck from "./app/individuals/movingTrack";
import IndividualRetaildelivery from "./app/individuals/RetailDelivery";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/lastmiledelivery" element={<LastMileDelivered />} />
        <Route path="/middlemistdelivery" element={<MiddleMileDelivery />} />
        <Route path="/individualhelpmoving" element={< IndividualHelpmoving/>} />
        <Route path="/ltlshipment" element={<LtlShipment />} />
        <Route path="/hotShotdelivery" element={<HotshotDelivery />} />
        <Route path="/pricingandbooking" element={<PricingAndBooking />} />
        <Route path="/deliverylocation" element={<DeliveryLocation />} />
        <Route path="/individualmovingtrack" element={<IndividualMovingTruck />} />
        <Route path="/individualretaildelivery" element={<IndividualRetaildelivery />} />
      </Routes>
    </div>
  );
}

export default App;
