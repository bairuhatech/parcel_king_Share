import React from 'react'
import "../styles.scss";
import BusinessBlock1 from "../../business/component/business-Block1";
import LastMile from "../../../asset/image/lastMile.jpg";
import BusinessBlock2 from "../../business/component/business-Block2";
import Block2Image from "../../../asset/image/lastmile2.jpg";
function IndividualHelpmoving() {
  return (
    <>
        <BusinessBlock1
          Image={LastMile}
          head={"The best help for moving nationwide"}
          title={"Local and long distance last mile deliveries national"}
          ButtonPrimary={"Free Estimate"}/>
        <div>
        <BusinessBlock2
        Image={Block2Image}
        title1={
          "Parcel king connects you with local movers on demand when you need help moving anything from big and bulky items to small boxes nationwide. Help is just minutes away with parcel king same day and scheduled moving services. With GoShare, you can get help moving items the same day nationwide with our unique mobile apps, website, or our Delivery API for high volume movers. Our team of moving experts can handle most of your moving needs nationwide."
        }
        title2={
          "With Parcel king you no longer have to rely on traditional movers that take days to give you a quote, or worry about renting a moving truck and doing all of the work yourself. Instead you can get help moving your items the same day when you book with Parcel king. Our modern moving services help people like you schedule a move that is quick, convenient, and affordable."
        }
        title3={
          "Parcel king moving services are available to both businesses and individuals. Modern consumer demands and the ongoing digital revolution require businesses to adopt a digital moving and logistics strategy to support same day moves. Parcel king helps your business find vetted moving professionals with the right equipment. We also help you manage and track your moves while saving you time and money by automating manual tasks."
        }
      />
      </div>
    </>
  )
}
export default IndividualHelpmoving
