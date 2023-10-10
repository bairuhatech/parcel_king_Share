import React from "react";
import logo from "./logo.svg";
import "./App.css";
import WebsiteHeader from "./component/websiteHeader";
import WebsiteFooter from "./component/websiteFooter";
import { Routes, Route } from "react-router-dom";
import Home from "./app/home";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
