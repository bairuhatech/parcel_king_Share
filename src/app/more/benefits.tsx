import React from "react";
import Header from "../../component/websiteHeader";
import SectionBlock1 from "../../component/section-Block1";
import Image1 from "../../asset/image/shakeHand.jpg";
import SectionBlock3 from "../../component/section-Block3";
import SectionBlock4 from "../../component/section-Block4";
import Footer from "../../component/websiteFooter";
function Benefits() {
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
        head={
          "Driver Benefits: Discounts on Healthcare, Vehicles, Tires and Cash Advances"
        }
      />
      <SectionBlock3
        head={"Benefits and Perks of Working with Parcel King"}
        title1={
          "Parcel King is not only about making money. We are about building a community of delivery professionals who want to be their own boss. We understand that in order to be the premier destination for truck/van/car owners we have to provide more incentives than money alone.  If you are an active Parcel King Delivery Professional, you will have access to benefits and perks negotiated for you by our executive team. Don’t forget to check back here often and follow us on social media for updates to our driver benefits program."
        }
      />
      <SectionBlock3
        head={"Health Benefits"}
        title1={
          "We know how stressful it can be to find the right health, dental, vision & life insurance coverage.  We’ve partnered with Stride Health, a company that focuses on helping independent workers save time and money getting these important insurance coverages. You can use Stride to sign up for:"
        }
        title2={
          "Health Insurance: Stride will search through all of the Affordable Care Act health insurance plans available to you, check to see if you qualify for financial assistance, and help you choose the right plan. On average, Stride members save $360 per month on health insurance, and 40% pay less than $25 per month for coverage."
        }
        title3={
          "Dental Insurance: Stride’s plans start at just $30 per month, come with 2 checkups per year, and are accepted at over 300,000 locations."
        }
        title4={
          "Life Insurance: Stride’s plans start at just $5 per month, have flexible cancellation terms and you don’t need to worry about any annoying phone calls."
        }
      />
      <SectionBlock4
        head={"New Vehicle Discounts"}
        title1={
          "Parcel King has partnered with GM (General Motors) to provide delivery professionals with access to deeply discounted vehicle pricing on select 2021 and 2022 models of Chevrolet, GMC, Buick, and Cadillac vehicles!"
        }
        title2={
          "To view the full list of vehicles and discounts, or to get the processing code required to claim this discount, contact us. The processing code must be provided to your local GM dealer to get the pre-negotiated invoice credit off the listed price."
        }
        title3={
          "This program includes a wide variety of cars, SUVs, pickup trucks, cargo vans, and box trucks. If the dealer invoice price of a comparably equipped Eligible Vehicle is reduced, General Motors reserves the right to reduce the invoice credit by the amount of the dealer invoice price reduction. Always confirm your final discount prior to making your purchase. Subject to availability."
        }
      />
      <SectionBlock3
        head={"Cash Bonuses and Contests"}
        title1={
          "All active Parcel King delivery pros are eligible to participate in our monthly leaderboard contest, local promotions, and other fun games. You will earn points for every completed delivery. You can check the leaderboard in the app to see the top drivers locally, nationally and where you rank. Top delivery professionals can win cash bonuses. You may opt out of the the leaderboard contest."
        }
      />
      <SectionBlock3
        head={"Tires and Service"}
        title1={
          "Save 10% on tires, labor, and parts from Firestone by mentioning that you are a Parcel King Delivery Professional. You will need to show your Parcel King app with the active driver badge to qualify."
        }
      />
      <Footer />
    </>
  );
}

export default Benefits;
