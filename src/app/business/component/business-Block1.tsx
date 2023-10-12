import React from "react";
import "../styles.scss";
import { Button } from "antd";
function BusinessBlock1(props: any) {
  return (
    <>
      <div className="BusinessBlock1-Box1">
        <img className="img" src={props.Image} alt="" />
      </div>
      <div className="BusinessBlock1-Box2">
        <div className="BusinessBlock1-Txt1">{props.head}</div>
        <div className="BusinessBlock1-Txt2">{props.title}</div>
        <div className="BusinessBlock1-Box3">
          <Button className="BusinessBlock1-Bttn">{props.ButtonPrimary}</Button>
        </div>
      </div>
    </>
  );
}

export default BusinessBlock1;
