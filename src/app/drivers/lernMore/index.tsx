import React from "react";
import DriversBlock2 from "./block-02";
import LastMile from "../../../asset/image/lastmile2.jpg";
import DriversBlock3 from "./block-03";
import SectionBlock1 from "../../../component/section-Block1";
import Block3 from "../../homeScreen/block3";
import Header from "../../../component/websiteHeader";
import Footer from "../../../component/websiteFooter";

const LernMoreDrivers = () => {
  const style = {
    background: "linear-gradient(208deg, #3d5877 0%, #151e29 100%)",
  };
  return (
    <div>
      <Header bgColor={style.background} />
      <br />
      <br />
      <br />
      <SectionBlock1
        Image={LastMile}
        head={"The best middle mile delivery service nationwide"}
        title={"Local and long distance middle mile delivery on demand"}
        ButtonPrimary={"Free Estimate"}
      />
      <DriversBlock2 />
      <Block3 />
      <DriversBlock3 />
      <Footer />
    </div>
  );
};

export default LernMoreDrivers;
