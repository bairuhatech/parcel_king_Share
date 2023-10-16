import React from "react";
import "../styles.scss";
import { Button } from "antd";
function SectionBlock1(props: any) {
  return (
    <>
      <div className="SectionBlock1-Box1">
        <img className="img" src={props.Image} alt="" />
      </div>
      <div className="SectionBlock1-Box2">
        <div className="SectionBlock1-Txt1">
          {props.head}
          {props.icon}
        </div>
        <div className="SectionBlock1-Txt2">{props.title}</div>
        {props.ButtonPrimary ? (
          <div className="SectionBlock1-Box3">
            <Button className="SectionBlock1-Bttn">
              {props.ButtonPrimary}
            </Button>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default SectionBlock1;
