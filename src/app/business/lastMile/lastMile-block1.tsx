import React from "react";
import LastMile from "../../../asset/image/lastMile.jpg";
import "../styles.scss";
import { Button } from "antd";
function LastmileBlock1() {
  return (
    <>
      <div className="LastmileBlock1-Box1">
        <img className="img" src={LastMile} alt="" />
      </div>
      <div className="LastmileBlock1-Box2">
        <div className="LastmileBlock1-Txt1">
          The best last mile delivery service nationwide
        </div>
        <div className="LastmileBlock1-Txt2">
          Local and long distance last mile deliveries nationally
        </div>
        <div className="LastmileBlock1-Box3">
          <Button className="LastmileBlock1-Bttn">Free Estimate</Button>
        </div>
      </div>
    </>
  );
}

export default LastmileBlock1;
