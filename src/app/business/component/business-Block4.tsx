import React from "react";

function BusinessBlock4(props: any) {
  return (
    <>
      <div className="BusinessBlock4-Box1">
        <div className="BusinessBlock4-Box2">
          <div className="Business-HeadTxt">{props.head}</div>
          <div className="BusinessBlock4-Txt2">{props.title1}</div>
          <div className="BusinessBlock4-Txt2">{props.title2}</div>
          <div className="BusinessBlock4-Txt2">{props.title3}</div>
        </div>
      </div>
    </>
  );
}

export default BusinessBlock4;
