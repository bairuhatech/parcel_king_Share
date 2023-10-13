import React from "react";
import LthShipmentImage1 from "../../asset/image/ltlShipmentimage2.jpg";
import LthShipmentImage2 from "../../asset/image/ltlShipmentimage1.jpg";
import Header from "../../component/websiteHeader";
import SectionBlock1 from "../../component/section-Block1";
import SectionBlock2 from "../../component/section-Block2";
import Block3 from "../homeScreen/block3";
import Block5 from "../homeScreen/block5";
import Footer from "../../component/websiteFooter";
function LtlShipment() {
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
        Image={LthShipmentImage1}
        head={"LTL Shipping API, Less Than Truckload, LTL Delivery"}
        title={
          "Instant driver matching, realtime visibility, delivery efficiency, delivery data via web, API or mobile app"
        }
        ButtonPrimary={"Free Estimate"}
      />
      <SectionBlock2
        Image={LthShipmentImage2}
        title1={
          "Optimize your supply chain by accessing Parcel king’s same day Less Than Truckload (LTL) delivery services through our API, website or mobile apps. Save time with automated tasks, instantly match with drivers, create pickup requests, get real time visibility, handle exceptions, and collect proof of delivery for your LTL shipments."
        }
        title2={
          "Our REST API can be integrated into your transportation management system (TMS), your e-commerce website, a retail Point of Sale (POS) or a Warehouse Management System (WMS) to create seamless LTL delivery experiences. If you don't have IT support for an integration, you can get an LTL price quote in seconds, connect with a driver in minutes, and have your LTL shipment delivered in hours using our website or our highly rated mobile apps for iPhone and Android."
        }
        title3={
          "You have access to more than 15,000 carriers in Parcel king's virtual fleet of box trucks, cargo vans, pickup trucks and sedans. Lift gates, manual unload and assembly services are available as well. Our cloud-based logistics platform has been used by over 100,000 customers to find qualified, background checked and reliable delivery professionals."
        }
      />
      <Block3 />
      {/* <BusinessBlock3 head={""} /> */}
      <Block5 />
      <Footer />
    </>
  );
}

export default LtlShipment;
