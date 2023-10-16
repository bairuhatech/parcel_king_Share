import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./app/homeScreen/index";
import SignUpScreen from "./component/signUpScreen";
import BusinessIndustries from "./app/business/industries";
import IndividualHelpmoving from "./app/individuals/helpingMoving";
import SignUpToDrive from "./app/drivers/signUpToDrive/intex";
import LernMoreDrivers from "./app/drivers/lernMore";
import HotshotDelivery from "./app/business/hotShot";
import PricingAndBooking from "./app/business/pricingAndBooking";
import MiddleMileDelivery from "./app/business/middlemileDelivery";
import LtlShipment from "./app/business/itlShipment.tsx";
import LastMileDelivered from "./app/business/lastmileDelivered";
import IndividualMovingTruck from "./app/individuals/movingTrack";
import DeliveryLocation from "./app/business/location";
import IndividualRetaildelivery from "./app/individuals/RetailDelivery";
import HualingServices from "./app/individuals/hualingServices";
import Donate from "./app/individuals/donate";
import Contactus from "./app/more/contact";
import DriversCareer from "./app/more/careeers";
import CareerForm from "./app/more/careeers/component/career-Block1";
import AboutUs from "./app/more/aboutus";
import Investors from "./app/more/investors";
import Benefits from "./app/more/benefits";
import GetMoreWork from "./app/more/getMoreWork";
import IndividualsReview from "./app/individuals/review";
import DriverReview from "./app/drivers/review";
import FleetOwners from "./app/drivers/fleetOwner";
import FleetOwnersForm from "./app/drivers/fleetOwner/component/form";
import ResourceCenter from "./app/drivers/resourceCenter";
import News from "./app/drivers/news";
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
        <Route path="/hualingservices" element={<HualingServices />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/getmorework" element={<GetMoreWork />} />
        <Route path="/individuals-review" element={<IndividualsReview />} />
        <Route path="/driver-review" element={<DriverReview />} />
        <Route path="/fleetowners" element={<FleetOwners />} />
        <Route path="/fleet-signup" element={<FleetOwnersForm />} />
        <Route path="/resources-center" element={<ResourceCenter />} />
        <Route path="/News" element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
