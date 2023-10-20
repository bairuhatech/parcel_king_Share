import { Button, Form, Input } from "antd";
import React from "react";
import { Col, Row } from "react-bootstrap";

function InvestorsForm() {
  return (
    <Form>
      <div className="p-3">
        <Col md={12} xs={12}>
          <div className="Business-HeadTxt">
            Interested in investing in Parcel-King?
          </div>
          <Col md={{ span: 4, offset: 2 }} xs={12} sm={8}>
            <div>
              <label className="formLabel">First name</label>
              <Form.Item>
                <Input />
              </Form.Item>
            </div>
            <div>
              <label className="formLabel">Last name</label>
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
              <label className="formLabel">Phone number</label>
              <Form.Item>
                <Input />
              </Form.Item>
            </div>
            <div>
              <label className="formLabel">Company</label>
              <Form.Item>
                <Input />
              </Form.Item>
            </div>
            <div>
              <label className="formLabel">City</label>
              <Form.Item>
                <Input />
              </Form.Item>
            </div>
            <div>
              <label className="formLabel">State</label>
              <Form.Item>
                <Input />
              </Form.Item>
            </div>
            <div>
              <label className="formLabel">
                Are you an accredited investor
              </label>
              <Form.Item>
                <Input />
              </Form.Item>
            </div>
            <Row>
              <Col md={6}>
                <Button className="form-Bttn1">Cancel</Button>
              </Col>
              <Col md={6}>
                <Button className="form-Bttn2">Sumbit</Button>
              </Col>
            </Row>
          </Col>
        </Col>
      </div>
    </Form>
  );
}

export default InvestorsForm;
