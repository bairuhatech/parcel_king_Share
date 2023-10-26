import React from "react";
import Header from "../../../component/websiteHeader";
import Footer from "../../../component/websiteFooter";
import SectionBlock1 from "../../../component/section-Block1";
import Helperimage from "../../../asset/image/teamCareer.jpg";
import SectionBlock2 from "../../../component/section-Block2";
import Helperimage2 from "../../../asset/image/vanDelivery.jpg";
import { useNavigate } from "react-router-dom";
import SectionCard1 from "../../../component/section-Card1";
import HelperImg1 from "../../../asset/image/why_join-ico1.png";
import HelperImg2 from "../../../asset/image/why_join-ico2.png";
import HelperImg3 from "../../../asset/image/why_join-ico3.png";
import HelperImg4 from "../../../asset/image/why_join-ico4.png";
import HelperImg5 from "../../../asset/image/why_join-ico5 (1).png";
import {
  PiNumberCircleEightBold,
  PiNumberCircleFiveBold,
  PiNumberCircleFourBold,
  PiNumberCircleOneBold,
  PiNumberCircleSevenBold,
  PiNumberCircleSixBold,
  PiNumberCircleThreeBold,
  PiNumberCircleTwoBold,
} from "react-icons/pi";

const Helper = () => {
  const style = {
    background: "linear-gradient(208deg, #3d5877 0%, #151e29 100%)",
  };

  const navigate = useNavigate();

  return (
    <>
      <Header bgColor={style.background} />
      <br />
      <br />
      <br />
      <SectionBlock1
        Image={Helperimage}
        head={"Apply to Become a Parcel-King Helper"}
      />
      <br />
      <SectionBlock2
        Image={Helperimage2}
        head={"No Truck, No Problem"}
        title1={
          " Interested in joining the Parcel-King platform, but don’t own a pickup truck, full-sized cargo van, or box truck? Apply as a helper! Helpers assist drivers in loading and unloading large and bulky cargo, but rarely carry items in their vehicles. Helpers earn an average of $40 an hour, the same as pickup truck drivers. Customers will pay for your time during loading, transit to the unloading site, and unloading. In order to qualify to take helper projects, you must be able to comfortably lift 50lbs and pass a background check. Because you are covered by Parcel-King’s insurance while on projects, your vehicle is still required to be a model year of 2000 or newer. You must also pass a vehicle inspection. If you aren’t sure whether or not your vehicle qualifies to accept cargo transportation projects, check out this guide."
        }
        buttonTxt={"Apply to Accept Helper Project"}
        dynamicURL={"/signUpToDrive"}
      />
      <SectionCard1
        heading={"Why Join Parcel-King"}
        image1={HelperImg1}
        head1={"Industry Leading Wages"}
        title1={
          "Projects on the Parcel-King platform offer some of the highest per-hour earnings of any gig-delivery service."
        }
        image2={HelperImg2}
        head2={"Flexible Hours"}
        title2={
          "As an independent contractor, you can work when you want, however often you want. Pick only the projects that work for your schedule."
        }
        image3={HelperImg3}
        head3={"Weekly Pay"}
        title3={
          "No long waiting periods to get your hard-earned money. Parcel-King bills the customer on your behalf and deposits the money directly into your account.."
        }
        image4={HelperImg4}
        head4={"We Handle The Details"}
        title4={
          "From cargo insurance to customer billing, Parcel-King handles the details so you can focus on what you do best, moving and delivery gigs!"
        }
        image5={HelperImg5}
        head5={"You’re Covered"}
        title5={
          "All projects booked through the Parcel-King platform are covered by our extensive cargo and liability insurance policies."
        }
        buttonTxt={"Join Now"}
        dynamicUrl={"/signUpToDrive"}
      />
      <SectionCard1
        icon1={<PiNumberCircleOneBold size={80} color="#ffc400" />}
        title1={
          "To be eligible, individuals must be a minimum of 18 years of age, and it is also a requirement that they possess a valid license.."
        }
        icon2={<PiNumberCircleTwoBold size={80} color="#ffc400" />}
        title2={
          "Your vehicle must be a model year of 2000 or newer and pass a vehicle inspection. No salvage titles."
        }
        icon3={<PiNumberCircleThreeBold size={80} color="#ffc400"/>}
        title3={
          "Must be able to pass a background check and driving history check."
        }
        icon4={<PiNumberCircleFourBold size={80} color="#ffc400" />}
        title4={
          "Must have an iPhone or Android phone that is capable of running the latest version of the Parcel-King Driver App."
        }
        icon5={<PiNumberCircleFiveBold size={80} color="#ffc400" />}
        title5={"To receive direct deposits, a checking account is required. Without one, you won't be able to access this convenient payment method. Ensure you have an active checking account for seamless transactions."}

        icon6={<PiNumberCircleSixBold size={80} color="#ffc400" />}
        title6={"The applicant is required to possess the ability to communicate effectively in the English language."}

        icon7={<PiNumberCircleSevenBold size={80} color="#ffc400"/>}
        title7={"Must have valid license, registration and insurance in the state that you are driving in."}

        icon8={<PiNumberCircleEightBold size={80} color="#ffc400"/>}
        title8={"You must have minimum state insurance requirements and be compliant with local laws."}

        buttonTxt={"Apply as a Helper"}
        dynamicUrl={"/signUpToDrive"}
      />

      <br />

      <Footer />
    </>
  );
};

export default Helper;
