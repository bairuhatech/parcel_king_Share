import React from "react";
import FeedBack from "./feedback";
import { Row, Col, Container } from "react-bootstrap";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcApplePay,
} from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { BiLogoInstagram } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { LiaWhatsapp } from "react-icons/lia";
import Logo from "../../asset/image/logo.png";
import "../styles.scss";
const Footer = () => {
  return (
    <div className="footer">
      <FeedBack />
      <Container>
        <main className="footer-container">
          <Row>
            <Col md={2}>
              <div className="list-container">
                <div className="list-heading">Individuals</div>
                <ul>
                  <li>Book Now</li>
                  <li>Download App</li>
                  <li>FAQ</li>
                  <li>Locations</li>
                  <li>Vehicles Size Help</li>
                  <li>Reviews</li>
                  <li>Terms Of Service</li>
                  <li>Hazardous Materials Policy</li>
                </ul>
              </div>
            </Col>
            <Col md={2}>
              <div className="list-container">
                <div className="list-heading">Drivers</div>
                <ul>
                  <li>SignUp To Drive</li>
                  <li>Fleet Owners</li>
                  <li>Insurance</li>
                  <li>Contact Us</li>
                  <li>Vehicle Requirements</li>
                  <li>Resource Center</li>
                  <li>Driver Benefits</li>
                  <li>Driver Terms Of Service</li>
                </ul>
              </div>
            </Col>
            <Col md={2}>
              <div className="list-container">
                <div className="list-heading">Careers</div>
                <ul>
                  <li>Dispatch Blog</li>
                  <li>Investors</li>
                  <li>News</li>
                  <li>Press Inquiries</li>
                  <li>Anti-Discrimination Policy</li>
                  <li>Virtual Fleet</li>
                </ul>
              </div>
            </Col>
            <Col md={3}>
              <div className="list-container ">
                <div className="list-heading">Payment Method</div>
                <div className="Payment-cards">
                  <FaCcVisa size={40} color="#ffff" />
                  <FaCcMastercard size={40} color="#ffff" />
                  <FaCcPaypal size={40} color="#ffff" />
                  <FaCcApplePay size={40} color="#ffff" />
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="logoContainer">
                <img className="listFooter-logo" src={Logo} />
                <div className="Payment-cards">
                  <RiFacebookCircleLine size={25} color="#ffff" />
                  <BiLogoInstagram size={25} color="#ffff" />
                  <FaXTwitter size={22} color="#ffff" />
                  <PiYoutubeLogoLight size={24} color="#ffff" />
                  <LiaWhatsapp size={24} color="#ffff" />
                </div>
              </div>
            </Col>
          </Row>
        </main>
      </Container>
      <div className="final-footer">
        <Container>
          <div className="final-footer-inner">
            <span className="copyright-txt">
              COPYRIGHT © 2023 GO SHARE LLC. ALL RIGHTS RESERVED
            </span>
            <span className="copyright-txt-2">
              Terms and conditions Privacy policy & Cookies
            </span>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
