import React, { useState } from "react";
import "../styles.scss";
import { Row, Col } from "react-bootstrap";
import Logo from "../../asset/image/logo.png";
import { Button, Drawer, Popover, Select } from "antd";
import { HiOutlineMenu } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import HeaderBusiness from "./component/bussiness";
import HeaderIndividuals from "./component/individuals";
import HeaderDrivers from "./component/drivers";
import HeaderMore from "./component/more";
import HeaderSidebar from "./component/sideBar";

function Header(props: any) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div
        className="websiteHeader-Box1"
        style={{ backgroundImage: props?.bgColor }}
      >
        <Row>
          <Col md={5} xs={6}>
            <div className="websiteHeader-Box2">
              <img
                className="img-header"
                onClick={() => navigate("/")}
                src={Logo}
                alt=""
              />
            </div>
          </Col>
          <Col md={7} xs={6}>
            <div className="websiteHeader-Box3">
              <div>
                <Popover content={<HeaderBusiness />}>
                  <span className="websiteHeader-Txt">Business</span>
                </Popover>
              </div>
              <div>
                <Popover
                  content={<HeaderIndividuals />}
                  placement="bottomRight"
                >
                  <span className="websiteHeader-Txt">Individuals</span>
                </Popover>
              </div>
              <div>
                <Popover content={<HeaderDrivers />} placement="bottomRight">
                  <span className="websiteHeader-Txt">Drivers</span>
                </Popover>
              </div>
              <div>
                <Popover content={<HeaderMore />} placement="bottomRight">
                  <span className="websiteHeader-Txt">More</span>
                </Popover>
              </div>
              <div
                className="websiteHeader-Txt"
                onClick={() => navigate("/signup")}
              >
                Login
              </div>
              <div>
                <Button className="websiteHeader-Bttn" onClick={()=> navigate("/booknow")}>BOOK NOW</Button>
              </div>
            </div>
            <div className="webSiteHeader-Box4">
              <HiOutlineMenu
                size={28}
                color="black"
                onClick={() => setOpen(true)}
              />
            </div>
            <HeaderSidebar onClose={() => handleClose()} open={open} />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Header;
