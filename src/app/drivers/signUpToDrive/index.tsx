import React, { useEffect } from "react";
import "../styles.scss";
import { Col, Container, Row } from "react-bootstrap";
import { Form, Input, Breadcrumb, DatePicker } from "antd";
import Header from "../../../component/websiteHeader";

const SignUpToDrive = () => {
  const style = {
    background: "linear-gradient(208deg, #3d5877 0%, #151e29 100%)",
  };
  const footerLinks = [
    { title: "Terms Of Service" },
    { title: "Privacy Policy" },
    { title: "Reviews" },
    { title: "Trust" },
    { title: "Help" },
    { title: "Contact Us" },
  ];

  const formFields = [
    [
      { label: "First Name", component: <Input size="large" /> },
      { label: "Last Name", component: <Input size="large" /> },
      { label: "Email", component: <Input size="large" /> },
      {
        label: "Choose a password",
        component: <Input size="large" type="password" />,
      },
      {
        label: "Mobile phone number",
        component: <Input size="large" type="number" />,
      },
    ],
    [
      {
        label: "Date of birth",
        component: <DatePicker size="large" style={{ width: "100%" }} />,
      },
      { label: "Country", component: <Input size="large" /> },
      { label: "Zip code", component: <Input size="large" /> },
      { label: "City", component: <Input size="large" /> },
      { label: "State", component: <Input size="large" /> },
    ],
  ];
  const breadcrumbItems = [
    { title: <p className="SignUpToDrive-Txt1">Contact Info</p> },
    { title: <p className="SignUpToDrive-Txt2">Personal Info</p> },
    { title: <p className="SignUpToDrive-Txt2">Vehicle</p> },
    { title: <p className="SignUpToDrive-Txt2">Review</p> },
  ];
  return (
    <>
      <Header bgColor={style.background} />
      <br />
      <br />
      <br />
      <div className="SignUpToDrive-Box1">
        <Container>
          <div className="SignUpToDrive-Box2">
            <div>
              <Breadcrumb separator=">" items={breadcrumbItems} />
            </div>
            <br />
            <div className="SignUpToDrive-Txt3">
              Please fill out this quick application to let us know more about
              yourself and your vehicle. It will take less than 5 minutes. Once
              complete, you will get an instant response on whether your
              application is accepted as well as information about next steps.
            </div>
            <br />
            <div className="SignUpToDrive-Box3">
              <div className="SignUpToDrive-Txt4">
                Create a Delivery Pro Account
                <hr />
              </div>
              <br />
              <div>
                <Form>
                  <Row>
                    {formFields.map((field, index) => (
                      <Col md={6} key={index}>
                        {field.map((item, i) => (
                          <Col md={12} key={i}>
                            <div>
                              <label className="SignUpToDrive-Txt5">
                                {item.label}
                              </label>
                              <Form.Item>{item.component}</Form.Item>
                            </div>
                          </Col>
                        ))}
                      </Col>
                    ))}
                  </Row>
                </Form>
                <hr />
                <div>
                  <button className="signUpToDrive-Btn1">Next</button>
                </div>
                <br />
              </div>
            </div>
            <br />
            <Row>
              {footerLinks.map((link, index) => (
                <Col md={2} key={index}>
                  <p className="signUpToDrive-Txt6">{link.title}</p>
                </Col>
              ))}
            </Row>
          </div>
          <div className="signUpToDrive-Box4">
            © 2023 Parcel King Inc. All Rights Reserved
          </div>
        </Container>
      </div>
    </>
  );
};
export default SignUpToDrive;
