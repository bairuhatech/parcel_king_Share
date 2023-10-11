import React from "react";
import "./styles.scss";
function HeaderIndividuals() {
  const data = [
    {
      id: "1",
      title: "Free Price Estimate",
      route: "",
    },
    {
      id: "2",
      title: "Help Moving",
      route: "",
    },
    {
      id: "3",
      title: "Moving Trucks",
      route: "",
    },
    {
      id: "4",
      title: "Retail Delivery",
      route: "",
    },
    {
      id: "5",
      title: "Junk Hauling",
      route: "",
    },
    {
      id: "6",
      title: "Donate",
      route: "",
    },
    {
      id: "7",
      title: "Reviews",
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

export default HeaderIndividuals;