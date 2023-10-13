import React from "react";
import DriversBlock2 from "./block-02";
import LastMile from "../../../asset/image/lastmile2.jpg";
import SectionBlock1 from "../../../component/section-Block1";
import Block3 from "../../homeScreen/block3";
import Header from "../../../component/websiteHeader";
import Footer from "../../../component/websiteFooter";
import AWordFromOurDrivers from "../components/A Word from Our Drivers";
import WhyJoinParcelKing from "../components/WhyJoinParcelKind";

const LernMoreDrivers = () => {
  return (
    <div>
      <Header />
      <SectionBlock1
        Image={LastMile}
        head={"The best middle mile delivery service nationwide"}
        title={"Local and long distance middle mile delivery on demand"}
        ButtonPrimary={"Free Estimate"}
      />
      <DriversBlock2 />
      <Block3 />
      <WhyJoinParcelKing />
      <AWordFromOurDrivers />
      <Footer />
    </div>
  );
};

export default LernMoreDrivers;
