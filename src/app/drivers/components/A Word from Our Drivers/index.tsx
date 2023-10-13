import React from "react";
import "../../styles.scss";
import { Col, Row } from "react-bootstrap";
import DriverImage from "../../../../asset/image/rosebox-BFdSCxmqvYc-unsplash.jpg";
function AWordFromOurDrivers() {
  const imageSources = [
    "//wpcdn.goshare.co/wp-content/uploads/2019/02/GoShare-Delivery-Pro-Testimonial-Video-Thumbnail-4.jpg",
    "//wpcdn.goshare.co/wp-content/uploads/2020/09/Video-Thumnail-Ezekial-GoShare.jpg",
    "//wpcdn.goshare.co/wp-content/uploads/2019/02/GoShare-Delivery-Pro-Testimonial-Video-Thumbnail-2.jpg",
    "//wpcdn.goshare.co/wp-content/uploads/2019/02/GoShare-Delivery-Pro-Testimonial-Video-Thumbnail-1.jpg",
  ];
  return (
    <>
      <div className="driversBlock3-Box1">
        <div className="driversBlock3-Txt1">A Word from Our Drivers</div>
        <br />
        <div className="driversBlock3-Box2">
          <Row className="">
            <Col md={6}>
              <div>
                <div className="driversBlock3-Txt2">
                  I like the complete autonomy of schedule. Work when I want,
                  play when I want.
                </div>
                <div className="driversBlock3-Txt3">- Eric, San Diego</div>

                <div className="driverBlock3-Boxxx">
                  <button className="driversBlock3-Btn1">
                    Read More Views
                  </button>
                </div>
                <br />
              </div>
            </Col>
            <Col md={6}>
              <div className="driversBlock3-Box4">
                <img
                  src="//wpcdn.goshare.co/wp-content/uploads/2019/02/804_3659.jpg"
                  className="driversBlock3-Img1"
                />
              </div>
            </Col>
          </Row>
          <br />
          <Row className="g-6">
            {imageSources.map((src, index) => (
              <Col key={index} md={3}>
                <div className="driversBlock3-Box5">
                  <img
                    className="driversBlock3-Img2"
                    src={src}
                    alt={`Image ${index + 1}`}
                  />
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
}

export default AWordFromOurDrivers;
