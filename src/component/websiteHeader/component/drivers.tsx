import React from "react";
import "./styles.scss";
function HeaderDrivers() {
  const data = [
    {
      id: "1",
      title: "Sign Up To Drive",
      route: "",
    },
    {
      id: "2",
      title: "Benefits",
      route: "",
    },
    {
      id: "3",
      title: "Reviews",
      route: "",
    },
    {
      id: "4",
      title: "My Account",
      route: "",
    },
    {
      id: "5",
      title: "Get More Works",
      route: "",
    },
    {
      id: "6",
      title: "Vehicle Recuirements",
      route: "",
    },
    {
      id: "7",
      title: "Fleet Owners",
      route: "",
    },
    {
      id: "8",
      title: "Resource Center",
      route: "",
    },
    {
      id: "9",
      title: "Frequently Ask Questions",
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

export default HeaderDrivers;
