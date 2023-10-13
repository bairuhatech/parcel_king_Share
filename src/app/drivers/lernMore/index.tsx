import React from "react";
import DriversBlock1 from "./block-01";
import DriversBlock2 from "./block-02";
import BusinessBlock1 from "../../business/component/business-Block1";
import BusinessBlock3 from "../../business/component/business-Block3";
import LastMile from "../../../asset/image/lastmile2.jpg";
import Block3 from "../../homeScreen/block3";
import DriversBlock3 from "./block-03";
import Block5 from "../../homeScreen/block5";

const LernMoreDrivers = () => {
  return (
    <div>
      {/* <DriversBlock1 /> */}
      <BusinessBlock1
        Image={LastMile}
        head={"The best middle mile delivery service nationwide"}
        title={"Local and long distance middle mile delivery on demand"}
        ButtonPrimary={"Free Estimate"}
      />
      <DriversBlock2 />
      <DriversBlock3 />
    </div>
  );
};

export default LernMoreDrivers;
