import React from "react";

import HotshotImage1 from "../../asset/image/lastMile.jpg";
import HotshotImage2 from "../../asset/image/middlemile2.jpg";
import Header from "../../component/websiteHeader";
import SectionBlock1 from "../../component/section-Block1";
import SectionBlock2 from "../../component/section-Block2";
import SectionBlock3 from "../../component/section-Block3";
import Footer from "../../component/websiteFooter";

function HotshotDelivery() {
  const style = {
    background: "linear-gradient(208deg, #3d5877 0%, #151e29 100%)",
  };
  return (
    <>
      <Header bgColor={style.background} />
      <br />

      <SectionBlock1
        Image={HotshotImage1}
        head={"The best hot shot delivery service nationwide"}
        title={"Local and long distance hot shot delivery on demand"}
        ButtonPrimary={"Free Estimate"}
      />
      <SectionBlock2
        Image={HotshotImage2}
        title1={
          "GoShare connects you with local hot shot Delivery Professionals on demand to help you deliver anything from big and bulky items to small parcels nationwide. Help is just minutes away with GoShare’s same day and scheduled hot shot delivery service. With GoShare, you can deliver furniture, pallets, electronics, and more the same day nationwide with our unique mobile apps, website, or our Delivery API for high volume shippers. Our team of hot shot delivery experts can handle most of your hot shot delivery needs nationwide."
        }
        title2={
          "Our hot shot delivery solution is a convenient alternative to traditional hot shot delivery options. Modern consumer demands and the ongoing digital revolution require businesses to adopt a digital hot shot delivery and logistics strategy to support same day home delivery. GoShare helps your business find vetted hot shot Delivery Professionals with the right equipment. We also help you manage and track hot shot deliveries while saving you time and money by automating manual tasks."
        }
        title3={
          "At GoShare, we make hot shot delivery convenient and affordable. We’re committed to providing you with tools for easy scheduling, tracking, and payments no matter where you are. You can schedule a hot shot delivery from big box stores, food/beverage, furniture outlets, home furnishing retailers, and more. We allow customers to order in seconds. You will be connected to a vetted hot shot delivery professional in minutes. Then our network of hot shot delivery professionals will deliver your items the same day. With thousands of box trucks, cargo vans, pickup trucks, and sedans in our nationwide network, we’re able to connect you with the right delivery professionals and vehicle for your hot shot delivery."
        }
      />
      <SectionBlock3
        head={"Your Hot Shot Delivery Partner"}
        title1={
          "GoShare is revolutionizing how businesses manage last mile and middle mile logistics through our crowdsourced network of Delivery Professionals and modern technology solutions. Businesses can leverage our hot shot delivery platform to reduce costs, improve hot shot delivery velocity, and provide a seamless hot shot delivery experience for their customers. We have partnered with thousands of businesses, helping them meet their hot shot delivery demand while increasing their customer satisfaction. As hot shot delivery experts, we have a passion for making your hot shot deliveries fast, easy, and efficient. We pride ourselves on providing the highest levels of customer service."
        }
        title2={
          "GoShare is helping businesses like yours by offering modern hot shot delivery solutions such as: automated dispatching, Proof of Delivery (POD) photographs, automated invoicing, rapid driver matching using Machine Learning (ML), real time order tracking, returns, and a record of each hot shot delivery. Connect the GoShare Delivery API to your TMS, POS, WMS, or ERP system to automate order flow, exception handling, and payments."
        }
        title3={
          "Whether you need a small parcel delivery or pallets of items transferred from one location to another, our fleet of vetted independent hot shot delivery professionals are equipped to handle almost any hot shot delivery you throw at them. All of our hot shot delivery professionals are licensed, insured, and background checked to give you that peace of mind you need to run your business."
        }
      />

      <Footer />
    </>
  );
}

export default HotshotDelivery;
