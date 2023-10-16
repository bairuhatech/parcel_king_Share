import { Button, Form, Input } from "antd";
import React from "react";
import { Col, Row } from "react-bootstrap";

function DriverContactForm() {
  return (
    <Form>
      <Col md={{ span: 6, offset: 3 }}>
        <div className="Business-HeadTxt">Customer Support Request</div>
        <div>
          <label className="formLabel">First name</label>
          <Form.Item>
            <Input />
          </Form.Item>
        </div>
        <div>
          <label className="formLabel">last name</label>
          <Form.Item>
            <Input />
          </Form.Item>
        </div>
        <div>
          <label className="formLabel">E-mail</label>
          <Form.Item>
            <Input />
          </Form.Item>
        </div>
        <div>
          <label className="formLabel">Contact No</label>
          <Form.Item>
            <Input />
          </Form.Item>
        </div>
        <div>
          <label className="formLabel">Description</label>
          <Form.Item>
            <Input />
          </Form.Item>
        </div>
        <Row>
          <Col md={6}>
            <Button className="form-Bttn1">Cancel</Button>
          </Col>
          <Col md={6}>
            <Button className="form-Bttn2">Submit</Button>
          </Col>
        </Row>
        <br />
        <br />
      </Col>
    </Form>
  );
}

export default DriverContactForm;
