import React from "react";
import Header from "../../component/websiteHeader";
import SectionBlock1 from "../../component/section-Block1";
import Image1 from "../../asset/image/hero-img-home_1.jpg";
import SectionBlock3 from "../../component/section-Block3";
import Block8 from "../homeScreen/block8";
import Footer from "../../component/websiteFooter";
function IndividualsReview() {
  const style = {
    background: "linear-gradient(208deg, #3d5877 0%, #151e29 100%)",
  };
  return (
    <>
      <Header bgColor={style.background} />
      <br />
      <br />
      <br />
      <SectionBlock1 Image={Image1} head={"Parcel King Reviews - Customers"} />
      <SectionBlock3
        head={"Real Reviews From GoShare Customers"}
        subHead1={"10 out of 10"}
        title1={
          "“The app is easy to navigate and customer service are paying attention to your needs and find the best possible ways to help with your project. It’s a 10/10 for me…”"
        }
        subHead2={"Above and Beyond"}
        title2={
          "This was the first time I used GoShare and I found it extremely easy and the driver I used was a great person going above and beyond what I would have expected. I will be using this application rather than renting a truck from here on in."
        }
        subHead3={"Smooth Transition"}
        title3={
          "This was the coolest service ever! I live alone and have a small car, so this was very helpful. Within 30 minutes of requesting service, someone was there to help. Customer service was texting me a long way. Overall, it was a very easy experience and I’m very enthusiastic about supporting this business."
        }
        subHeader4={"Helpful Customer Service"}
        title4={
          "“First time experience with them. They were right on the ball. Customer service very helpful in making things work well and took care of my concerns. They were right on time. Good estimate for time n travel. Very happy and would highly recommend both company app and moving team”"
        }
        subHead5={"Support the Local Economy"}
        title5={
          "Such an amazing app. Helped me save $600 on furniture by buying secondhand instead of relying on Amazon for free delivery. I’ve already recommended this to a bunch of my friends. The guy who moved my sofa was on time, polite, extremely careful, and very professional. The app is very easy to use and gives you accurate estimates."
        }
        subHead6={"Helpful Customer Service"}
        title6={
          "“First time experience with them. They were right on the ball. Customer service very helpful in making things work well and took care of my concerns. They were right on time. Good estimate for time n travel. Very happy and would highly recommend both company app and moving team”"
        }
        subHead7={"Delivered Right to My Door"}
        title7={
          "“I love to shop at Homegoods but in the past I always passed on larger items as I stood contemplating how I would get the piece home. Now I don’t have to worry! With GoShare I can purchase those items I want and have them delivered right to my door. I purchased a beautiful outdoor set today at 11am signed up for GoShare at 2:30 and my furniture was at my house by 4:45pm. I love this service. John my delivery man was awesome too”"
        }
        subHead8={"Last-Minute Delivery Help in 15 Minutes"}
        title8={
          "“Needed a new couch delivered from Big Lots without any planning. Store was closing, googled this App and within 15 minutes had a professional driver pick up and deliver to my house. So simple from start to finish.”"
        }
        subHead9={"Helpful Apartment Movers"}
        title9={
          "“I can’t say enough great things about this company. I just moved here from the east coast and have been struggling to get all my furniture in my apartment by myself. These guys did EVERYTHING for me! They picked up my furniture and delivered it to my third level apartment, and for an AMAZING PRICE! I highly recommend Esteban he was super friendly and funny! I know for sure I’ll be using them again in the future!”"
        }
        subHead10={"Great App and Customer Service"}
        title10={
          "“This app has been a lifesaver! I don’t have a car so getting anything large is a pain. This has taken the hassle out of getting things home. I’ve used the service a few times now and will keep using it. Highly recommend! Also, the customer service has been fast and friendly. Something that isn’t as common as it used to be. Their chat has helped me get questions answered super quick.”"
        }
      />
      <Block8 />
      <Footer />
    </>
  );
}

export default IndividualsReview;
