import React from "react";
import "../styles.scss";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
function SectionCard1(props: any) {
  const navigate = useNavigate();
  const data = [
    { image: props.image1, head: props.head1, title: props.title1 },
    { image: props.image2, head: props.head2, title: props.title2 },
    { image: props.image3, head: props.head3, title: props.title3 },
    { image: props.image4, head: props.head4, title: props.title4 },
    { image: props.image5, head: props.head5, title: props.title5 },
    { image: props.image6, head: props.head6, title: props.title6 },
  ];

  const filteredData = data.filter(
    (item) => (item.image && item.head) || item.title
  );
  return (
    <div className="deliveryIndustries-Box1">
      <div className="deliveryIndustries-Box2">
        <div className="Business-HeadTxt">{props.heading}</div>
        <hr />
        {filteredData.map((item: any) => {
          return (
            <>
              <div className="deliveryIndustries-Box3">
                <div className="deliveryIndustries-Box4">
                  <div className="deliveryIndustries-Box5">
                    <img
                      className="deliveryIndustries-Img"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <br />
                  <div className="deliveryIndustries-Txt1">{item.head}</div>
                  {item.title ? (
                    <div className="deliveryIndustries-Txt2">{item.title}</div>
                  ) : null}
                </div>
              </div>
            </>
          );
        })}
        {props.buttonTxt ? (
          <div className="deliveryIndustries-Box6">
            <div className="deliveryIndustries-Box7">
              <Button
                className="form-Bttn1"
                onClick={() => navigate(props.dynamicUrl)}
              >
                {props.buttonTxt}
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default SectionCard1;
