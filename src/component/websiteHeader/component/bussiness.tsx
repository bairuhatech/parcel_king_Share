import React from "react";
import "./styles.scss";
function HeaderBusiness() {
  const data = [
    {
      id: "1",
      title: "Last Mile Delivered",
      route: "",
    },
    {
      id: "2",
      title: "Middle Mile Delivered",
      route: "",
    },
    {
      id: "3",
      title: "LTL Shipping",
      route: "",
    },
    {
      id: "4",
      title: "Hot Shot Delivery",
      route: "",
    },
    {
      id: "5",
      title: "Pricing and Booking",
      route: "",
    },
    {
      id: "6",
      title: "Industries",
      route: "",
    },
    {
      id: "7",
      title: "Locations",
      route: "",
    },
  ];
  const handleClik = (val: any) => {
    console.log("----val-----", val);
  };
  return (
    <>
      <div className="WebsiteHeaderBusiness-Box1">
        {data.map((item: any) => {
          return (
            <div>
              <div
                className="WebsiteHeaderBusiness-Box2"
                onClick={() => handleClik(item)}
              >
                {item.title}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default HeaderBusiness;
