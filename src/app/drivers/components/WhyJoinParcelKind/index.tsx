import React from "react";
import "../../styles.scss";
import Goshareimg from "../../../../asset/image/budget.png";
import Goshareimg1 from "../../../../asset/image/shield.png";
import Goshareimg4 from "../../../../asset/image/money-bag.png";
import Goshareimg3 from "../../../../asset/image/communication_info_data_learning_book_information_icon_230372.png";
function WhyJoinParcelKing() {
  const data = [
    {
      image: Goshareimg,
      head: "Strong Earnings",
      title:
        "GoShare deliveries pay some of the highest per hour earnings in the logistics industry. Our top drivers earn thousands of dollars per month.",
    },
    {
      image: Goshareimg,
      head: "Flexible Hours",
      title:
        "As an independent contractor, you can work when you want and be your own boss. No need to let us know when you take some time off.",
    },
    {
      image: Goshareimg4,
      head: "Weekly Pay      ",
      title:
        "You won't wait long to get paid. GoShare handles customer payments, collections and gets you paid within 4 business days.",
    },
    {
      image: Goshareimg,
      head: "Benefits    ",
      title:
        "Enjoy access to discounts on health care, GM vehicles, tires, cash advances and more. Win cash and other prizes in one of our many contests.",
    },
    {
      image: Goshareimg3,
      head: "Build Your Business",
      title:
        "We're great at marketing, customer service and building apps to make your business run smoothly so you can focus on what you do best, delivering to customers. ",
    },
    {
      image: Goshareimg1,
      head: "You’re Covered",
      title:
        "Deliveries booked through the GoShare platform are covered by our comprehensive cargo insurance policy to minimize your exposure.",
    },
  ];
  return (
    <>
      <div className="whyJoinParcelKing-Box1">
        <div className="whyJoinParcelKing-Txt1">Why Join ParcelKing Share</div>
        <br />
        <div className="whyJoinParcelKing-Box5">
          {data.map((item: any) => {
            return (
              <>
                <div className="whyJoinParcelKing-Box6">
                  <div className="whyJoinParcelKing-Box7">
                    <div className="whyJoinParcelKing-Box8">
                      <img
                        className="whyJoinParcelKing-Img"
                        src={item.image}
                        alt=""
                      />
                    </div>
                    <div className="whyJoinParcelKing-Txt2">{item.head}</div>
                    <div className="whyJoinParcelKing-Txt3">{item.title}</div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <br />
        <div className="whyJoinParcelKing-Box9">
          <button className="whyJoinParcelKing-Btn1">Join Now</button>
        </div>
      </div>
    </>
  );
}

export default WhyJoinParcelKing;
