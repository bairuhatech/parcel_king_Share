import React from "react";
import { Col,Row } from 'react-bootstrap';
import middlemile from "../../../asset/image/middlemile1.jpg";
function IndividualsBlock1() {
  return (
  <div>
    <div className='individualhelpmove-box3'>
          <div className='individualhelpmove-box4'>
          <Row>
            <Col md={6}>
              <div className='individualhelpmove-text'>
              ParcelKing connects you with local movers on demand when you need help moving anything from big and bulky items to small boxes nationwide. 
              Help is just minutes away with ParcelKing same day and scheduled moving services. With ParcelKing, you can get help moving 
              items the same day nationwide with our unique mobile apps, website, or our Delivery API for high volume movers. 
              Our team of moving experts can handle most of your moving needs nationwide.With ParcelKing you no longer have to 
              rely on traditional movers that take days to give you a quote, or worry about renting a moving truck and doing all of the work yourself. 
              Instead you can get help moving your items the same day when you book with ParcelKing. Our modern moving services help people like you schedule
              a move that is quick, convenient, and affordable. ParcelKing moving services are available to both businesses
              and individuals. Modern consumer demands and the ongoing digital revolution require businesses to adopt a digital moving and logistics strategy 
              to support same day moves. ParcelKing helps your business find vetted moving professionals with the right equipment. We also help you manage 
              and track your moves while saving you time and money by automating manual tasks.
              </div>
            </Col>
            <Col md={6}>
              <div className='individualhelpmove-img'>
                <img src={middlemile} height={500} width={500}/>
              </div>
            </Col>
          </Row>
          </div>
        </div>
  </div>
  )
}
export default IndividualsBlock1
