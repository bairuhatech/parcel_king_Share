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
          {props.head ? (
            <div className="Business-HeadTxt">{props.head}</div>
          ) : null}
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
          {props.subHead5 ? (
            <div className="SectionBlock3-Txt1">{props.subHead5}</div>
          ) : null}
          {props.title5 ? (
            <div className="SectionBlock3-Txt2">{props.title5}</div>
          ) : null}
          {props.subHead6 ? (
            <div className="SectionBlock3-Txt1">{props.subHead6}</div>
          ) : null}
          {props.title6 ? (
            <div className="SectionBlock3-Txt2">{props.title6}</div>
          ) : null}
          {props.subHead7 ? (
            <div className="SectionBlock3-Txt1">{props.subHead7}</div>
          ) : null}
          {props.title7 ? (
            <div className="SectionBlock3-Txt2">{props.title7}</div>
          ) : null}
          {props.subHead8 ? (
            <div className="SectionBlock3-Txt1">{props.subHead8}</div>
          ) : null}

          {props.title8 ? (
            <div className="SectionBlock3-Txt2">{props.title8}</div>
          ) : null}
          {props.subHead9 ? (
            <div className="SectionBlock3-Txt1">{props.subHead9}</div>
          ) : null}
          {props.title9 ? (
            <div className="SectionBlock3-Txt2">{props.title9}</div>
          ) : null}
          {props.subHead10 ? (
            <div className="SectionBlock3-Txt1">{props.subHead10}</div>
          ) : null}

          {props.title10 ? (
            <div className="SectionBlock3-Txt2">{props.title10}</div>
          ) : null}
          {props.ButtonTxt ? (
            <div className="SectionBlock3-Box4">
              <br />
              <Button
                className="form-Bttn1"
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
