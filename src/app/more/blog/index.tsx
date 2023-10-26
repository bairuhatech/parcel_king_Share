import React from "react";
import Header from "../../../component/websiteHeader";
import Footer from "../../../component/websiteFooter";
import Twitterbox from "../../drivers/twitterbox";
import MyCarousel from "./carousel";
import { Row, Col } from "react-bootstrap";
import img1 from "../../../asset/image/delivery.jpg";
import img2 from "../../../asset/image/deliverCareer2.jpg";
import img3 from "../../../asset/image/deliverLocation1.jpg";
import img4 from "../../../asset/image/deliveryBoy.jpg";
import Recentposts from "../../drivers/recentposts";
const MoreBlog = () => {
  const style = {
    background: "linear-gradient(208deg, #3d5877 0%, #151e29 100%)",
  };
  const array = [
    {
      img: img1,
      head: "How Parcel King Can Benefit Retailers with Shorter and Cheaper Last Mile Delivery",
      title: "OCT 19,2023",
    },
    {
      img: img2,
      head: "Embracing the Future of Delivery: How Parcel King’s Artificial Intelligence is Modernizing Retail Delivery",
      title: "OCT 19,2023",
    },
    {
      img: img3,
      head: "Why Parcel King Collects Proof of Delivery for Every Project",
      title: "OCT 19,2023",
    },
    {
      img: img4,
      head: "Best Cargo Vans 2023",
      title: "OCT 19,2023",
    },
  ];
  return (
    <>
      <Header bgColor={style.background} />
      <br />
      <br />
      <br />
      <br />

      <div className="moreblog-box1">
        <div className="moreblog-box2">
          <div className="moreblog-text1">Parcel Kings's Blog</div>
          <div className="headerOfDelivery">The Dispatch</div>
          <div className="moreblog-text1">
            Your Place For Creative Moving & Delivery Ideas
          </div>
          <br />
          <br />
          <MyCarousel />
          <br />
          <br />
          <br/>
          <div className="blogleft-box1">
            <div className="blogleft-box2">
              <Row className="g-0">
              {array.map((item: any) => {
                return (
                    <Col md={6} xs={12}>
                      <div className="blogleft-box3">
                        <img className="imgclass" src={item.img} alt="#" />
                        <div className="moreblog-text3">{item.head}</div>
                        <div className="moreblog-text4">{item.title}</div>
                      </div>
                    </Col>
                );
              })}
              </Row>
            </div>
          

          <div className="blogright-box1">
          < Recentposts/>       
            <Twitterbox />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MoreBlog;
