import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./app/homeScreen/index";
import SignUpScreen from "./component/signUpScreen";
import LastMileDelivery from "./app/business/lastMile";
import BusinessIndustries from "./app/business/indusries";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/lastmiledelivery" element={<LastMileDelivery />} />
        <Route path="/industries" element={<BusinessIndustries />} />
      </Routes>
    </>
  );
}

export default App;
