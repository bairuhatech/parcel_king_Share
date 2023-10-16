import React from "react";
import "./style.scss";
import { Row, Col } from "react-bootstrap";
import Shedule from "../../asset/image/shedule-time.jpg";
import Affortable from "../../asset/image/affortable-price.jpg";
import Protect from "../../asset/image/prtct_2.jpg";
import FindProduct from "../../asset/image/findProtect.png";
function Block3() {
  const data = [
    {
      image: Shedule,
      head: "Flexible Scheduling",
      title:
        "Say goodbye to long delivery windows. Set a time that works for you. Schedule a pickup 7 days a week between 5:00am-11:30pm",
    },
    {
      image: Affortable,
      head: "Affordable Pricing",
      title:
        "We use machine learning to give you a fair and accurate upfront price estimate. Save 50% compared to traditional providers.",
    },
    {
      image: FindProduct,
      head: "Convenience",
      title:
        "Our technology makes it easier than ever to book, track, communicate & pay. Request a Delivery Professional in one minute.",
    },
    {
      image: Affortable,
      head: "Peer-Reviewed",
      title:
        "All delivery are reviewed by other customers like you. This helps us make sure you only get the best delivery professionals every time.",
    },
    {
      image: Protect,
      head: "You are Protected",
      title:
        "Our comprehensive cargo insurance and liability coverage ensure the safety and protection of your goods in transit. ",
    },
    {
      image: Affortable,
      head: "Safe and Reliable",
      title:
        "All Parcel king delivery professionals are licensed, insured, background checked and reviewed.",
    },
  ];
  return (
    <>
      <div className="block3-Box1">
        <div className="Business-HeadTxt">Why Choose Parcel King</div>
        <div className="block3-Box3">
          for Last Mile Delivery and Moving Services?
        </div>
        <div className="block3-Box5">
          {data.map((item: any) => {
            return (
              <>
                <div className="block3-Box6">
                  <div className="block3-Box7">
                    <div className="block3-Box8">
                      <img className="block3-Img" src={item.image} alt="" />
                    </div>
                    <div className="block3-Txt1">{item.head}</div>
                    <div className="block3-Txt2">{item.title}</div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Block3;
