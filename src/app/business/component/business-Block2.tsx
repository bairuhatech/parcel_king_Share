import React from "react";
import { Col, Row } from "react-bootstrap";
import Image from "../../../asset/image/lastmile2.jpg";
function BusinessBlock2(props: any) {
  const title4 = (
    <p>
      For more information about how our modern last mile delivery solutions can
      help your business improve its delivery operations, you can{" "}
      <a href="">contact us here.</a>
    </p>
  );

  return (
    <>
      <div className="BusinessBlock2-Box1">
        <Row className="g-0">
          <Col md={6}>
            <div className="BusinessBlock2-Box2">
              <div className="BusinessBlock2-Box3">
                <img className="BusinessBlock2-img" src={props.Image} alt="" />
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="BusinessBlock2-Box4">
              <div className="BusinessBlock2-Txt1">{props.title1}</div>
              <div className="BusinessBlock2-Txt1">{props.title2}</div>
              <div className="BusinessBlock2-Txt1">{props.title3}</div>
              {/* <div className="BusinessBlock2-Txt1">{title4}</div> */}
            </div>
          </Col>
        </Row>
      </div>{" "}
    </>
  );
}

export default BusinessBlock2;
