import React from "react";
import "../styles.scss";
import { Button } from "antd";
import { useNavigate } from "react-router";
function SectionBlock3(props: any) {
  console.log("-----------------props------------>>>", props);
  const navigate = useNavigate();

  return (
    <>
      <div className="SectionBlock3-Box1">
        <div className="SectionBlock3-Box2">
          <div className="Business-HeadTxt">{props.head}</div>
          <div className="SectionBlock3-Txt2">{props.title1}</div>
          <div className="SectionBlock3-Txt2">{props.title2}</div>
          <div className="SectionBlock3-Txt2">{props.title3}</div>
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
