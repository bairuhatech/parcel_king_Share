import React from "react";
import Header from "../../component/websiteHeader";
import SectionBlock1 from "../../component/section-Block1";
import Image1 from "../.././asset/image/deliveryBoy.jpg";
import SectionBlock2 from "../../component/section-Block2";
import SectionBlock3 from "../../component/section-Block3";
import DeliveryIndustires from "../../component/deliveryIndustries";
import IndustriesImage1 from "../../asset/image/Automotive-Icon-SQ.png";
import IndustriesImage2 from "../../asset/image/Stack-of-Boxes-SQ.png";
import IndustriesImage3 from "../../asset/image/Construction-Crane-SQ.png";
import IndustriesImage4 from "../../asset/image/Clothing-Apparel-Icon-SQ.png";
import IndustriesImage5 from "../../asset/image/Warehouse-Icon-SQ.png";
import IndustriesImage6 from "../../asset/image/Ecommerce-Icon-.png";
import IndustriesImage7 from "../../asset/image/Courier-Icon-SQ.jpg";
import Footer from "../../component/websiteFooter";

function BusinessIndustries() {
  const style = {
    background: "linear-gradient(208deg, #3d5877 0%, #151e29 100%)",
  };
  return (
    <>
      <Header bgColor={style.background} />
      <br />
      <br />
      <br />
      <SectionBlock1 Image={Image1} head={"Industries We Serve"} />
      <SectionBlock3
        head={
          "Parcel king is proud to provide delivery services and logistics to businesses of all shapes and sizes."
        }
        title1={
          "Businesses from a variety of industries who are looking for a modern and efficient delivery solution choose GoShare. We’ll quickly find you a Delivery Pro for a cross-town delivery of auto-parts, a last mile delivery of furniture, or a middle mile pallet move from warehouse to warehouse. With our easy to use technology solutions you’ll get new insights into your logistics operations along with time and cost savings. We give you access to all of your delivery data in one place. GoShare has over 6,000 Delivery Professionals to meet your unique needs 18 hours a day, 7 days a week. All of our delivery professionals are licensed, insured and background checked. Here is a list of some of the industries GoShare serves."
        }
      />
      <DeliveryIndustires
        heading={"Top Industries"}
        image1={IndustriesImage1}
        head1={"Automotive"}
        image2={IndustriesImage2}
        head2={"Industrial Supply"}
        image3={IndustriesImage3}
        head3={"Construction/Contractors"}
        image4={IndustriesImage4}
        head4={"Clothing/Apparel"}
        image5={IndustriesImage5}
        head5={"Distribution Support"}
        image6={IndustriesImage6}
        head6={"E-Commerce"}
      />
      <Footer />
    </>
  );
}

export default BusinessIndustries;
