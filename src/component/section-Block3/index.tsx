import React from "react";
import "../styles.scss";
import { Button } from "antd";
import { useNavigate } from "react-router";
function SectionBlock3(props: any) {
  const navigate = useNavigate();

  return (
    <>
      <div className="SectionBlock3-Box1">
        <div className="SectionBlock3-Box2">
          <div className="Business-HeadTxt">{props.head}</div>
          {props.subHead1 ? (
            <div className="SectionBlock3-Txt1">{props.subHead1}</div>
          ) : null}

          <div className="SectionBlock3-Txt2">{props.title1}</div>
          {props.subHead2 ? (
            <div className="SectionBlock3-Txt1">{props.subHead2}</div>
          ) : null}
          {props.title2 ? (
            <div className="SectionBlock3-Txt2">{props.title2}</div>
          ) : null}
          {props.subHead3 ? (
            <div className="SectionBlock3-Txt1">{props.subHead3}</div>
          ) : null}
          {props.title3 ? (
            <div className="SectionBlock3-Txt2">{props.title3}</div>
          ) : null}
          {props.subHead4 ? (
            <div className="SectionBlock3-Txt1">{props.subHead4}</div>
          ) : null}

          {props.title4 ? (
            <div className="SectionBlock3-Txt2">{props.title4}</div>
          ) : null}
          {props.ButtonTxt ? (
            <div className="SectionBlock3-Box3">
              <br />
              <Button
                className="SectionBlock3-Bttn"
                onClick={() => navigate(props.dynamicURL)}
              >
                {props.ButtonTxt}
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default SectionBlock3;
