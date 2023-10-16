import React from "react";
import Header from "../../../component/websiteHeader";
import Footer from "../../../component/websiteFooter";

import PricingAndBookingImage1 from "../../../asset/image/lastMile.jpg";
import SectionBlock1 from "../../../component/section-Block1";
import PricingAndBookingForm from "./component/form";
import Location from "../../../component/location-section";
import LocationTimeLIne from "./component/timeline";

function PricingAndBooking() {
  const style = {
    background: "linear-gradient(208deg, #3d5877 0%, #151e29 100%)",
  };
  return (
    <>
      <Header bgColor={style.background} />
      <br />
      <br />
      <br />
      <SectionBlock1 Image={PricingAndBookingImage1} head={""} />
      {/* <Location />
      <PricingAndBookingForm /> */}
      <LocationTimeLIne />
      <br />
      <Footer />
    </>
  );
}

export default PricingAndBooking;
