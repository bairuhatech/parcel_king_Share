import { useState } from "react";
import { Row, Col, Input, Form, Button, DatePicker, Select } from "antd";
import moment from "moment";
const { Option } = Select;


function Step2() {
  const [inputCount, setInputCount] = useState(1);
  const [clicked, setClicked] = useState(false)
  const [datePickup, setDatePickup] = useState<any>(new Date());
  const today = new Date();
  const handleAddInput = () => {
    setInputCount(inputCount + 1);
  };

  const generateTimeOptions = () => {
    const minStartTime = moment().add(0, "hours").startOf("hour");
    const endTime = moment("11:45 PM", "hh:mm A");
    const timeOptions = [];
    let selectedStartTime =
      datePickup?.toISOString()?.slice(0, -14) ===
      today?.toISOString()?.slice(0, -14)
        ? moment(minStartTime, "hh:mm A")
        : moment("12:00 AM", "hh:mm A");
    let nextInterval = moment(selectedStartTime).add(
      15 - (selectedStartTime.minute() % 15),
      "minutes"
    );

    while (nextInterval <= endTime) {
      timeOptions.push(nextInterval.format("hh:mm A"));
      nextInterval.add(15, "minutes");
    }

    return timeOptions;
  };
  return (
    <Row className="mainCards-BookNow">
    <Col md={24} sm={24}  xs={24} className="HeadingCol">
      Book Now
    </Col>
    <Col md={24} sm={24}  xs={24}>
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
          <Input size="large" type="number" className="inputStyle-Step1" />
        </Form.Item>
      </div>
    </Col>
    <br />
    <br />
    <Col md={24} sm={24}  xs={24}>
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
          <Input size="large" className="inputStyle-Step1" />
        </Form.Item>
      </div>
    </Col>
    <br />
    <br />
    {/* {Array.from({ length: inputCount }).map((_, index) => (
      <Col md={24} sm={24}  xs={24}key={index}>
        <div className="formitem-Step1">
          <span>Locations</span>
          <Form.Item
            name={"email"}
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input size="large" className="inputStyle-Step1" />
          </Form.Item>
        </div>
      </Col>
    ))}
    <Col md={24} sm={24}  xs={24}>
      <div className="formitem-Step1">
        <Button
          size="middle"
          className="AddmoreButton"
          onClick={handleAddInput}
        >
          Add More
        </Button>
      </div>
    </Col>
    <Col md={12} sm={24}  xs={24}>
      <div className="formitem-Step1">
        <Form.Item>
          <DatePicker size="large" className="DatepickerSize-Step1" />
        </Form.Item>
      </div>
    </Col>
    <Col md={12}>
      <div className="formitem-Step1">
        <Form.Item
          name="timeRange"
          rules={[
            {
              required: true,
              message: "required",
            },
          ]}
        >
          <Select size="large" placeholder="Pick up time" allowClear>
            {generateTimeOptions().map((timeOption) => (
              <Option key={timeOption} value={timeOption}>
                {timeOption}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </div>
    </Col>
    <Col md={12} sm={24}  xs={24}>
      <div className="formitem-Step1">
        <Button size="middle" className="AddmoreButton" onClick={()=> setClicked(true)}>
          Continue&nbsp;        
        </Button>
      </div>
    </Col> */}
  </Row>
  )
}

export default Step2