import React from "react";
import WebsiteHeader from "../../component/websiteHeader";
import WebsiteFooter from "../../component/websiteFooter";
import Block1 from "./block1";
import Block3 from "./block3";
import Block4 from "./block4";

function Home() {
  return (
    <>
      <WebsiteHeader />
      <Block1 />
      <Block3 />
      <Block4 />
      <WebsiteFooter />
    </>
  );
}

export default Home;
