import { Form, Input, Select, Upload } from "antd";
import React from "react";
import Header from "../../../../component/websiteHeader";
import SectionBlock1 from "../../../../component/section-Block1";
import CareerImage1 from "../../../../asset/image/teamCareer.jpg";
import SectionBlock3 from "../../../../component/section-Block3";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../../styles.scss";
import Footer from "../../../../component/websiteFooter";
function CareerForm() {
  const style = {
    background: "linear-gradient(208deg, #3d5877 0%, #151e29 100%)",
  };
  return (
    <>
      <Form>
        <Header bgColor={style.background} />
        <br />
        <br />
        <br />
        <SectionBlock1
          Image={CareerImage1}
          head={"Apply to Join the Parcel King Team"}
        />
        <SectionBlock3
          head={"Let’s Get Started"}
          title1={
            "Get started by filling out the short application form below. We are currently only accepting applicants in the United States and Brazil. No relocation assistance provided. Must be authorized to work in the US for all US based positions."
          }
          title2={
            "This application page is for corporate positions only. If you are interested in driving for Parcel-King as a Delivery Professional, please visit our Driver Page.          "
          }
        />
        <Container>
          <Col md={{ span: 8, offset: 2 }}>
            <br />
            <div className="CareerForm-Txt1">Parcel King Career</div>
            <hr />
            <br />
            <div>
              <label className="formLabel">First Name</label>
              <Form.Item>
                <Input size={"large"} />
              </Form.Item>
            </div>
            <div>
              <label className="formLabel">Last Name</label>
              <Form.Item>
                <Input size={"large"} />
              </Form.Item>
            </div>
            <div>
              <label className="formLabel">E-Mail</label>
              <Form.Item>
                <Input size={"large"} />
              </Form.Item>
            </div>
            <div>
              <label className="formLabel">
                List your top 3 relevant skills
              </label>
              <Form.Item>
                <Input size={"large"} />
              </Form.Item>
            </div>
            <div>
              <label className="formLabel">
                Professional Experience in Years
              </label>
              <Form.Item>
                <Input size={"large"} />
              </Form.Item>
            </div>
            <div>
              <label className="formLabel">Team Applying For</label>
              <Form.Item>
                <Select size={"large"} />
              </Form.Item>
            </div>
            <div>
              <label className="formLabel">Applying For</label>
              <Form.Item>
                <Select size={"large"} />
              </Form.Item>
            </div>
            {/* <div>
              <label className="formLabel">Upload Resume</label>
              <Form.Item>
                <Upload />
              </Form.Item>
            </div> */}
            <Row>
              <Col md={6}>
                <Button className="form-Bttn1">Cancel</Button>
              </Col>
              <Col md={6}>
                <Button className="form-Bttn2">Submit</Button>
              </Col>
            </Row>
            <br />
          </Col>
        </Container>
      </Form>
      <Footer />
    </>
  );
}

export default CareerForm;
