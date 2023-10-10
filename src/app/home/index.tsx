import React from "react";
import WebsiteHeader from "../../component/websiteHeader";
import WebsiteFooter from "../../component/websiteFooter";
import HomeScreen from "../homeScreen";
import ChooseGoshare from "../chooseGoShareScreen";

function Home() {
  return (
    <>
      <WebsiteHeader />
      <HomeScreen />
      <ChooseGoshare />
      <WebsiteFooter />
    </>
  );
}

export default Home;
