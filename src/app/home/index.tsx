import React from "react";
import WebsiteHeader from "../../component/websiteHeader";
import WebsiteFooter from "../../component/websiteFooter";
import HomeScreen from "../homeScreen";

function Home() {
  return (
    <>
      <WebsiteHeader />
      <HomeScreen />
      <WebsiteFooter />
    </>
  );
}

export default Home;
