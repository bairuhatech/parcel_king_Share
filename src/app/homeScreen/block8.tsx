import { Row, Col } from "react-bootstrap";
import news1 from "../../asset/image/news1.png";
import news2 from "../../asset/image/news2.png";
import news3 from "../../asset/image/news3.png";
import news4 from "../../asset/image/news4.png";
import news5 from "../../asset/image/news5.png";
import news6 from "../../asset/image/news6.png";
import { url } from "inspector";
import delivery from "../../asset/image/delivery.jpg";

function Block8() {
  return (
    <Row className="main-Block8">
      <Col md={12} className="Business-HeadTxt">
        News About ParcelKing
      </Col>
      <Col md={6} sm={12} xs={12} className="firstCol-Block8">
        <div className="newsTitles-Block8">
          <div className="newsContaining-Block8">
            <div
              className="NewsChannels-Block8"
              style={{ backgroundImage: `url(${news1})` }}
            ></div>
            <div
              className="NewsChannels-Block8"
              style={{ backgroundImage: `url(${news2})` }}
            ></div>
          </div>
          <div className="newsContaining-Block8">
            <div
              className="NewsChannels-Block8"
              style={{ backgroundImage: `url(${news3})` }}
            ></div>
            <div
              className="NewsChannels-Block8"
              style={{ backgroundImage: `url(${news4})` }}
            ></div>
          </div>
          <div className="newsContaining-Block8">
            <div
              className="NewsChannels-Block8"
              style={{ backgroundImage: `url(${news5})` }}
            ></div>
            <div
              className="NewsChannels-Block8"
              style={{ backgroundImage: `url(${news6})` }}
            ></div>
          </div>
        </div>
      </Col>
      <Col md={6} sm={12} xs={12} className="secondCol-Block8">
        <div
          className="videoDiv-Block8"
          style={{ backgroundImage: `url(${delivery})` }}
        ></div>
      </Col>
    </Row>
  );
}

export default Block8;
