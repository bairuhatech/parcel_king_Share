import React from "react";
import Header from "../../../component/websiteHeader";
import SectionBlock3 from "../../../component/section-Block3";
import Image1 from "../../../asset/image/call_Attender.jpg";
import SectionBlock1 from "../../../component/section-Block1";
import DriverContactForm from "./component/form";
import Footer from "../../../component/websiteFooter";
function Contactus() {
  const style = {
    background: "linear-gradient(208deg, #3d5877 0%, #151e29 100%)",
  };
  return (
    <>
      <Header bgColor={style.background} />
      <br />
      <br />
      <br />
      <SectionBlock1 Image={Image1} head={"Contact Us"} />
      <SectionBlock3
        head={"Customer & Driver Support"}
        title1={
          "Thank you for your interest in working with GoShare! We look forward to assisting you. Please review our self-help links below. If you do not find an answer to your questions, you can reach us via chat and email. Customer Support is available weekdays from 4:00 AM – 9:00 PM PST and weekends from 5:00 AM – 9:00 PM PST. Chat is the fastest way to reach us which you can start by clicking on the blue icon on the bottom right of this screen. Our offices will be closed on major holidays including New Year’s Day, Memorial Day, the Fourth of July, Thanksgiving, and Christmas."
        }
      />
      <DriverContactForm />
      <Footer />
    </>
  );
}

export default Contactus;
