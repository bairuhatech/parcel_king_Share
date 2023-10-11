import React from "react";
import "./style.scss";
import { Row, Col } from "react-bootstrap";
function Block2() {
  return (
    <>
      <div className="ChooseGoshare-Box1">
        <div className="ChooseGoshare-Box2">Why Choose GoShare</div>
        {/* <Row> */}
        <Col md={6}></Col>
        <Col md={6}>
          <div className="ChooseGoshare-Box3">
            <div></div>
          </div>
        </Col>
        {/* </Row> */}
      </div>
    </>
  );
}

export default Block2;
