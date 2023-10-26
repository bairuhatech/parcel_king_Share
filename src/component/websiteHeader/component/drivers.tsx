import React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";

function HeaderDrivers() {
  const navigate = useNavigate();

  const data = [
    {
      id: "1",
      title: "Sign Up To Drive",
      route: "/signUpToDrive",
    },
    {
      id: "2",
      title: "Learn More",
      route: "/lernMoreDrivers",
    },
    {
      id: "3",
      title: "Benefits",
      route: "/benefits",
    },
    {
      id: "4",
      title: "Reviews",
      route: "/driver-review",
    },
    {
      id: "5",
      title: "My Account",
      route: "",
    },
    {
      id: "6",
      title: "Get More Works",
      route: "/getmorework",
    },
    {
      id: "7",
      title: "Vehicle Requirements",
      route: "/vehiclerequirements",
    },
    {
      id: "8",
      title: "Fleet Owners",
      route: "/fleetowners",
    },
    {
      id: "9",
      title: "Resource Center",
      route: "/resources-center",
    },
    {
      id: "10",
      title: "Frequently Asked Questions",
      route: "/faq",
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

export default HeaderDrivers;
