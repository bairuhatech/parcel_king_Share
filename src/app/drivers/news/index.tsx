import React from "react";
import Header from "../../../component/websiteHeader";
import SectionBlock1 from "../../../component/section-Block1";
import Image1 from "../../../asset/image/hero-img-home_1.jpg";
import SectionBlock3 from "../../../component/section-Block3";
import SectionCard1 from "../../../component/section-Card1";
import NewsImg1 from "../../../asset/image/Forbes_logo.svg_-300x78.png";
import NewsImg2 from "../../../asset/image/enterpreneur.png";
import NewsImg3 from "../../../asset/image/losAngeles.jpg";
import NewsImg4 from "../../../asset/image/techco.png";
import NewsImg5 from "../../../asset/image/usa-today-logo-300x90.png";
import NewsImg6 from "../../../asset/image/news4.png";
import NewsImg7 from "../../../asset/image/nbc-news-logo1-300x100.png";

import Footer from "../../../component/websiteFooter";
import { Col, Container, Row } from "react-bootstrap";
import "../styles.scss";
function News() {
  const style = {
    background: "linear-gradient(208deg, #3d5877 0%, #151e29 100%)",
  };
  const data = [
    {
      image: NewsImg1,
    },
    {
      image: NewsImg2,
    },
    {
      image: NewsImg3,
    },
    {
      image: NewsImg4,
    },
    {
      image: NewsImg5,
    },
    {
      image: NewsImg6,
    },
    {
      image: NewsImg7,
    },
  ];
  return (
    <>
      <Header bgColor={style.background} />
      <br />
      <br />
      <br />
      <SectionBlock1 Image={Image1} head={"News"} />
      <SectionBlock3
        head={"Delivering Newsworthy Change"}
        title1={
          "Parcel king is a rapidly growing tech start-up dedicated to flipping the logistics industry on its head. And, that gets some notice! Check out a sample of our latest press coverage below."
        }
      />
      <Container>
        <div className="driverNews-Box1">
          <Row>
            {data.map((item: any) => {
              return (
                <>
                  <Col md={3}>
                    <div className="driverNews-Box2">
                      <div className="driversNews-Box3">
                        <img
                          className="driversNews-img"
                          src={item.image}
                          alt=""
                        />
                      </div>
                    </div>
                  </Col>
                </>
              );
            })}
          </Row>
        </div>
      </Container>
      <SectionBlock3
        head={"Parcel King Reviews"}
        title1={
          "Read what the media had to say, but want to know what real, everyday customers and delivery pros think about Parcel king? Parcel king has thousands of 5-star reviews from customers that have used our service. Read a few of our favorites at the link below."
        }
        ButtonTxt={"parcel king Review"}
        dynamicURL={"/individuals-review"}
      />
      <Footer />
    </>
  );
}

export default News;
