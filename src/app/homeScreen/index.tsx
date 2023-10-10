import React from "react";
import "./style.scss";
import ConnectionImg from "../../asset/image/pexels-pixabay-220201.jpg";
import { IoLocationSharp } from "react-icons/io5";

import { Button, Input, Space } from "antd";
function HomeScreen() {
  const { Search } = Input;

  return (
    <div>
      <div className="homeScreen-Box1">
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={ConnectionImg}
          alt=""
        />
      </div>
      <div className="homeScreen-Box2">
        <div className="homeScreen-Box3">
          <div className="homeScreen-Box15">
            <div className="homeScreen-Box16">
              <div className="homeScreen-Txt1">
                Last Mile, Middle Mile <br /> Extra Mile
              </div>
              <div className="homeScreen-Txt2">
                Connect with delivery professionals on demand for <br /> last
                mile delivery & help moving nationwide
              </div>
              <div className="homeScreen-Box17">
                <Button className="homeScreen-BookBttn">BOOK NOW</Button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="homeScreen-Box4">
          <div className="homeScreen-Box5">
            <div className="homeScreen-Box6">
              <div className="homeScreen-Box7">
                <div className="homeScreen-Box8">National</div>
                <div className="homeScreen-Box9 ">International</div>
              </div>
              <div className="homeScreen-Box10">
                <div className="homeScreen-Box11">
                  <div className="homeScreen-Box12">
                    <Input
                      size="large"
                      prefix={<IoLocationSharp />}
                      placeholder="Pickup Location"
                      className="homeScreen-input"
                    />
                  </div>
                  <div className="homeScreen-Box13">
                    <Input
                      size="large"
                      prefix={<IoLocationSharp />}
                      placeholder="Destination"
                      className="homeScreen-input"
                    />
                  </div>
                </div>
                <div className="homeScreen-Box11">
                  <div className="homeScreen-Box12">
                    <Input
                      size="large"
                      prefix={<IoLocationSharp />}
                      placeholder="Weight"
                      className="homeScreen-input"
                    />
                  </div>
                  <div className="homeScreen-Box13">
                    <Button className="homeScreen-Bttn1">Get Price</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="homeScreen-Box14">
            <Search
              placeholder="Enter your tracking number"
              allowClear
              enterButton="Search"
              bordered={false}
              className="homeScreen-SearchInput"
              // onSearch={onSearch}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default HomeScreen;
