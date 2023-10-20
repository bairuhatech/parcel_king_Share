import { useState } from "react";
import { Row, Col, Radio, Button } from "antd";
import truck from "../../../asset/image/PKTruck.png";
import van from "../../../asset/image/PKVan.png";
import PickupTruck from "../../../asset/image/PKtruckSmall.png";
import Godown from "../../../asset/image/godown.jpg"

function Step3() {
  const [clicked, setClicked] = useState(false);

  const data = [
    {
      image: truck,
      title: "Box Truck",
      description:
        "Great for Pallets, LTL freight, FTL freight, Home Moves",
    },
    {
      image: van,
      title: "Cargo Van",
      description:
        "Ideal for sectional sofas, small home moves, pallets, large parcels",
    },
    {
      image: PickupTruck,
      title: "Pickup Truck",
      description:
        "Great for 1-2 pieces of furniture, mattress, small appliances, lumber",
    },
    {
      image: Godown,
      title: "Labor Only",
      description:
        "Moving help, load your truck/storage, rearrange furniture. Vehicle not included.",
    },
  ];

  return (
    <Row className="mainCards-BookNow">
          <Col md={24} sm={24} xs={24} className="HeadingCol">
            Vehicle Type
          </Col>
          {data.map((item:any)=> (
               <Col md={6} sm={12} xs={24}>
               <div className="cardOfStep3">
                 <div className="imageOfcardStep3">
                 <img src={item?.image} className="imageSize" />
                 </div>
                 <div className="cartitle">
                      {item.title}
                 </div>
                 <div className="MainDescription-Step3">
                    {item.description}
                 </div>
               </div>
               </Col>
          ))}
          <br/>
          <br/>
          <Col md={24}>
            <div className="formitem-Step1">
              <span>Add a Helper.?</span>
              <br/>
              <span>Your Driver and Helper will assist with loading/unloading.</span>
              <br/>
               <span>Yes</span><Radio/> &nbsp;   <span>No</span><Radio/> 
            </div>
          </Col>
          <Col md={12} sm={24}  xs={24}>
        <div className="formitem-Step1">
          <Button size="middle" className="AddmoreButton" onClick={()=> setClicked(true)}>
            Continue&nbsp;        
          </Button>
        </div>
      </Col>
         
        </Row>
  )
}

export default Step3