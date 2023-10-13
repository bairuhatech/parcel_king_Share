import React from 'react'
import "../styles.scss";
import LastMile from "../../../asset/image/lastMile.jpg";
import Block2Image from "../../../asset/image/lastmile2.jpg";
import SectionBlock1 from '../../../component/section-Block1';
import SectionBlock2 from '../../../component/section-Block2';
import Header from "../../../component/websiteHeader";
import Block5 from "../../homeScreen/block5";
import SectionBlock3 from "../../../component/section-Block3";
import Block3 from "../../homeScreen/block3";

function IndividualHelpmoving() {
  const style = {
    background: "linear-gradient(208deg, #3d5877 0%, #151e29 100%)",
  };
  return (
    <> 
    <Header bgColor={style.background}/>
        <SectionBlock1
          Image={LastMile}
          head={"The best help for moving nationwide"}
          title={"Local and long distance last mile deliveries national"}
          ButtonPrimary={"Free Estimate"}
        />
        <div>
        <SectionBlock2
        Image={Block2Image}
        title1={
          "Parcel king connects you with local movers on demand when you need help moving anything from big and bulky items to small boxes nationwide. Help is just minutes away with parcel king same day and scheduled moving services. With GoShare, you can get help moving items the same day nationwide with our unique mobile apps, website, or our Delivery API for high volume movers. Our team of moving experts can handle most of your moving needs nationwide."
        }
        title2={
          "With Parcel king you no longer have to rely on traditional movers that take days to give you a quote, or worry about renting a moving truck and doing all of the work yourself. Instead you can get help moving your items the same day when you book with Parcel king. Our modern moving services help people like you schedule a move that is quick, convenient, and affordable."
        }
        title3={
          "Parcel king moving services are available to both businesses and individuals. Modern consumer demands and the ongoing digital revolution require businesses to adopt a digital moving and logistics strategy to support same day moves. Parcel king helps your business find vetted moving professionals with the right equipment. We also help you manage and track your moves while saving you time and money by automating manual tasks."}

      />
      </div>
      <div><Block5/></div>
      <div>
        <SectionBlock3 
        head={"Get Help Moving On Your Schedule"}
        title1={"Parcel king is redefining the way customers get help moving their items. We know you need your move to be safe, convenient, and affordable. You need movers you can trust. We have moved thousands of items, helping customers meet their moving needs while increasing their satisfaction. As moving experts, we have a passion for making your move fast, easy, and efficient. We pride ourselves on providing the highest levels of customer service."}
        title2={"Moving is our business and we’re committed to providing you with tools for easy scheduling, tracking, and payments no matter where you are. At GoShare, we understand the importance of getting help moving your items quickly and conveniently. Our platform allows customers to order in seconds and connects you to a vetted moving professional in minutes. Then our network of moving professionals will help move your items the same day. With thousands of box trucks, cargo vans, pickup trucks and sedans in our nationwide network, we’re able to connect you with the right movers and vehicle for your move."
        }
       title3={"Whether you need a few items, a single piece of furniture, or a whole home with multiple large items moved, our fleet of vetted independent movers are equipped to handle almost any move you throw at them. All of our moving professionals are licensed, insured, and background checked to give you that peace of mind you need when using GoShare to get help moving your items the same day and safely to your home."
       }
      />
      </div>
      <Block3/>
    </>
  )
}
export default IndividualHelpmoving
