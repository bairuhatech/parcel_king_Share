import React from "react";
import { Col, Row } from "react-bootstrap";
import Image1 from "../../../../asset/image/lastMile.jpg";
function LocationSites() {
  return (
    <>
      <div className="LocationSites-Box1">
        <div className="LocationSites-Box2">
          <br />
          <div className="Business-HeadTxt">Locations</div>
          <br />
          <Row>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item: any) => {
              return (
                <>
                  <Col md={4}>
                    <div className="LocationSites-Box3">
                      <div className="LocationSites-Box4">
                        <img className="img" src={Image1} alt="" />
                        <div className="LocationSites-Txt1">qwerty</div>
                      </div>
                    </div>
                  </Col>
                </>
              );
            })}
          </Row>
        </div>
      </div>
    </>
  );
}

export default LocationSites;
