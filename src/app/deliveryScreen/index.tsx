import React from "react";
import { Row, Col } from "antd";
import "./styles.scss";
import truck from "../../asset/image/ShareTruck.png";
import van from "../../asset/image/shareVan.png";
import PickupTruck from "../../asset/image/truckSmall.png"
import car from "../../asset/image/shareCar.png"

function DeliveryScreen() {
  const data = [
    {
      image: truck,
      title: "Box Truck",
      description: "Best for Less than truckload (LTL), pallets, 1-2 bedroom apartments, small homes",
    },
    {
      image: van,
      title: "Cargo Van",
      description: "Great for cargo that need to be kept dry, 1-4 big box items, studio apartments, queen mattress w/ box",
    },
    {
      image: PickupTruck,
      title: "Pickup Truck",
      description: "Great for 1-2 big box items, single pieces of furniture, lumber & home improvement",
    },
    {
      image: car,
      title: "Courier",
      description: "Perfect for small parcels, documents, packages, and retail purchases. No furniture",
    },
  ];
  return (
    <Row className="StartOfDelivery">
      <Col className="headerOfDelivery" md={24}>
        We Make Delivery Quick And Easy
      </Col>
      <Col md={12} className="firstpart">
        GoShare is your trusted solution for a wide range of delivery and
        logistics needs. Our platform connects you with a vast network of
        background-checked delivery professionals, ensuring that you receive
        reliable and efficient service every time. Whether you require last-mile
        delivery, middle-mile logistics, or assistance with moving goods,
        GoShare has you covered. Our diverse fleet includes more than 20,000
        vehicles, including box trucks, cargo vans, pickup trucks, and sedans,
        strategically positioned across the nation. This extensive network
        enables us to respond promptly to your requests, offering same-day
        assistance or allowing you to schedule deliveries and moves in advance.
        At GoShare, transparency is a priority. You can obtain a free estimate
        for your delivery or moving project right from our website or by
        downloading our top-rated mobile apps, available for both iPhone and
        Android users. This upfront pricing ensures that you know what to expect
        before you make a booking.
      </Col>
      <Col md={12} className="deliveryImages">
        <Col md={12} className="firstCard">
          <div className="carImage">

          </div>
        </Col>
        <Col md={12} className="secondCard"></Col>
      </Col>
    </Row>
  );
}

export default DeliveryScreen;
