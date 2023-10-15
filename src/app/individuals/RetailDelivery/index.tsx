import React from "react";
import SectionBlock1 from "../../../component/section-Block1";
import LastMile from "../../../asset/image/lastMile.jpg";
import Header from "../../../component/websiteHeader";
import Footer from "../../../component/websiteFooter";
import SectionBlock2 from "../../../component/section-Block2";
import Image1 from "../../../asset/image/deliverCareer.jpg";
import Block3 from "../../homeScreen/block3";
import SectionBlock3 from "../../../component/section-Block3";
import Block5 from "../../homeScreen/block5";
import Block6 from "../../homeScreen/block6";
function IndividualRetaildelivery() {
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
        Image={LastMile}
        head={"The best help for moving nationwide"}
        title={"Local and long distance last mile deliveries national"}
        ButtonPrimary={"Free Estimate"}
      />
      <SectionBlock2
        Image={Image1}
        title1={
          "GoShare connects you with local retail Delivery Professionals on demand to help you deliver anything from big and bulky items to small parcels nationwide. Help is just a few clicks away with GoShare’s same day and scheduled retail delivery service. With GoShare, you can deliver or move furniture, mattresses, electronics, and more the same day nationwide with our unique mobile apps, website, or our Delivery API for high volume shippers. Our team of retail delivery experts can handle most of your retail delivery needs nationwide."
        }
        title2={
          "Our retail delivery service is a convenient alternative to traditional retail delivery options. With GoShare you can book retail delivery services on demand from almost anywhere. We can offer several levels of service including white glove, threshold, or curbside deliveries for your retail locations."
        }
        title3={
          "Modern consumer demands and the ongoing digital revolution require retail businesses to adopt a digital retail delivery and logistics strategy to support same day home delivery. GoShare helps you find vetted retail Delivery Professionals with the right equipment and help you manage and track your retail deliveries while saving you time and money by automating manual tasks. GoShare supports ship from store programs with retailers of all sizes."
        }
      />
      <Block5 />

      <SectionBlock3
        head={"Your Retail Delivery Service Partner"}
        title1={
          "GoShare is redefining the way retailers deliver products to customers. We’re revolutionizing how businesses manage last mile and middle mile logistics through our crowdsourced network of Delivery Professionals and modern technology solutions. Businesses can leverage our retail delivery platform to reduce costs, improve delivery velocity, and provide a seamless retail delivery experience for their customers. Our retail delivery solutions include: automated dispatching, Proof of Delivery (POD) photographs, automated invoicing, rapid driver matching using Machine Learning (ML), real time order tracking, returns, and a record of each delivery."
        }
        title2={
          "From pallets to parcels, we can help you get your retail business to deliver your products quickly and safely. Our proprietary technology gives you the flexibility to book retail deliveries from anywhere. Deliveries can be scheduled from any device on our website or using our highly rated mobile apps. High volume shippers can integrate with our Delivery API for a white labeled solution. Connect your TMS, POS, WMS, or ERP system to automate order flow, exception handling, and payments."
        }
        title3={
          "Whether you have a small footprint or a large operation, we are here to serve you with innovative retail delivery solutions that scale as you grow. Our last mile and middle mile retail delivery services allow retailers to wow their customers with convenient, fast, and modern store-to-home shipping. Our network of vetted independent drivers is equipped to handle almost anything you throw at them. All of our retail delivery professionals are licensed, insured, and background checked to give you that peace of mind you need to run your business."
        }
      />
      <Block3 />
      <Block6 />
      <Footer />
    </>
  );
}

export default IndividualRetaildelivery;
