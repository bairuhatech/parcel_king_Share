import SignUpToDrive from "../../app/drivers/signUpToDrive/intex";
import Footer from "../websiteFooter";
import Header from "../websiteHeader";
import Step1 from "./component/step1";
import "./styles.scss";
import { Row, Col } from "antd";

function Booknow() {
  const style = {
    background: "linear-gradient(208deg, #3d5877 0%, #151e29 100%)",
  };
  return (
    <>
      <Header bgColor={style.background} />
      <br/>
      <br/>
      <br/>
      <Row className="BookNow-start">
        <Step1 />
      </Row>
      <Footer />
    </>
  );
}

export default Booknow;
