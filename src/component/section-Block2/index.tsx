import React from "react";
import { Col, Row } from "react-bootstrap";
import Image from "../../../asset/image/lastmile2.jpg";
import "../styles.scss";
function SectionBlock2(props: any) {
  const title4 = (
    <p>
      For more information about how our modern last mile delivery solutions can
      help your business improve its delivery operations, you can{" "}
      <a href="">contact us here.</a>
    </p>
  );

  return (
    <>
      <div className="SectionBlock2-Box1">
        <Row className="g-0">
          <Col md={6}>
            <div className="SectionBlock2-Box2">
              <div className="SectionBlock2-Box3">
                <img className="SectionBlock2-img" src={props.Image} alt="" />
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="SectionBlock2-Box4">
              <div className="SectionBlock2-Txt1">{props.title1}</div>
              <div className="SectionBlock2-Txt1">{props.title2}</div>
              <div className="SectionBlock2-Txt1">{props.title3}</div>
              {/* <div className="SectionBlock2-Txt1">{title4}</div> */}
            </div>
          </Col>
        </Row>
      </div>{" "}
    </>
  );
}

export default SectionBlock2;
