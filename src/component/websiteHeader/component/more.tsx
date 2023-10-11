import React from "react";
import "./styles.scss";
function HeaderMore() {
  const data = [
    {
      id: "1",
      title: "About Us",
      route: "",
    },
    {
      id: "2",
      title: "Contact Us",
      route: "",
    },
    {
      id: "3",
      title: "Download App",
      route: "",
    },
    {
      id: "4",
      title: "Career",
      route: "",
    },
    {
      id: "5",
      title: "Blog",
      route: "",
    },
    {
      id: "6",
      title: "Investors",
      route: "",
    },
    {
      id: "7",
      title: "News",
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

export default HeaderMore;