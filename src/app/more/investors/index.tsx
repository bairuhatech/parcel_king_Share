import React from "react";
import Header from "../../../component/websiteHeader";
import SectionBlock1 from "../../../component/section-Block1";
import Image1 from "../../../asset/image/shakeHand.jpg";
import SectionBlock3 from "../../../component/section-Block3";
import SectionCard1 from "../../../component/section-Card1";
import CardImg1 from "../../../asset/image/web_Mob-removebg-preview.png";
import CardImg2 from "../../../asset/image/financialSpt-removebg-preview.png";
import CardImg3 from "../../../asset/image/sale_1_05-removebg-preview.png";
import Footer from "../../../component/websiteFooter";
import InvestorsForm from "./component/form";
function Investors() {
  const style = {
    background: "linear-gradient(208deg, #3d5877 0%, #151e29 100%)",
  };
  return (
    <>
      <Header bgColor={style.background} />
      <br />
      <br />
      <br />
      <SectionBlock1 Image={Image1} head={"Investors"} />
      <SectionBlock3
        head={"What is Parcel King"}
        title1={
          "Parcel-King is a tech-enabled last mile logistics marketplace that connects pickup truck, box truck, and cargo van drivers with businesses and individuals to provide on-demand delivery and moving services. More than 100,000 customers and over 17,000 delivery professionals rely on Parcel-King’s technology to provide fast, reliable and low cost delivery experiences. We specialize in transporting big and bulky cargo. As an economic empowerment platform, Parcel-King enables thousands of drivers to manage their delivery business and provide critical delivery services to their regional communities while earning some of the best hourly wages in the gig economy. Parcel-King is currently accessible in over 45 metros across the US and growing fast. Our proprietary technology stack includes mobile apps, web applications, and APIs used to create seamless delivery and moving experiences. Parcel-King is a licensed broker with the department of transportation, DOT # 3222813 and licensed by the California Bureau of Household Goods and Services Division of Household Movers CA# 545742"
        }
        title2={
          "Our mission is to organize the world’s trucks to make them more accessible and useful."
        }
      />
      <SectionCard1
        heading={"Company Highlights"}
        image1={CardImg1}
        head1={"Award-Winning Technology"}
        title1={
          "Parcel-King’s proprietary mobile & web apps create better last-mile delivery experiences."
        }
        image2={CardImg2}
        head2={"Strong Financial Performance"}
        title2={
          "Triple digit annual growth trajectory. Predictable acquisition costs and tightly managed budgets."
        }
        image3={CardImg3}
        head3={"Trusted By the Best"}
        title3={
          "Parcel-King is used by leaders in retail, industrial supply, automotive, and the food/beverage industry"
        }
      />
      <InvestorsForm />
      <Footer />
    </>
  );
}

export default Investors;
