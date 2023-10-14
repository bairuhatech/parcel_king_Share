import { Drawer, Popover } from "antd";
import React from "react";
import HeaderBusiness from "./bussiness";
import "../../styles.scss";
import HeaderIndividuals from "./individuals";
import HeaderDrivers from "./drivers";
import HeaderMore from "./more";
import { useNavigate } from "react-router-dom";
import Logo from "../../../asset/image/logo.png";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
function HeaderSidebar(props: any) {
  const navigate = useNavigate();
  const icons = [
    { icon: <BsFacebook color="" size={34} /> },
    { icon: <AiFillInstagram color="" size={40} /> },
    { icon: <AiFillTwitterCircle color="" size={40} /> },
    { icon: <BsLinkedin color="" size={30} /> },
  ];

  return (
    <>
      <Drawer placement="right" onClose={props.onClose} open={props.open}>
        <div className="header-Drawer-Box1">
          <div className="header-Drawer-Box2">
            <Popover content={<HeaderBusiness />}>
              <span>Business</span>
            </Popover>
          </div>
          <hr />
          <div className="header-Drawer-Box2">
            <Popover content={<HeaderIndividuals />}>
              <span>Individuals</span>
            </Popover>
          </div>
          <hr />
          <div className="header-Drawer-Box2">
            <Popover content={<HeaderDrivers />}>
              <span>Drivers</span>
            </Popover>
          </div>
          <hr />
          <div className="header-Drawer-Box2">
            <Popover content={<HeaderMore />}>
              <span>More</span>
            </Popover>
          </div>
          <hr />
          <div
            className="header-Drawer-Box2"
            onClick={() => navigate("/signup")}
          >
            Login
          </div>
          <hr />
          <div className="header-Drawer-Box3">
            <button className="header-Drawer-Txt">BOOK NOW</button>
          </div>
          <br />
          <br />
          <div className="header-Drawer-Box4">
            {icons?.map((item: any) => {
              return (
                <>
                  <div>{item.icon}</div>
                </>
              );
            })}
          </div>
        </div>
      </Drawer>
    </>
  );
}

export default HeaderSidebar;
