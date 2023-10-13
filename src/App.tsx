import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./app/homeScreen/index";
import SignUpScreen from "./component/signUpScreen";
import LastMileDelivery from "./app/business/lastMile";
import SignUpToDrive from "./app/drivers/signUpToDrive/intex";
function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/lastmiledelivery" element={<LastMileDelivery />} />
        <Route path="/signUpToDrive" element={<SignUpToDrive />} />
      </Routes>
    </>
  );
}

export default App;
