import React from "react";
import Header from "../../../../component/websiteHeader";
import SectionBlock1 from "../../../../component/section-Block1";
import Image1 from "../../../../asset/image/lastMile.jpg";
import SectionBlock3 from "../../../../component/section-Block3";
import { Button, Form, Input, Select } from "antd";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "../../../../component/websiteFooter";
function FleetOwnersForm(props: any) {
  const navigate = useNavigate();
  const style = {
    background: "linear-gradient(208deg, #3d5877 0%, #151e29 100%)",
  };
  return (
    <>
      <Header bgColor={style.background} />
      <br />
      <br />
      <br />
      <SectionBlock1 Image={Image1} head={"Fleet Owner Sign Up"} />
      <SectionBlock3
        head={"Get More Loads for your Fleet of Trucks or Cargo Vans"}
        title1={
          "Parcel-King is a leading marketplace for truck owners, van owners, and delivery professionals to connect with local businesses who need help with last mile delivery, middle mile delivery, LTL freight, and hot shot trucking deliveries. Whether you own a few vehicles or a few hundred, Parcel-King is the perfect partner and platform to help you find loads to supplement your fleet business. Fleet companies will have a DOT# or MC#. If you do not have a DOT# or MC#, click here to sign up as an individual. To see if we are in your city, go here."
        }
        title2={
          "Fill out the form below to get started. Our Driver Support Team will review your application and get in touch with you about the next steps for getting your fleet onto the Parcel-King platform. Our fleet partners go through a slightly different on-boarding process than individual truck owner-operators."
        }
      />
      <Form>
        <Col md={{ span: 6, offset: 3 }} xs={{ span: 10, offset: 1 }}>
          <div className="FleetOwnersForm-Txt">Fleet Owner</div>
          <div>
            <label className="formLabel">Company</label>
            <Form.Item>
              <Input size="large" />
            </Form.Item>
          </div>
          <div>
            <label className="formLabel">First name</label>
            <Form.Item>
              <Input size="large" />
            </Form.Item>
          </div>
          <div>
            <label className="formLabel">Last name</label>
            <Form.Item>
              <Input size="large" />
            </Form.Item>
          </div>
          <div>
            <label className="formLabel">Title</label>
            <Form.Item>
              <Input size="large" />
            </Form.Item>
          </div>
          <div>
            <label className="formLabel">E-mail</label>
            <Form.Item>
              <Input size="large" />
            </Form.Item>
          </div>
          <div>
            <label className="formLabel">Conatct number</label>
            <Form.Item>
              <Input size="large" />
            </Form.Item>
          </div>
          <div>
            <label className="formLabel">Street</label>
            <Form.Item>
              <Input size="large" />
            </Form.Item>
          </div>
          <div>
            <label className="formLabel">City</label>
            <Form.Item>
              <Input size="large" />
            </Form.Item>
          </div>
          <div>
            <label className="formLabel">State</label>
            <Form.Item>
              <Input size="large" />
            </Form.Item>
          </div>
          <div>
            <label className="formLabel">DOT Number or MC Number</label>
            <Form.Item>
              <Input size="large" />
            </Form.Item>
          </div>
          <div>
            <label className="formLabel">Website</label>
            <Form.Item>
              <Input size="large" />
            </Form.Item>
          </div>
          <div>
            <label className="formLabel">Lead Category</label>
            <Form.Item>
              <Select size="large" />
            </Form.Item>
          </div>
          <Row>
            <Col md={6} xs={12}>
              <Button className="form-Bttn2">Submit</Button>
            </Col>
          </Row>
        </Col>
      </Form>
      <br />
      <Footer />
    </>
  );
}

export default FleetOwnersForm;
