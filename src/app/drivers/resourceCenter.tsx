import React from "react";
import Header from "../../component/websiteHeader";
import SectionBlock1 from "../../component/section-Block1";
import Image1 from "../../asset/image/Van1.jpg";
import SectionCard1 from "../../component/section-Card1";
import CardImg1 from "../../asset/image/resource-ico1.png";
import CardImg2 from "../../asset/image/resource-ico2.png";
import CardImg3 from "../../asset/image/resource-ico3.png";
import DispatchBlog from "../../component/blog";
import Footer from "../../component/websiteFooter";
function ResourceCenter() {
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
        head={"Driver Resource Center"}
        ButtonPrimary={"Log Into Your Account"}
        dynamicUrl={"/signup"}
      />
      <SectionCard1
        heading={"Earn Bonuses and Get More Jobs"}
        image1={CardImg1}
        head1={"Referral Bonus"}
        title1={
          "Share your exclusive promo code with friends and earn a $50 referral bonus if they join the platform and begin accepting projects."
        }
        image2={CardImg2}
        head2={"Get More Work"}
        title2={
          "Get project requests five minutes before other pros when friends, family, and favorite customers use your promo code "
        }
        image3={CardImg3}
        head3={"Leaderboard Contests"}
        title3={
          "Earn monthly prizes and bonuses when you are at the top of the driver leaderboard "
        }
        buttonTxt={"Learn More"}
        dynamicUrl={"/getmorework"}
      />
      <DispatchBlog />
      <Footer />
    </>
  );
}

export default ResourceCenter;
