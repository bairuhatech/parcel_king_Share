import React from "react";
import "../styles.scss";
function SectionBlock4(props: any) {
  return (
    <>
      <div className="SectionBlock4-Box1">
        <div className="SectionBlock4-Box2">
          <div className="Business-HeadTxt">{props.head}</div>
          <div className="SectionBlock4-Txt2">{props.title1}</div>
          <div className="SectionBlock4-Txt2">{props.title2}</div>
          <div className="SectionBlock4-Txt2">{props.title3}</div>
        </div>
      </div>
    </>
  );
}

export default SectionBlock4;
