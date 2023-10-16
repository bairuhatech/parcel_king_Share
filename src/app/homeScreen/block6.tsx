import React, { useRef } from "react";
import { Row, Col } from "react-bootstrap";
// import "./styles.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slick1 from "../../asset/image/slick1.jpg";
import slick2 from "../../asset/image/slick2.jpg";
import slick3 from "../../asset/image/slick3.jpg";
import slick4 from "../../asset/image/slick4.jpg";
import slick5 from "../../asset/image/slick5.jpg";
import Slider from "react-slick";

function Block6() {
  const sliderRef = useRef<any>(null);
  const settings = {
    infinite: true,
    dots: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  function truncateText(text: any, maxWords: any) {
    if (!text) {
      return "";
    }

    const words = text.split(" ");

    if (words.length <= maxWords) {
      return text;
    }

    const truncatedText = words.slice(0, maxWords).join(" ") + "...";
    return truncatedText;
  }

  const data = [
    {
      image: slick1,
      title: "' GREAT APP '",
      description:
        "ParcelKing is the Uber of when you need a truck or a van and a guy. Great App. Fast Response. and reasonably priced. This will become more & more popular when the word gets out. I had a guy come out with a beautiful new cargo van he bought just to be a ParcelKing Driver. Great attitude and excellent service.",
      name: "Will J.",
    },
    {
      image: slick2,
      title: "' GREAT SERVICE '",
      description:
        "I have found pieces of furniture at Home Goods in the past but neglected to purchased due to not having the right truck to transport- yesterday I found 2 gorgeous pieces to use in our rental home at the beach & was so happy to see the advertisement right there on top of the tv cabinet I wanted- I signed up while waiting in line & just had both pieces delivery by Henry! Very professional & punctual! Love this service & will ask for Henry in the future!",
      name: "Beth V.",
    },
    {
      image: slick3,
      title: "' AMAZING SERVICE, FAIR PRICES '",
      description:
        "Loved my first experience with this company and app. The driver was able to pick up the furniture on his own without me having to meet at the store I bought the furniture from, which was convenient with my busy schedule. The driver took very good care of the furniture, using blankets and tie downs. The driver also helped move it into my house, and wow was it heavy. The driver went above and beyond, I couldn't be more pleased with this app. Thanks for running a great service.",
      name: "Crystal B.",
    },
    {
      image: slick4,
      title: "' PROFESSIONAL AND PUNCTUAL '",
      description:
        "Had a wonderful experience using ParcelKing to get a power recliner sofa with 6 big boxes delivered from local Costco store to my apartment. The individuals were very professional and punctual. The ParcelKing platform was simple and straight forward and I got response within minutes of submitting move request. I would recommend anyone looking to do moves or pickup to use their services. In fact while at Costco many people enquires about how and what I am using to move. The plus was that the platform allows you to add a helper to your request. Happy Moving",
      name: "M.Pandey.",
    },
    {
      image: slick5,
      title: "' SUPER EASY, CONVENIENT AND FAST '",
      description:
        "Super easy. Convenient and fast. I was needing a pickup and delivery of a package so of course I went to Google and found ParcelKing. Being reluctant, I did it, and the outcome was great. If you are in need of a quick, super easy and convenient delivery company ParcelKing is your company. I'm from Atlanta, GA I did try reaching out to other companies before this with no response. ParcelKing allowed me to do everything straight from the app, including track my package. Thank You ParcelKing.",
      name: "Curren D.",
    },
  ];
  return (
    <>
      <Row className="Block6-fullpage g-0">
        <Col md={24} sm={24} xs={24} className="Business-HeadTxt">
          Our Customers Love ParcelKing
        </Col>
        <Col md={24} sm={24} xs={24} className="Block6-corosal">
          <div className="Sliders-Block6">
            <Slider ref={sliderRef} {...settings}>
              {data.map((item: any, index: any) => (
                <div className="Block6-cards" key={index}>
                  <div className="Block6-originalCards">
                    <div
                      className="Block6-imagediv"
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                    <div className="Block6-titleCard">{item.title}</div>
                    <div className="Block6-titleCard">{item.name}</div>
                    <div className="Block6-detailsdiv">{item?.description}</div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </Col>
        <Col md={24} sm={24} xs={24} className="Block6-buttonCol">
          <br />
          <br />
          <button className="Block6-buttonDiv">View More Reviews</button>
          <br />
          <br />
          <br />
        </Col>
      </Row>
    </>
  );
}

export default Block6;
