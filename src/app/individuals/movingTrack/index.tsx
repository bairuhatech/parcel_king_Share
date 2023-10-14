import React from 'react'
import SectionBlock1 from "../../../component/section-Block1";
import LastMile from "../../../asset/image/lastMile.jpg";
import SectionBlock2 from "../../../component/section-Block2";
import Block2Image from "../../../asset/image/lastmile2.jpg";
import Block5 from "../../homeScreen/block5";
import Block3 from "../../homeScreen/block3";
function IndividualMovingTruck() {
  return (
    <>
    <SectionBlock1
    Image={LastMile}
    head={"Moving Trucks, Moving Vans"}
    title={"Find a moving truck and movers on demand with Parcel king"}
    ButtonPrimary={"Free Estimate"}
    />
    <div>
        <SectionBlock2
        Image={Block2Image}
        title1={
            "Parcel king connects you with local movers on demand when you need help moving anything from big and bulky items to small boxes nationwide. Help is just minutes away with parcel king same day and scheduled moving services. With GoShare, you can get help moving items the same day nationwide with our unique mobile apps, website, or our Delivery API for high volume movers. Our team of moving experts can handle most of your moving needs nationwide."
          }
        />
    </div>
    <div><Block5/></div>
    <div><Block3/></div>
    </>
  )
}

export default IndividualMovingTruck