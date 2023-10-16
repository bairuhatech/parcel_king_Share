import React from "react";
import "../../styles.scss";
import { Button, Form, Input } from "antd";
import { Col, Row } from "react-bootstrap";
function PricingAndBookingForm() {
  return (
    <>
      <div className="PricingAndBookingForm-Box1">
        <div className="PricingAndBookingForm-Box2">
          <div className="PricingAndBookingForm-Txt1">
            Let Us Know You Want GoShare in Your Hometown
          </div>
          <Form>
            <Col md={12}>
              <label className="formLabel">First Name</label>
              <Form.Item>
                <Input />
              </Form.Item>
            </Col>
            <Col md={12}>
              <label className="formLabel">Last Name</label>
              <Form.Item>
                <Input />
              </Form.Item>
            </Col>
            <Col md={12}>
              <label className="formLabel">E mail</label>
              <Form.Item>
                <Input />
              </Form.Item>
            </Col>
            <Col md={12}>
              <label className="formLabel">City</label>
              <Form.Item>
                <Input />
              </Form.Item>
            </Col>
            <Col md={12}>
              <label className="formLabel">State</label>
              <Form.Item>
                <Input />
              </Form.Item>
            </Col>
            <Col md={12}>
              <label className="formLabel">Zip Code</label>
              <Form.Item>
                <Input />
              </Form.Item>
            </Col>
            <Col md={12}>
              <label className="formLabel">Customer or Driver</label>
              <Form.Item>
                <Input />
              </Form.Item>
            </Col>
            <Row>
              <Col md={3}>
                <Button className="PricingAndBookingForm-bttn1">Cancel</Button>
              </Col>
              <Col md={3}>
                <Button className="PricingAndBookingForm-bttn2">Submit</Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </>
  );
}

export default PricingAndBookingForm;
