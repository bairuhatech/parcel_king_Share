import React from "react";
import Header from "../../component/websiteHeader";
import SectionBlock1 from "../../component/section-Block1";
import Image1 from "../../asset/image/slick1.jpg";
import SectionBlock3 from "../../component/section-Block3";
import Image2 from "../../asset/image/vanDriver.jpg";
import SectionBlock2 from "../../component/section-Block2";
import Footer from "../../component/websiteFooter";
function DriverReview() {
  const style = {
    background: "linear-gradient(208deg, #3d5877 0%, #151e29 100%)",
  };
  return (
    <>
      <Header bgColor={style.background} />
      <br />
      <br />
      <br />
      <SectionBlock1 Image={Image1} head={"Parcel king Driver Reviews"} />
      <SectionBlock3
        head={"Drivers Give Parcel-King Great Reviews"}
        title1={
          "What is it like to drive with Parcel-King? We’re proud to have so many positive reviews from the drivers that use Parcel-King to find hotshot loads, last mile delivery runs, moving jobs and hauling gigs. Read and watch video reviews below from real Parcel-King drivers and hear about their experience working with Parcel-King."
        }
      />
      <SectionBlock2
        Image={Image2}
        head={
          "“I like the complete autonomy of schedule. Work when I want, play when I want.”"
        }
        buttonTxt={"Apply"}
        dynamicURL={"/signUpToDrive"}
      />
      <SectionBlock3
        head={"Parcel-King Driver Reviews"}
        subHead1={"Extra Income"}
        title1={
          "Since teaming up with Parcel-King, it has been a great experience and a wonderful supplemental source of income. I enjoy the flexibility of working during the hours that are most suitable for me and selecting jobs that best coincide with my schedule. I highly recommend those seeking additional or part-time jobs to join this newly found reputable gig.\n\nPersonally, I selected to join Parcel-King amongst other companies because of their advertised pay rate – $42-67 an hour, which has been proven to be true!      ---- Paolo V"
        }
        subHead2={"Reliable and Easy"}
        title2={
          "“I’m a driver and a customer. Great app. Easy, convenient and very reasonable prices. Really reliable as well. Recommend for everyone to use it. Parcel-King keep up the good work and thank you for making moves and deliveries so easy.”  ---------- Niku Star"
        }
        subHead3={"Part-Time Earnings"}
        title3={
          "“Working with Parcel-King for about 5mo making great money on a part-time basis 3k bam! I love the team very helpful when I need help, can’t wait to meet them in person! Grateful!”  ------- Art L."
        }
        subHead4={"Easy Money"}
        title4={
          "“Really easy money for the amount of time taken to do this task. Can’t wait for the next one 👍”  ----- Derrik Lemuel"
        }
        subHead5={"Top On-Demand Delivery Drivers"}
        title5={
          "“Top shelf Delivery drivers on demand. App and service work amazingly well for any customer need. Highly recommend.” -----– R. Kumarsky"
        }
        ButtonTxt={"Apply"}
        dynamicURL={"/signUpToDrive"}
      />
      <Footer />
    </>
  );
}

export default DriverReview;
