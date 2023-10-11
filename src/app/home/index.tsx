import React from "react";
import WebsiteHeader from "../../component/websiteHeader";
import HomeScreen from "../homeScreen";
import Footer from "../../component/websiteFooter";
import DeliveryScreen from "../deliveryScreen";

function Home() {
  return (
    <>
      <WebsiteHeader />
      <HomeScreen />
      <DeliveryScreen/>
      <Footer />
    </>
  );
}

export default Home;
