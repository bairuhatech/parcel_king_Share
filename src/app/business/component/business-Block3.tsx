import React from "react";

function BusinessBlock3(props: any) {
  return (
    <>
      <div className="BusinessBlock3-Box1">
        <div className="BusinessBlock3-Box2">
          <div className="Business-HeadTxt">{props.head}</div>
          <div className="BusinessBlock3-Txt2">{props.title1}</div>
          <div className="BusinessBlock3-Txt2">{props.title2}</div>
          <div className="BusinessBlock3-Txt2">{props.title3}</div>
        </div>
      </div>
    </>
  );
}

export default BusinessBlock3;
