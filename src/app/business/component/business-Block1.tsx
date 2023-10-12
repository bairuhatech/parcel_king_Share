import React from "react";
import "../styles.scss";
import { Button } from "antd";
function BusinessBlock1(props: any) {
  return (
    <>
      <div className="LastmileBlock1-Box1">
        <img className="img" src={props.Image} alt="" />
      </div>
      <div className="LastmileBlock1-Box2">
        <div className="LastmileBlock1-Txt1">{props.head}</div>
        <div className="LastmileBlock1-Txt2">{props.title}</div>
        <div className="LastmileBlock1-Box3">
          <Button className="LastmileBlock1-Bttn">{props.ButtonPrimary}</Button>
        </div>
      </div>
    </>
  );
}

export default BusinessBlock1;
