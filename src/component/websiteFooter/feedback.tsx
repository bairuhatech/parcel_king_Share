import { useState } from "react";
import "./styles.scss";
import { Container } from "react-bootstrap";
import { AiOutlineMessage } from "react-icons/ai";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { Button, Modal, Rate, Row, Col, } from "antd";

const FeedBack = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="feedback-container">
      <Container>
        <Row className="pt-3 pb-3">
          <Col md={6} className="mb-1 mt-1">
            <a href="#" className="feedback-links">
              <section>
                <div>Need help?</div>
                <div>
                  <u>Reach out to us</u> on any of the support channel
                </div>
              </section>
            </a>
          </Col>
          <Col md={6} className="mb-1 mt-1">
            <a href="#" className="feedback-links">
              <IoLocationOutline className="feedback-icons" />
              <section>
                <div>Store Locator</div>
                <div>Find a store nearby</div>
              </section>
            </a>
          </Col>
          <Col md={6} className="mb-1 mt-1">
            <a
              href="#"
              className="feedback-links"
              onClick={() => setIsModalOpen(true)}
            >
              <AiOutlineMessage className="feedback-icons" />
              <section>
                <div>Feedback</div>
                <div>send us your feedback</div>
              </section>
            </a>
          </Col>
          <Col md={6} className="mb-1 mt-1">
            <a href="#" className="feedback-links">
              <IoCallOutline className="feedback-icons" />
              <section>
                <div>Chat Now</div>
                <div>chat on whatsapp</div>
              </section>
            </a>
          </Col>
        </Row>
        <Modal
          footer={false}
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          title={"Feedback"}
          centered
        >
          <div className="rating-container">
            <span className="rate-text">
              Your feedback matters! Help us <br /> improve the Walmart website
            </span>
            <Rate
              allowClear={false}
              defaultValue={0}
              style={{ fontSize: 55 }}
            />
            <span className="rate-text-2">
              Y(1 = Very poor, 5 = Excellent!)
            </span>
            <br />
            <Button style={{ width: 150 }} type="primary" size="large">
              Submit
            </Button>
          </div>
        </Modal>
      </Container>
    </main>
  );
};

export default FeedBack;