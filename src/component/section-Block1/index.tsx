import React from "react";
import "../styles.scss";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
function SectionBlock1(props: any) {
  const navigate = useNavigate();
  return (
    <>
      <div className="SectionBlock1-Box1">
        <img className="img" loading="lazy" src={props.Image} alt="" />
      </div>
      <div className="SectionBlock1-Box2">
        <div className="SectionBlock1-Txt1">
          {props.head}
          {props.icon}
        </div>
        <div className="SectionBlock1-Txt2">{props.title}</div>
        {props.ButtonPrimary ? (
          <div className="SectionBlock1-Box3">
            <Button
              className="SectionBlock1-Bttn"
              onClick={() => navigate(props.dynamicUrl)}
            >
              {props.ButtonPrimary}
            </Button>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default SectionBlock1;
