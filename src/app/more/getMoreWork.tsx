import React from "react";
import Header from "../../component/websiteHeader";
import SectionBlock1 from "../../component/section-Block1";
import Image1 from "../../asset/image/lastMile.jpg";
import SectionBlock3 from "../../component/section-Block3";
import Footer from "../../component/websiteFooter";
function GetMoreWork() {
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
        head={"How to Get More Work with GoShare"}
        title={
          "Secure more projects and earn bonuses with these tips and resources."
        }
        ButtonPrimary={"Log Into Your Account"}
      />
      <SectionBlock3
        head={"Start Earning More Money Today"}
        subHead1={"Get More Work"}
        title1={
          "Give your GoShare promo code to friends and new business partners. Post your code on facebook, twitter and other popular social networks to maximize your reach. The new customers that you bring in get 5% off their first order. You’ll get an exclusive first notification on any project that comes through with your code, allowing you to accept before other delivery pros. Drop off custom business cards with your promo code on them at local retailers to see the biggest boost to your numbers."
        }
        subHead2={"Magnets For Branding"}
        title2={
          "Add a GoShare magnet to your truck for brand awareness marketing in your community. This also helps GoShare customers recognize you when you arrive."
        }
        subHead3={"$50 Delivery Pro Referral Bonus"}
        title3={
          "Do you have friends or family that own a pickup truck, cargo van, box truck or car who want to earn more money? Refer them to GoShare and get paid! Once they complete their first project, we will send you a $50 bonus. When your friend signs up, they must enter your referral code. If they do not enter your code, we are not able to award the bonus."
        }
      />
      <SectionBlock3
        head={"Promote Yourself"}
        title1={
          "Share your promo code with custom printed business cards or car magnets. Pass them out to local businesses, friends, and neighbors. When they use the code, you get the project requests first."
        }
        title2={
          "Login your account and select “Invite Friends” in the menu to find your code."
        }
        ButtonTxt={"Share Your Code"}
        dynamicURL={"/signup"}
      />
      <Footer />
    </>
  );
}

export default GetMoreWork;
