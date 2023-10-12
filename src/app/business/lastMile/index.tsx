import React from "react";
import Header from "../../../component/websiteHeader";
import Footer from "../../../component/websiteFooter";
import LastMile from "../../../asset/image/lastMile.jpg";
import BusinessBlock1 from "../component/business-Block1";
import BusinessBlock2 from "../component/business-Block2";
import BusinessBlock2Image from "../../../asset/image/lastmile2.jpg";
import Block3 from "../../homeScreen/block3";
import BusinessBlock3 from "../component/business-Block3";
import BusinessBlock4 from "../component/business-Block4";

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
      <BusinessBlock2
        Image={BusinessBlock2Image}
        title1={
          "Parcel king connects you with local last mile Delivery Professionals on demand to help your business deliver your products across the US. Help is just minutes away with Parcel king’s same day and scheduled last mile delivery service. With GoShare, you can deliver your products the same day nation wide with our unique mobile apps, website, or our Delivery API forhigh volume last mile shippers. Our team of last mile delivery experts can handle most of your last mile delivery needs nationwide."
        }
        title2={
          "Our last mile delivery solution is a convenient alternative to traditional last mile carriers. Modern consumer demands and the ongoing digital revolution require businesses to adopt a digital last mile delivery and logistics strategy to support same day last mile home delivery. GoShare helps your business find vetted Delivery Professionals with the right equipment. We also help you manage and track last mile deliveries while saving you time and money by automating manual tasks."
        }
        title3={
          "Our local last mile carrier network includes thousands of Delivery Professionals nationwide who are equipped to handle any and all of your last mile shipping needs. Our last mile Delivery Professionals are experts in delivering anything from pallets to parcels. We have a fleet of vehicles that can handle any size last mile shipment, from box trucks, cargo vans, and pickup trucks to sedans. We have the resources and knowledge to handle any last mile delivery job"
        }
      />
      <BusinessBlock3
        head={"Your Last Mile Delivery Service Partner"}
        title1={
          " We know you need your last mile deliveries to be safe and on time. You need a final mile delivery partner you can trust. We have partnered with thousands of businesses, helping them meet their last mile delivery demand and increase their customer satisfaction. As last mile delivery experts with national coverage, we have a passion for making your last mile deliveries easy, efficient, and fast. We pride ourselves on providing the highest levels of customer service."
        }
        title2={
          "GoShare is helping businesses like yours by offering modern last mile delivery solutions such as: automated Dispatching, Proof of Delivery (POD) photographs, automated invoicing, rapid driver matching using Machine Learning (ML), real time order tracking, returns, and a record of each last mile delivery. Connect the GoShare Delivery API to your TMS, POS, WMS, or ERP system to automate order flow, exception handling, and payments."
        }
        title3={
          "Whether you need a small parcel delivery or pallets of items transferred from one location to another, our fleet of vetted independent last mile delivery professionals are equipped to handle almost any last mile delivery you throw at them. All of our delivery professionals are licensed, insured, and background checked to give you that peace of mind you need to run your business."
        }
      />

      <Block3 />
      <BusinessBlock4
        head={"Last Mile Delivery Made Easy"}
        title1={
          "Last mile delivery is our business and we’re committed to providing you with tools for easy scheduling, tracking, and payments no matter where your business takes you. At GoShare, we understand the importance of getting last mile deliveries done quickly and conveniently. We allow customers to order in seconds. You will be connected to a vetted last mile delivery professional in minutes. Then our network of last mile delivery professionals will deliver your products the same day. With thousands of box trucks, cargo vans, pickup trucks, and sedans in our nationwide network, we’re able to connect you with the right delivery professionals and vehicle for your last mile delivery needs."
        }
        title2={
          "As long as the last mile shipment begins or ends in one of our nationwide service areas, we can accept your last mile delivery orders. With trucks, vans, and sedans of all sizes, GoShare specializes in big & bulky last mile delivery nationwide. We focus on providing fast, reliable final mile delivery solutions to any size business. We can pick up at your retail store or warehouse seven days a week, 365 days a year. Expect rapid service and multiple last mile delivery service levels including white glove, room of choice, or threshold."
        }
        title3={
          "GoShare is a logistics technology company that facilitates final mile deliveries, middle mile deliveries, LTL shipments, hot shot trucking, and other delivery solutions for businesses nationwide. We are dedicated to delivering happiness in every aspect of our last mile delivery service, from our drivers and customer support team to our proprietary software. Try us and see why our customers say we’re the best last mile delivery service available nationally. Contact us today for more information about how GoShare can help your business grow."
        }
      />
      <Footer />
    </div>
  );
}

export default LastMileDelivery;
