import React from "react";
import "../styles.scss";
// import Goshareimg from "../../../asset/image/shareCar.png";
// import Goshareimg from "../../../asset/image/ShareTruck.png";
import Goshareimg from "../../../asset/image/moving-truck_4171936.png";
function DriversBlock2() {
  const data = [
    {
      image: Goshareimg,
      head: "Pickup Truck",
      title: "Average earnings up to $70 per hour",
    },
    {
      image: Goshareimg,
      head: "Full-Sized Cargo Van",
      title: "Average earnings up to $105 per hour",
    },
    {
      image: Goshareimg,
      head: "Box Truck",
      title: "Average earnings up to $168 per hour",
    },
    {
      image: Goshareimg,
      head: "Courier (Cars, SUVs, Minivans)      ",
      title: "Average earnings up to $45 per hour",
    },
    {
      image: Goshareimg,
      head: "Labor Only      ",
      title: "Average earnings up to $60 per hour ",
    },
    {
      image: Goshareimg,
      head: "Fleets      ",
      title: "Click Here To LearnMore",
    },
  ];
  return (
    <>
      <div className="driversBlock2-Box1">
        <div className="driversBlock2-Txt1">How Much Can I Earn?</div>

        <div className="driversBlock2-Box5">
          {data.map((item: any) => {
            return (
              <>
                <div className="driversBlock2-Box6">
                  <div className="driversBlock2-Box7">
                    <div className="driversBlock2-Box8">
                      <img
                        className="driversBlock2-Img"
                        src={item.image}
                        alt=""
                      />
                    </div>
                    <div className="driversBlock2-Txt2">{item.head}</div>
                    <div className="driversBlock2-Txt3">{item.title}</div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <br />
        <div className="driversBlock2-Box9">
          <button className="driversBlock2-Btn1">
            Does My Vehicle Qualify?
          </button>
        </div>
      </div>
    </>
  );
}

export default DriversBlock2;
