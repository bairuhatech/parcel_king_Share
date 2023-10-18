import React from "react";
import { Row, Col } from "antd";
import firstImage from "../../asset/image/WeCollect.27d31aca.gif";
import secondImage from "../../asset/image/BoockCol.gif";
import thirdImage from "../../asset/image/WeDeliver.36cbe4ab.gif";

function Block5() {
  const data = [
    {
      gif: firstImage,
      head: "Find Your Delivery Pro",
      content:
        "Get a free estimate in the app, set a pickup time and location, and find a pro - all in about a minute",
    },
    {
      gif: secondImage,
      head: "Get Movin’",
      content:
        "The Parcelking pros will load, secure, transport and unload your items. You just tell them where you want them to put it.",
    },
    {
      gif: thirdImage,
      head: "Track & Pay in the App",
      content:
        "Track the progress of your delivery, pay, tip and review - all in the app!",
    },
  ];
  return (
    <Row className="MainBlock5">
      {/* <div className="RouteDiv"> */}
      <Col md={24} className="Business-HeadTxt">
        How it Works
      </Col>
      {data.map((item: any, index: any) => (
        <Col md={7} sm={24} xs={24} className="firstStep-Block5" key={index}>
          <div className="Gif1-Block5">
            <img src={item?.gif} className="firstImage" />
          </div>
          <div className="HeaderCard-Block5">{item?.head}</div>
          <div className="text-Block5">{item?.content}</div>
        </Col>
      ))}
      {/* </div> */}
    </Row>
  );
}

export default Block5;
