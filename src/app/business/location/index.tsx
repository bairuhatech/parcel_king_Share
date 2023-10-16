import React from "react";

import DeliveryLocationImage1 from "../../../asset/image/deliverLocation1.jpg";
import Header from "../../../component/websiteHeader";
import { TfiLocationArrow } from "react-icons/tfi";
import SectionBlock1 from "../../../component/section-Block1";
import Location from "../../../component/location-section";
import Footer from "../../../component/websiteFooter";
import PricingAndBookingForm from "./component/form";
import LocationSites from "./component/locations-block1";

function DeliveryLocation() {
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
        Image={DeliveryLocationImage1}
        head={"Locations"}
        icon={<TfiLocationArrow color="red" size={30} />}
        title={"Find a GoShare Delivery Pro in Your Hometown"}
      />
      <Location />
      <PricingAndBookingForm />
      {/* <LocationSites /> */}
      <br />
      <Footer />
    </>
  );
}

export default DeliveryLocation;
