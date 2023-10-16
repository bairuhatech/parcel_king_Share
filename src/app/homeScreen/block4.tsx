import React from "react";
import { FaMapPin, FaRoute } from "react-icons/fa";
import { MdOutlineLocalShipping } from "react-icons/md";
import { GiCargoCrate } from "react-icons/gi";
import { LuConstruction } from "react-icons/lu";
import { BsBoxes } from "react-icons/bs";
import { ImOffice } from "react-icons/im";

function Block4() {
  const data = [
    {
      icon: <FaRoute color="grey" size={50} />,
      head: "Last Mile Delivery",
      title:
        "Parcel King partners with local businesses and retailers to provide on-demand last mile delivery. Parcel King can also be hired by individuals for store pickups.",
    },
    {
      icon: <MdOutlineLocalShipping color="grey" size={50} />,
      head: "LTL Shipments",
      title:
        "Select one of our large cargo vans or box truck drivers to get LTL, or Less Than Load, shipment to its destination. Parcel king is ideal for pallets and other middle mile cargo.",
    },
    {
      icon: <GiCargoCrate color="grey" size={50} />,
      head: "B2B Logistics",
      title:
        "Whether you're delivering from warehouses and distribution centers to storefronts or transferring products between stores, Parcel king can help your business keep moving.",
    },
    {
      icon: <LuConstruction color="grey" size={50} />,
      head: "Construction and Jobsites",
      title:
        "Deliver supplies, equipment, building materials, heavy machinery, and more to jobsites with Parcel King.",
    },
    {
      icon: <ImOffice color="grey" size={50} />,
      head: "Home and Office Moves",
      title:
        "Got a new place? Use Parcel king for home and apartment moves. Let our drivers help with the loading, transportation, and unloading of your furniture including beds, tables, couches, and more.",
    },
    {
      icon: <BsBoxes color="grey" size={50} />,
      head: "Courior Services",
      title: "Same-day local letter, mail, package and small parcel delivery.",
    },
  ];
  return (
    <>
      <div className="block4-Box1">
        <div className="Business-HeadTxt">Our Services And Features</div>
        <div className="block4-Box2">
          {data.map((item: any) => {
            return (
              <>
                <div className="block4-Box3">
                  <div className="block4-Box4">
                    <div className="block4-Box5">{item.icon}</div>
                    <div className="block4-Box6">
                      <div className="block4-Txt1">{item?.head}</div>
                      <div className="block4-Txt2">{item?.title}</div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Block4;
