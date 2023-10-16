// import "../style.scss";
import { Row, Col, Container } from "react-bootstrap";
import logo from "../../../../asset/image/logo.png";

function MyaccountNav() {
  return (
    <div>
      <Row style={{ backgroundColor: "red" }}>
        <Col md={6}>
          <div className="MyaccountNav-box1">
            <img style={{ width: "80px" }} src={logo} />
          </div>
        </Col>
        <Col md={6}>
          <div className="MyaccountNav-box2">
            <button className="MyaccountNav-btn">BOOK NOW</button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default MyaccountNav;
