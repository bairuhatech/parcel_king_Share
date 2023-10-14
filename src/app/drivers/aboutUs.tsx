import React from "react";
import Header from "../../component/websiteHeader";
import Image1 from "../../asset/image/aboutsUsImage.jpg";
import SectionBlock1 from "../../component/section-Block1";
import SectionBlock3 from "../../component/section-Block3";
import Footer from "../../component/websiteFooter";
function AboutUs() {
  const style = {
    background: "linear-gradient(208deg, #3d5877 0%, #151e29 100%)",
  };
  return (
    <>
      <Header bgColor={style.background} />
      <br />
      <br />
      <br />
      <SectionBlock1 Image={Image1} head={"About Us"} />
      <SectionBlock3
        head={"Parcel King is Paving a New Path in the Logistics Industry"}
        title1={
          "Parcel King started in 2015 with a mission to organize the world’s trucks to make them more accessible & useful. Our vision is to digitize the last mile and middle mile of the supply chain to optimize the utilization of the world’s trucks & create a more sustainable economy. Over 100,000 customers & more than 19,000 delivery professionals have trusted Parcel King to facilitate fast, reliable & low cost delivery and moving services. We currently serve Fortune 500 customers, hundreds of SMBs and thousands of consumers. Parcel King is a pioneer, a leader and one of the fastest growing companies in the digital supply chain transformation. As an economic empowerment platform, Parcel King enables our Delivery Professionals to manage their delivery business & provide critical delivery services to their local communities. Parcel King is available in over 50 major metropolitan areas nationwide, about 70% of the US population. Our proprietary technology includes our Delivery API, four mobile apps & web applications that utilize machine learning to allow our customers to optimize their supply chain operations. Our delivery professionals specialize in transporting big & bulky cargo, LTL shipments and moving services."
        }
        title2={
          "Our management team are all highly skilled and highly educated professionals with decades of combined experience in software, logistics, management, hospitality & business. Prior to Parcel King our team worked in leadership roles at companies such as: XPO Logistics, Capstone Logistics, Fluent, Compass Group & Scripps. CEO Shaun Savage was named one of San Diego’s 30 under 30ish, he was a semifinalist for E&Y Entrepreneur of the Year & one of San Diego Business Journal’s most admired CEOs."
        }
        title3={
          "Parcel King is a global organization with remote team members on 3 continents, 4 countries and 19 US states. We have offices in San Diego, CA and Fortaleza, Brazil.        "
        }
        title4={
          "Parcel King believes all our employees, contracted workers and customers deserve to be treated with dignity, decency, and respect. We created this anti-discrimination and anti-sexual harassment policy to set forth our standards for our team and those using our service, as well as our expectation that all interactions will be free of bias, prejudice, discrimination, and harassment."
        }
        ButtonTxt={"Careers"}
        dynamicURL={"/Career"}
      />

      <Footer />
    </>
  );
}

export default AboutUs;
