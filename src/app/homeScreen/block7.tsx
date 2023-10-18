import React from "react";
import { Row, Col } from "react-bootstrap";
import { IoLocationSharp } from "react-icons/io5";

function Block7() {
  return (
    <Row className="Block7-start">
      <Col md={5} sm={12} xs={12} className="FirstCol-Block7">
        <div className="content-Block7">
          <span className="Business-HeadTxt">
            Locations
            <IoLocationSharp color="red" />
          </span>
          <span className="subText-Block7">
            Tell us Where We Should Launch <b>Next</b>
          </span>
          <button className="button-Block7">Vote Now</button>
        </div>
      </Col>
      <Col md={7} sm={12} xs={12} className="secondCol-Block7">
        <div className="maps-Block7"></div>
      </Col>
    </Row>
  );
}

export default Block7;
