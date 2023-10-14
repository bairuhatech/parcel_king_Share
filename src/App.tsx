import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./app/homeScreen/index";
import SignUpScreen from "./component/signUpScreen";
import BusinessIndustries from "./app/business/industries";
import DriversCareer from "./app/drivers/careers";
import CareerForm from "./app/drivers/careers/component/form";
import AboutUs from "./app/drivers/aboutUs";

import IndividualHelpmoving from "./app/individuals/helpingMoving";
import SignUpToDrive from "./app/drivers/signUpToDrive/intex";
import LernMoreDrivers from "./app/drivers/lernMore";
import HotshotDelivery from "./app/business/hotShot";
import PricingAndBooking from "./app/business/pricingAndBooking";
import MiddleMileDelivery from "./app/business/middlemileDelivery";
import LtlShipment from "./app/business/itlShipment.tsx";
import LastMileDelivered from "./app/business/lastmileDelivered";
import IndividualMovingTruck from "./app/individuals/movingTrack";
import IndividualRetaildelivery from "./app/individuals/RetailDelivery";
import DeliveryLocation from "./app/business/location";
import Contactus from "./app/drivers/contact";
import Investors from "./app/drivers/investors";
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
        <Route
          path="/individualhelpmoving"
          element={<IndividualHelpmoving />}
        />
        <Route path="/ltlshipment" element={<LtlShipment />} />
        <Route path="/hotShotdelivery" element={<HotshotDelivery />} />
        <Route path="/pricingandbooking" element={<PricingAndBooking />} />
        <Route path="/deliverylocation" element={<DeliveryLocation />} />
        <Route path="/industries" element={<BusinessIndustries />} />
        <Route path="/Career" element={<DriversCareer />} />
        <Route path="/careerform" element={<CareerForm />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route
          path="/individualmovingtrack"
          element={<IndividualMovingTruck />}
        />
        <Route
          path="/individualretaildelivery"
          element={<IndividualRetaildelivery />}
        />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/investors" element={<Investors />} />
      </Routes>
    </div>
  );
}

export default App;
