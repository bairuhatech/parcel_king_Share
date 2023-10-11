import React from "react";
import WebsiteHeader from "../../component/websiteHeader";
import WebsiteFooter from "../../component/websiteFooter";
import HomeScreen from "./block1";
import Block2 from "./block2";

function Home() {
  return (
    <>
      <WebsiteHeader />
      <HomeScreen />
      <Block2 />
      <WebsiteFooter />
    </>
  );
}

export default Home;
