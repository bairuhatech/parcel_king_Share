import React from "react";
import "../styles.scss";
import LocationImage1 from "../../asset/image/locationmap.svg";
import { FaLocationDot } from "react-icons/fa6";
function Location() {
  return (
    <>
      <div className="location-Box1">
        <div className="location-Box2">
          <br />
          <div className="Business-HeadTxt">Current Cities Interactive Map</div>
          <br />
          <div className="location-Box3">
            <img className="img" src={LocationImage1} alt="" />
          </div>
          <br />
          <div className="location-Txt1">
            Vote to bring GoShare to your city! Fill out the form below to let
            us know you want GoShare to come to your area. If you have applied
            to become a driver you do not need to fill out this form. Your
            application will count as a vote toward your city.
          </div>
          <br />
          <div className="location-Box4">
            <FaLocationDot size={30} color="red" />
          </div>
          <br />
        </div>
      </div>
    </>
  );
}

export default Location;
