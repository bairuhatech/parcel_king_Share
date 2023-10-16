import React from "react";
import { Row, Col } from "antd";
import truck from "../../asset/image/PKTruck.png";
import van from "../../asset/image/PKVan.png";
import PickupTruck from "../../asset/image/PKtruckSmall.png";
import car from "../../asset/image/PKCar.png";

function Block2() {
  const data = [
    {
      image: truck,
      title: "Box Truck",
      description:
        "Best for Less than truckload (LTL), pallets, 1-2 bedroom apartments, small homes",
    },
    {
      image: van,
      title: "Cargo Van",
      description:
        "Great for cargo that need to be kept dry, 1-4 big box items, studio apartments, queen mattress w/ box",
    },
    {
      image: PickupTruck,
      title: "Pickup Truck",
      description:
        "Great for 1-2 big box items, single pieces of furniture, lumber & home improvement",
    },
    {
      image: car,
      title: "Courier",
      description:
        "Perfect for small parcels, documents, packages, and retail purchases. No furniture",
    },
  ];
  return (
    <Row className="StartOfDelivery">
      <Col className="Business-HeadTxt" md={24}>
        We Make Delivery Quick And Easy
      </Col>
      <Col md={24} className="secondBigText">
        <div className="secondBigTextDiv">
          ParcelKing connects you with background checked delivery professionals
          on demand for help with last mile delivery, middle mile logistics and
          moving services. From pallets to furniture and parcels, if you need
          something delivered or moved, we’ve got you covered. Our nationwide
          network of more than 20,000 box trucks, cargo vans, pickup trucks and
          sedans are available to help you the same day or you can schedule in
          advance. Get a free estimate before you book on our website or by
          downloading our highly rated mobile apps on iPhone and Android.
          Business customers can integrate ParcelKing using our Delivery API.
        </div>
      </Col>
      <Row className="cardsDiv">
        {data.map((item, index) => (
          <Col md={5} sm={10} xs={20} className="Vehiclecol" key={index}>
            <div className="vehicleImage">
              <img src={item?.image} className="imageSize" />
            </div>
            <div className="ImageHeader">{item?.title}</div>
            <div className="Maintext">{item?.description}</div>
          </Col>
        ))}
      </Row>
    </Row>
  );
}

export default Block2;
