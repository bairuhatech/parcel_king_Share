import React from "react";
import Header from "../../../component/websiteHeader";
import SectionBlock1 from "../../../component/section-Block1";
import Image1 from "../../../asset/image/deliverCareer2.jpg";
import SectionBlock2 from "../../../component/section-Block2";
import SectionBlock3 from "../../../component/section-Block3";
import Footer from "../../../component/websiteFooter";
import { useNavigate } from "react-router";

function DriversCareer() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/careerform");
  };
  const style = {
    background: "linear-gradient(208deg, #3d5877 0%, #151e29 100%)",
  };
  return (
    <>
      <Header bgColor={style.background} />
      <br />
      <br />
      <br />
      <SectionBlock1 Image={Image1} head={"Careers"} />
      <SectionBlock3
        head={"Join the Parcel King Team"}
        title1={
          "We are hiring a few more good people who are looking for a unique opportunity to grow both personally and professionally. You will achieve more than you thought possible and be a part of a team that is making a global impact. Parcel King started in 2015 with a mission to organize the world’s trucks to make them more accessible & useful. Our vision is to digitize the last mile and middle mile of the supply chain to optimize the utilization of the world’s trucks & create a more sustainable economy. Over 100,000 customers & more than 15,000 delivery professionals (drivers) have trusted Parcel King to facilitate fast, reliable & low cost delivery and moving services. We currently serve eight Fortune 500 customers, hundreds of SMBs and thousands of consumers. Parcel King is a pioneer, a leader and one of the fastest growing companies in the digital supply chain transformation. As an economic empowerment platform, Parcel King enables our drivers to manage their delivery business & provide critical delivery services to their local communities. By the end of 2022 Parcel King’s service will be available in over 40 major metropolitan areas nationwide, covering 63% of the US population. Our proprietary technology includes our Delivery API, four mobile apps & web applications allowing our customers to digitize their supply chain operation. Our delivery professionals specialize in transporting big & bulky cargo, LTL shipments and moving services."
        }
        title2={
          "Our management team are all highly skilled and highly educated professionals with decades of combined experience in software, logistics, management, hospitality & business. Prior to Parcel King our team worked in leadership roles at companies such as: XPO Logistics, Capstone Logistics, Fluent, Compass Group & Scripps. CEO Shaun Savage was named one of San Diego’s 30 under 30ish, he was a semifinalist for E&Y Entrepreneur of the Year & one of San Diego Business Journal’s most admired CEOs."
        }
        title3={
          "Parcel King is a global organization with a remote team members on 3 continents, 4 countries and 19 US states. We have offices in San Diego, CA and Fortaleza, Brazil.Our story has been featured in major news outlets across the country including LA Times, Forbes, San Diego Union Tribune, CBS, NBC, ABC and many more. See press coverage.Parcel King has been recognized as a Top Work by the San Diego Union Tribune in 2022.  Parcel King is an EvoNexus graduate and has been recognized as a “Fastest Growing Company” from The University of Delaware 5 years in a row. We were named a Cool Company by the San Diego Venture Group three times."
        }
        ButtonTxt={"Apply"}
        dynamicURL={"/careerform"}
      />
      <Footer />
    </>
  );
}

export default DriversCareer;
