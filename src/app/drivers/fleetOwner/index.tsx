import React from "react";
import Header from "../../../component/websiteHeader";
import SectionBlock1 from "../../../component/section-Block1";
import Image1 from "../../../asset/image/truckLoad.jpg";
import SectionBlock3 from "../../../component/section-Block3";
import SectionCard1 from "../../../component/section-Card1";
import Image2 from "../../../asset/image/PKCar.png";
import Image3 from "../../../asset/image/PKVan.png";
import Image4 from "../../../asset/image/PKTruck.png";
import Footer from "../../../component/websiteFooter";
import FleetOwnersForm from "./component/form";
function FleetOwners() {
  const style = {
    background: "linear-gradient(208deg, #3d5877 0%, #151e29 100%)",
  };
  return (
    <>
      <Header bgColor={style.background} />
      <br />
      <br />
      <br />
      <SectionBlock1 Image={Image1} head={"Truck Loads Available for Fleets"} />
      <SectionBlock3
        head={"Find Available Truck Loads For Box Trucks and Cargo Vans"}
        title1={
          "GoShare is a leading marketplace for truck owners, van owners, and delivery professionals to connect with local businesses who need help with last mile delivery, middle mile delivery, LTL freight, and hot shot trucking deliveries. Whether you own a few vehicles or a few hundred, GoShare is the perfect partner and platform to help you find loads to supplement your fleet business. GoShare has partnered with thousands of truck owners and businesses across the United States to the fastest and most reliable on demand delivery service focusing on big and bulky items. Our clients include retailers, automotive, food & beverage, solar, construction companies, wholesale distributors, and more. They use our truck loads app to connect with delivery professionals on demand. Fleet owners who partner with GoShare get access to daily truckloads available on our platform, helping them keep their drivers busy and their vehicles full. It is easy to get started, click the button below to apply. Our driver support team is available to assist you. Our fleet app partners go through a different onboarding process than individual owner operators. If you are looking for truck loads for single truck owner operators, please apply here."
        }
        ButtonTxt={"Fleet Owner Sign Up"}
        dynamicURL={"/fleet-signup"}
      />
      <SectionCard1
        heading={"How Much Can I Earn?"}
        image1={Image2}
        head1={"Pickup Truck Loads"}
        title1={"Average earnings of up to $80 per hour"}
        image2={Image3}
        head2={"Cargo Van Loads"}
        title2={"Average earnings of up to $116 per hour"}
        image3={Image4}
        head3={"Box Truck Loads"}
        title3={"Average earnings of up to $222 per hour"}
        buttonTxt={"Do My Vehicles Qualify?"}
      />
      <Footer />
    </>
  );
}

export default FleetOwners;
