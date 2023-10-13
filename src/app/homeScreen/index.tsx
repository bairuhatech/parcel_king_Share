import React from "react";
import WebsiteHeader from "../../component/websiteHeader";
import WebsiteFooter from "../../component/websiteFooter";
import Block1 from "./block1";
import Block3 from "./block3";
import Block4 from "./block4";
import Block2 from "./block2";
import Block5 from "./block5";
import Block6 from "./block6";

function Home() {
  return (
    <>
      <WebsiteHeader />
      <Block1 />
      <Block2 />
      <Block3 />
      <Block4 />
      <Block5/>
      <Block6/>
      <WebsiteFooter />
    </>
  );
}

export default Home;
