import React, { useState } from "react";
import "./style.scss";
import { Row, Col } from "react-bootstrap";
import Logo from "../../asset/image/logo.png";
import { Button, Drawer, Popover } from "antd";
import { HiOutlineMenu } from "react-icons/hi";
import WebsiteHeaderBusiness from "./component/bussiness";

function WebsiteHeader() {
  const [open, setOpen] = useState(false);

  const content = (
    <div style={{ width: 500 }}>
      <p>Content</p>
      <p>Content</p>
    </div>
  );
  return (
    <>
      <div className="websiteHeader-Box1">
        <Row>
          <Col md={5} xs={6}>
            <div className="websiteHeader-Box2">
              <img className="img-header" src={Logo} alt="" />
            </div>
          </Col>
          <Col md={7} xs={6}>
            <div className="websiteHeader-Box3">
              <div>
                <Popover content={<WebsiteHeaderBusiness />} trigger={"click"}>
                  <span className="websiteHeader-Txt">Business</span>
                </Popover>
              </div>
              <div>
                <Popover
                  content={content}
                  trigger={"click"}
                  placement="bottomRight"
                >
                  <span className="websiteHeader-Txt">Individuals</span>
                </Popover>
              </div>
              <div>
                <Popover
                  content={content}
                  trigger={"click"}
                  placement="bottomRight"
                >
                  <span className="websiteHeader-Txt">Drivers</span>
                </Popover>
              </div>
              <div>
                <Popover
                  content={content}
                  trigger={"click"}
                  placement="bottomRight"
                >
                  <span className="websiteHeader-Txt">More</span>
                </Popover>
              </div>
              <div className="websiteHeader-Txt">SignIn</div>
              <div>
                <Button>Login</Button>
              </div>
            </div>
            <div className="webSiteHeader-Box4">
              <HiOutlineMenu
                size={28}
                color="black"
                onClick={() => setOpen(true)}
              />
            </div>
            <Drawer
              placement="left"
              onClose={() => setOpen(false)}
              open={open}
            ></Drawer>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default WebsiteHeader;
