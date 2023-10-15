import React from "react";
import SectionBlock1 from "../../../component/section-Block1";
import LastMile from "../../../asset/image/lastMile.jpg";
import SectionBlock2 from "../../../component/section-Block2";
import Block2Image from "../../../asset/image/lastmile2.jpg";
import Block5 from "../../homeScreen/block5";
import Block3 from "../../homeScreen/block3";
import Header from "../../../component/websiteHeader";
import Footer from "../../../component/websiteFooter";
import SectionCard1 from "../../../component/section-Card1";
import DispatchBlog from "../../../component/blog";
function IndividualMovingTruck() {
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
        Image={LastMile}
        head={"Moving Trucks, Moving Vans"}
        title={"Find a moving truck and movers on demand with Parcel king"}
        ButtonPrimary={"Free Estimate"}
      />
      <SectionBlock2
        Image={Block2Image}
        title1={
          "Parcel King makes it easier than ever to find moving trucks when you need it. Our highly rated mobile and web apps will connect you with local background checked movers with a truck or van within minutes. Get an accurate, upfront price estimate today before you book. Our professional movers have box trucks, cargo vans and pickup trucks to help with moves of all sizes. No need to wait for someone to come out and give you an estimate or calling back and forth. No more renting a truck and doing all the work yourself. Simply tell us where to go, what items need to be moved and what kind of truck you need and Parcel King does the rest. Your precious possessions are protected by our comprehensive cargo insurance and liability insurance policies. Track your movers, get real time updates and communicate with your moving truck in the app. The best part is that you only pay for what you use, down to the minute. No need to inconvenience yourself picking up and dropping off a moving truck. We bring the truck to you."
        }
      />
      <Block5 />
      <Block3 />
      <DispatchBlog />
      <Footer />
    </>
  );
}

export default IndividualMovingTruck;
