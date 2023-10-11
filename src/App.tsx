import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./app/homeScreen/index";
import SignUpScreen from "./component/signUpScreen";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signup" element={<SignUpScreen />} />
      </Routes>
    </>
  );
}

export default App;
