import React from "react";
import "../styles.scss";
import { Col, Row } from "react-bootstrap";
import Image from "../../../asset/image/lastmile2.jpg";
function LastmileBlock2() {
  return (
    <>
      <div className="LastmileBlock2-Box1">
        <Row className="g-0">
          <Col md={6}>
            <div className="LastmileBlock2-Box2">
              <div className="LastmileBlock2-Box3">
                <img className="LastmileBlock2-img" src={Image} alt="" />
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="LastmileBlock2-Box4">
              <div className="LastmileBlock2-Txt1">
                Parcel king connects you with local last mile Delivery
                Professionals on demand to help your business deliver your
                products across the US. Help is just minutes away with Parcel
                king’s same day and scheduled last mile delivery service. With
                GoShare, you can deliver your products the same day nationwide
                with our unique mobile apps, website, or our Delivery API for
                high volume last mile shippers. Our team of last mile delivery
                experts can handle most of your last mile delivery needs
                nationwide.
              </div>
              <div className="LastmileBlock2-Txt1">
                Our last mile delivery solution is a convenient alternative to
                traditional last mile carriers. Modern consumer demands and the
                ongoing digital revolution require businesses to adopt a digital
                last mile delivery and logistics strategy to support same day
                last mile home delivery. GoShare helps your business find vetted
                Delivery Professionals with the right equipment. We also help
                you manage and track last mile deliveries while saving you time
                and money by automating manual tasks.
              </div>
              <div className="LastmileBlock2-Txt1">
                Our local last mile carrier network includes thousands of
                Delivery Professionals nationwide who are equipped to handle any
                and all of your last mile shipping needs. Our last mile Delivery
                Professionals are experts in delivering anything from pallets to
                parcels. We have a fleet of vehicles that can handle any size
                last mile shipment, from box trucks, cargo vans, and pickup
                trucks to sedans. We have the resources and knowledge to handle
                any last mile delivery job
              </div>
              <div className="LastmileBlock2-Txt1">
                For more information about how our modern last mile delivery
                solutions can help your business improve its delivery operations
                you can <a href="">contact us here.</a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default LastmileBlock2;
