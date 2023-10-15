import React from "react";

import MiddleMilesImage1 from "../../asset/image/middlemile1.jpg";
import MiddleMilesImage2 from "../../asset/image/middlemile2.jpg";
import Header from "../../component/websiteHeader";
import SectionBlock1 from "../../component/section-Block1";
import SectionBlock2 from "../../component/section-Block2";
import Block3 from "../homeScreen/block3";
import SectionBlock3 from "../../component/section-Block3";
import Footer from "../../component/websiteFooter";

function MiddleMileDelivery() {
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
        Image={MiddleMilesImage1}
        head={"The best middle mile delivery service nationwide"}
        title={"Local and long distance middle mile delivery on demand"}
        ButtonPrimary={"Free Estimate"}
      />
      <SectionBlock2
        Image={MiddleMilesImage2}
        title1={
          "parcel King connects you with local middle mile Delivery Professionals on demand to help you deliver anything from big and bulky items to small parcels nationwide. Help is just minutes away with parcel King’s same day and scheduled middle mile delivery service. With parcel King, you can deliver your products the same day nationwide with our unique mobile apps, website, or our Delivery API for high volume middle mile shippers. Our team of middle mile delivery experts can handle most of your middle mile delivery needs nationwide."
        }
        title2={
          "At parcel King, we make middle mile delivery convenient and affordable. We’re committed to providing you with tools for easy scheduling, tracking, and payments no matter where you are. You can schedule a middle mile delivery from your distribution center, warehouse, and more. We allow customers to order in seconds. You will be connected to a vetted middle mile delivery professional in minutes. Then our network of middle mile delivery professionals will deliver your items the same day. With thousands of box trucks, cargo vans, pickup trucks and sedans in our nationwide network, we’re able to connect you with the right delivery professionals and vehicle for your middle mile delivery."
        }
        title3={""}
      />
      <Block3 />
      <SectionBlock3
        head={"Your Middle Mile Delivery Service Partner"}
        title={
          "We know you need your middle mile deliveries to be safe and on time. You need a middle mile delivery partner you can trust. With parcel King you no longer have to rely on traditional middle mile delivery services that are slow and unreliable. Instead you can schedule a parcel King delivery professional who can deliver your products the same day. parcel King’s modern middle mile delivery solution helps you schedule middle mile deliveries that are quick, convenient, and affordable."
        }
        title2={
          "From pallets to parcels, we can help you get your business to deliver your products quickly and safely. Our proprietary technology gives you the flexibility to book middle mile deliveries from anywhere. Deliveries can be scheduled from any device on our website or using our highly rated mobile apps. High volume shippers can integrate with our Delivery API for a white labeled solution. Connect your TMS, POS, WMS, or ERP system to automate order flow, exception handling, and payments."
        }
        title3={
          "Whether you have a small footprint or a large operation, we are here to serve you with innovative middle mile delivery solutions that scale as you grow. Our middle mile and last mile delivery services allow businesses to wow their customers with convenient, fast, and modern shipping. Our network of vetted independent drivers is equipped to handle almost any middle mile delivery you throw at them. All of our middle mile delivery professionals are licensed, insured, and background checked to give you that peace of mind you need to run your business."
        }
        title4={""}
      />
      <Footer />
    </>
  );
}

export default MiddleMileDelivery;
