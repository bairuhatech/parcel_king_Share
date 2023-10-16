import React from "react";
import Header from "../../component/websiteHeader";
import SectionBlock1 from "../../component/section-Block1";
import Image1 from "../.././asset/image/hero-img-home_1.jpg";
import Image2 from "../.././asset/image/lastMile.jpg";
import SectionBlock2 from "../../component/section-Block2";
import Block3 from "../homeScreen/block3";
import DispatchBlog from "../../component/blog";
import Footer from "../../component/websiteFooter";
function Donate() {
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
        head={"Used Furniture Donation, Furniture Pickup"}
        title={"Same-day Furniture Donation Pickup and Dropoff"}
        ButtonPrimary={"Free Estimate"}
      />
      <SectionBlock2
        Image={Image2}
        title1={
          "If you have some old furniture lying around that you want to get rid of, use GoShare to hire a professional to pickup and take your old furniture to a recycling center or possibly to a donation center. Please contact your local recycling or donation center in advance to find out if they will accept your items and their hours of operations before scheduling your GoShare pickup. "
        }
        title2={
          " The furniture recycling costs from the recycling center are separate from GoShare’s pickup and delivery fee. The delivery professionals will charge the recycling fees to their own credit card and then add the charges to your final bill."
        }
      />
      <Block3 />
      <DispatchBlog />
      <Footer />
    </>
  );
}

export default Donate;
