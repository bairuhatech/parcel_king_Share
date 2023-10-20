import { useState } from "react";
import { Row, Col, Input, Form, Button, Select } from "antd";
import { BsFillPinAngleFill } from "react-icons/bs";
import Step3 from "./step3";

function Step2() {
  const [clicked, setClicked] = useState(false);
  
  return (
    <>
      {clicked ? (
        <Step3 />
      ) : (
        <Row className="mainCards-BookNow">
          <Col md={24} sm={24} xs={24} className="HeadingCol">
            Book Now
          </Col>
          <Col md={24} sm={24} xs={24}>
            <div className="formitem-Step1">
              <span>Cargo Item Name</span>
              <Form.Item
                name={"cargo_item_name"}
                rules={[
                  {
                    required: true,
                    message: "Please input your Cargo Item Name!",
                  },
                ]}
              >
                <Input size="large" className="inputStyle-Step1" />
              </Form.Item>
            </div>
          </Col>
          <br />
          <br />
          <Col md={8} sm={24} xs={24}>
            <div className="formitem-Step1">
              <span>Quantity</span>
              <Form.Item
                name={"quantity"}
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input
                  size="large"
                  type="number"
                  className="inputStyle-Step1"
                />
              </Form.Item>
            </div>
          </Col>
          <Col md={8} sm={24} xs={24}>
            <div className="formitem-Step1">
              <span style={{ marginLeft: "15px" }}>
                Images and documents (optional)
              </span>
              <Button
                size="large"
                icon={<BsFillPinAngleFill />}
                className="filesAddButton"
              >
                {" "}
                Add Files
              </Button>
            </div>
          </Col>
          <Col md={24} sm={24} xs={24}>
            <div className="formitem-Step1">
              <span>Additional Info (Optional) </span>
              <Form.Item name={"additional_info"}>
                <Input size="large" className="inputStyle-Step1" />
              </Form.Item>
            </div>
          </Col>
          <Col md={24} sm={24} xs={24}>
            <div className="formitem-Step1">
              <Button
                size="middle"
                className="AddmoreButton"
                onClick={() => setClicked(true)}
              >
                Continue
              </Button>
            </div>
          </Col>
        </Row>
      )}
    </>
  );
}

export default Step2;
