import React from "react";
import Header from "../../../component/websiteHeader";
import Footer from "../../../component/websiteFooter";
import LastmileBlock1 from "./lastMile-block1";
import LastmileBlock2 from "./lastMile-block2";
import LastmileBlock3 from "./lastMile-block3";
import Block3 from "../../homeScreen/block3";
import LastmileBlock4 from "./lastMile-block4";
import LastMile from "../../../asset/image/lastMile.jpg";
import BusinessBlock1 from "../component/business-Block1";

function LastMileDelivery(props: any) {
  const style = {
    background: "linear-gradient(208deg, #3d5877 0%, #151e29 100%)",
  };
  return (
    <div>
      <Header bgColor={style.background} />
      <BusinessBlock1
        Image={LastMile}
        head={"The best last mile delivery service nationwide"}
        title={"Local and long distance last mile deliveries national"}
        ButtonPrimary={"Free Estimate"}
      />
      {/* <LastmileBlock2 />
      <LastmileBlock3 />
      <Block3 />
      <LastmileBlock4 /> */}
      <Footer />
    </div>
  );
}

export default LastMileDelivery;
