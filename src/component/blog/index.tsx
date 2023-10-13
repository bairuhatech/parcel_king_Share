import React from "react";
import "./style.scss";
import { Row, Col, Container } from "react-bootstrap";
const data = [
  {
    img: "//wpcdn.goshare.co/wp-content/uploads/2023/02/GoShare-app-screen-and-phone.jpg",
    text: " How Parcel king Can Benefit Retailers with Shorter and Cheaper last mile delivery",
  },
  {
    img: "//wpcdn.goshare.co/wp-content/uploads/2023/09/Artificial-Intelligence-AI-GoShare.png",
    text: " Embracing the Future: Parcel king AI Modernizes Retail Delivery",
  },
  {
    img: "//wpcdn.goshare.co/wp-content/uploads/2023/02/GoShare-app-screen-and-phone.jpg",
    text: " Why Parcel king Collects Proof of Delivery for Every Project",
  },
  {
    img: "//wpcdn.goshare.co/wp-content/uploads/2023/08/Mercedes-Benz-Sprinter-jpeg.webp",
    text: " Best Cargo Vans 2023",
  },
  {
    img: "//wpcdn.goshare.co/wp-content/uploads/2023/08/Screenshot-2023-08-04-at-9.55.12-AM-2-min.png",
    text: " Customer Spotlight: Goodr",
  },
  {
    img: "//wpcdn.goshare.co/wp-content/uploads/2023/07/Screen-Shot-2023-07-16-at-10.54.04-PM.png",
    text: "Prepare Your Business for the UPS Strike with Parcel king",
  },
  {
    img: "//wpcdn.goshare.co/wp-content/uploads/2023/07/Screen-Shot-2023-07-14-at-4.56.51-PM.png",
    text: " Best Box Trucks 2023",
  },
  {
    img: "//wpcdn.goshare.co/wp-content/uploads/2023/07/Screen-Shot-2023-07-03-at-2.26.43-PM.png",
    text: " Best Electric Pickup Trucks 2023",
  },
  {
    img: "//wpcdn.goshare.co/wp-content/uploads/2023/06/Screenshot-2023-06-21-at-2.09.21-PM-2-min.png",
    text: "Meet James our Driver of the Month June 2023",
  },
];

function DispatchBlog() {
  return (
    <div className="dispatchBlog-Box1">
      <div className="dispatchBlog-Box2">
        <div className="block-Txt1">The Dispach Blog</div>
        <div className="dispatchBlog-Box4">
          {" "}
          Follow Our Blog for Helpful Articles on How to succeed With Go Share{" "}
        </div>
        <Container fluid>
          <Row className="">
            {data.map((item) => (
              <Col md={6}>
                <div className="dispatchBlog-Box5">
                  <div className="dispatchBlog-Box6">
                    <img src={item.img} className="card-image" />
                    <div className="dispatchBlog-Box7">{item.text}</div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default DispatchBlog;
