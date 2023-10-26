import React from "react";
import Header from "../../../component/websiteHeader";
import Footer from "../../../component/websiteFooter";
import SectionBlock1 from "../../../component/section-Block1";
import Faqimg from "../../../asset/image/storage.jpg";
import Collapse1 from "./collapse";

const Faq = () => {
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
        Image={Faqimg}
        head={"Frequently Asked Questions"}
        title={"For Delivery Pros"}
        ButtonPrimary={"Join Our Platform"}
        dynamicUrl={"/signUpToDrive"}
      />
      <br />
      <br />
      <br />
      <div className="faqbox-1">
        <div className="vehiclerequirements-text2">
          Common Questions and Answers
        </div>
      <br />
      <Collapse1 />
      </div>
      <Footer />
    </>
  );
};

export default Faq;
