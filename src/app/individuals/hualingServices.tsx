import React from "react";
import Header from "../../component/websiteHeader";
import SectionBlock1 from "../../component/section-Block1";
import Image1 from "../../asset/image/Van1.jpg";
import SectionBlock2 from "../../component/section-Block2";
import Image2 from "../../asset/image/vanDelivery.jpg";
import Block5 from "../homeScreen/block5";
import Block3 from "../homeScreen/block3";
import DispatchBlog from "../../component/blog";
import Footer from "../../component/websiteFooter";

function HualingServices() {
  const style = {
    background: "linear-gradient(208deg, #3d5877 0%, #151e29 100%)",
  };
  return (
    <>
      <Header bgColor={style.background} />
      <br />
      <br />
      <br />
      <SectionBlock1
        Image={Image1}
        head={"Hauling Service On Demand"}
        title={"Book hauling help on demand with GoShare"}
        ButtonPrimary={"Free Estimate"}
      />
      <SectionBlock2
        Image={Image2}
        title1={
          "GoShare offers an on-demand hauling service to help you get rid of old junk or clean out your garage/basement or old storage unit. Our network of professional haulers will help you load and deliver your items to a dump or recycling center. Please contact your local recycling center in advance to find out their recycling costs and their hours of operations before scheduling your GoShare pickup. The appliance recycling costs from the recycling center are separate from Parcel King pickup and delivery fee. The delivery professional will charge the recycling fees to their own credit card and then add the charges to your final bill."
        }
      />
      <Block3 />
      <Block5 />
      <DispatchBlog />
      <Footer />
    </>
  );
}

export default HualingServices;
