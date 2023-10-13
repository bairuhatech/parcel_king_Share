import React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
function HeaderBusiness() {
  const navigate = useNavigate();
  const data = [
    {
      id: "1",
      title: "Last Mile Delivered",
      route: "/lastmiledelivery",
    },
    {
      id: "2",
      title: "Middle Mile Delivered",
      route: "/middlemistdelivery",
    },
    {
      id: "3",
      title: "LTL Shipping",
      route: "/ltlshipment",
    },
    {
      id: "4",
      title: "Hot Shot Delivery",
      route: "/hotShotdelivery",
    },
    {
      id: "5",
      title: "Pricing and Booking",
      route: "/pricingandbooking",
    },
    {
      id: "6",
      title: "Industries",
      route: "",
    },
    {
      id: "7",
      title: "Locations",
      route: "/deliverylocation",
    },
  ];
  const handleClik = (val: any) => {
    console.log("----val-----", val);
    navigate(`${val?.route}`);
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
