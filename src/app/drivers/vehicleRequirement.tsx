import React from "react";
import vehireqtruck from "../../asset/image/vanDelivery.jpg";
import Header from "../../component/websiteHeader";
import Footer from "../../component/websiteFooter";
import "./styles.scss";
import Xemblem from '../../asset/image/X-Logo.jpg';

function VehicleRequirements() {
  const style = {
    background: "linear-gradient(208deg, #3d5877 0%, #151e29 100%)",
  };
  return (
    <>
      <Header bgColor={style.background} />
      <br />
      <br />
      <br />

      <div className="vehiclerequirements-box1">
        <div className="vehiclerequirements-box2">
          <div className="vehiclerequirements-text1">Parcel Kings's Blog</div>
          <div className="headerOfDelivery">
            Does My Vehicle Qualify for ParcelKing?
          </div>
            <br />
          <br />

          <div className="left-side-box1">
            <div className="left-side-box2">
              <img src={vehireqtruck} className="img-fluid" />
              <br />
              <br />
              <div className="vehiclerequirements-text2">
                Does My Vehicle Qualify for
                <br /> ParcelKing?
              </div>
              <div className="vehiclerequirements-para">
              Thinking about applying to ParcelKing, but not sure whether your
              vehicle is the right fit for our platform? Read the following
              guide to learn more about vehicle qualifications to accept
              projects on the ParcelKing platform.</div>
            <br/>
              <br />
              <div className="vehiclerequirements-text3">Vehicle Type</div>
              <br />
              <div className="vehiclerequirements-para">
              ParcelKing has projects for a wide variety of vehicles, from
              passenger cars to trucks and cargo vans. See our vehicle types
              below to learn more about the projects you will be eligible for:
              </div>
              <br />
              <br />
              <div className="vehiclerequirements-text4">Courier</div>
              <br />
              <div className="vehiclerequirements-para">
              Any vehicle that doesn’t fit into one of the other categories
              below is considered a courier vehicle on our platform. Courier
              vehicles are eligible to deliver small parcels, packages, and
              documents. Drivers of courier vehicles may also act as a helper on
              a project that requires multiple delivery pros. As a helper, they
              will assist with loading and unloading. They will not carry cargo.
              Projects intended for trucks and cargo vans are generally much too
              large for passenger vehicles, including SUVs, minivans, and
              hatchbacks. Unfortunately, we don’t currently have an option for
              SUVs + trailers.
              </div>
              <br />
              <br />
              <div className="vehiclerequirements-text4">Pickup Trucks</div>
              <br />
              <div className="vehiclerequirements-para">
              Pickup trucks should have a bed length of at least 5 feet. Trucks
              with shortened bed lengths, or modifications that shorten their
              bed lengths or widths, may not qualify for the “pickup truck”
              classification on the ParcelKing platform. This includes, but is
              not limited to, the Honda Ridgeline Gen1 models (before 2017) and
              Chevrolet Avalanche (all models). You may be asked to provide
              measurements of your vehicle bed if you have modifications, such
              as a permanent toolbox, that change the length of the vehicle. Any
              standard trucks that don’t meet the 5 ft. requirement are still
              eligible to join the platform as couriers (see above).
              </div>
              <br />
              <br />
              <div className="vehiclerequirements-text4">Cargo Vans</div>
              <br />
              <div className="vehiclerequirements-para">
              Full-size cargo vans are dedicated moving and delivery vehicles
              with no passenger seats behind the driver cab. Minivans, SUVs,
              passenger vans, and compact cargo vans do not have enough cargo
              space to accept ParcelKing cargo van projects. Compact cargo vans
              that do not qualify for the “Cargo Van” classification may include
              but are not limited to:
              </div>
              <br />
              <br />
              <ul className='vehiclerequirements-para'>
                <li>Ford Transit Connect</li>
                <li>Nissan NV200 Compact Cargo</li>
                <li>Ram ProMaster City</li>
                <li>Mercedes-Benz Metris</li>
                <li>Chevy City Express</li>
              </ul>
              <div className="vehiclerequirements-para">
              If you drive one of the vehicles mentioned above, you may still
              apply to work for ParcelKing. You will be able to accept courier
              projects and assist as a loading/unloading helper on large moves.
              </div>
              <br />
              <br />
              <div className="vehiclerequirements-text4">Box Trucks</div> <br />
              <div className="vehiclerequirements-para">
              ParcelKing accepts a range of box trucks on the platform, commonly
              between 12 and 26 feet. Tractor-trailers are not currently
              accepted on the platform. If you have a box truck that is less
              than 12 ft, you may apply under the Cargo Van vehicle type.
              </div>
              <br />
              <br />
              <div className="vehiclerequirements-text3">
                Vehicle Restrictions
              </div>
              <br />
              <div className="vehiclerequirements-para">
              Read below to learn if there are any restrictions that might
              prevent you from joining the ParcelKing platform.
              </div>
              <br/>
              <br/>
              
              <div className="vehiclerequirements-text4">
                After-Market Accessories
              </div><br/>
              <div className="vehiclerequirements-para">
              Most after-market accessories will not disqualify your vehicle
              from the ParcelKing platform. However, if modifications to your
              vehicle impact cargo space or shorten bed-length, you may be asked
              to reclassify your application to that of a courier.
              </div>
              <br />
              <br />
              <div className="vehiclerequirements-para">
              If you have a hard cap installed on your pickup truck, you may
              still apply for the ParcelKing platform. Please read project
              descriptions carefully and do not accept any projects that would
              not fit in your truck bed.
              </div>
              <br />
              <br />
              <div className="vehiclerequirements-text4">Vehicle Age</div>
              <br />
              <div className="vehiclerequirements-para">
              Vehicles must have a model year of 2001 or newer. This is an
              insurance requirement and we are not able to make exceptions, even
              for excellently maintained vehicles.
              </div>
              <br />
              <br />
              <div className="vehiclerequirements-text4">Rentals</div>
              <br />
              <div className="vehiclerequirements-para">
              ParcelKing allows rental cargo vans and box trucks on its platform
              if the rental agreement is for a period of at least 30 days. If
              your rental period is for 30 days or more, then you can apply with
              that vehicle.
              </div>
              <br />
              <br />
              <div className="vehiclerequirements-text4">Salvage Titles</div>
              <br />
              <div className="vehiclerequirements-para">
              Unfortunately, ParcelKing is not able to accept any vehicle with a
              rebuilt or salvage title.
              </div>
              <br />
              <br />
              <div className="vehiclerequirements-text3">
                Vehicle Inspection
              </div>
              <br />
              <div className="vehiclerequirements-para">
              Whether you are applying as a driver or a helper, your vehicle
              must still pass a vehicle inspection. This is an insurance
              requirement.
              </div>
              <br />
              <br />
              <div className="vehiclerequirements-para">
              You will be provided detailed instructions for the vehicle
              inspection once your application is processed. The inspection may
              be completed by going to a local service station, through a short
              video, or a free video call with a ParcelKing team member. You are
              expected to demonstrate several vehicle features including lights,
              steering, brakes, horn, seat belts, and windshield wipers.
              Vehicles with worn tires or body damage may be asked to resolve
              these issues prior to being approved for the platform. You may
              re-submit your inspection after your vehicle has been repaired.
              <br />
              <br />
              If you have had an inspection in the last six months, you may
              alert our driver onboarding team and they will review your
              documentation. If the inspection meets our company standards, you
              will be allowed to submit it as your inspection. The team may
              request you move forward with a new inspection if your existing
              report does not meet our standards or was not done recently enough
            </div>
              <br />
              <br />
              <div className="vehiclerequirements-text4">
                Vehicle Inspection – Exceptions
              </div>
              <br />
              <div className="vehiclerequirements-para">
              If you have a vehicle that has a model year that is current or
              newer than the current calendar year, you will go through a
              simplified inspection process. In 2022, a vehicle considered “new”
              for the purpose of a simplified vehicle inspection is a model year
              2022 or 2023. In 2023, this will be a model year 2023 or 2024.
              Because some states such as Massachusetts, Pennsylvania, Texas,
              and Virginia require annual vehicle safety inspections that meet
              our inspection criteria, applicants from these states may also be
              eligible for the simplified process.
              <br />
              <br />
              For those doing a simplified inspection, you will still be asked
              to provide images of the front, back, and sides of the vehicle.
              You must also provide proof of insurance and registration.
              </div>
              <br />
              <br />
              <div className="vehiclerequirements-text4">
                Registration and Insurance
              </div>
              <br />
              <div className="vehiclerequirements-para">
              The vehicle should be registered and insured within the state you
              wish to accept projects in. This documentation will be verified
              during your application process. If the vehicle is registered
              under another name, you may still use it with permission from the
              owner. Our driver onboarding team may request a letter from the
              owner verifying that you have their permission to use the vehicle
              on ParcelKing’s platform.
              <br />
              <br />
              Need help identifying and finding these documents? Read our post
              here for information and tips: What Documents Do I Need to Sign Up
              For ParcelKing?
          
              <br />
              <br />
              -
              <br />
              <br />
              Ready to get started? Visit our Delivery Professional page to
              learn more about working ParcelKing and to start your application.
              <br />
              <br />
              Have more questions? Check out our FAQ page or contact our
              customer service team.
              </div>
            </div>
            {/* //////////////////////////////////////============right section======================////////// */}
            <div className="left-side-box3">
              <div className="vehiclerequirements-text5">Recent Posts</div>
              <div className="vehiclerequirements-para">
              <ul>
                <li>
                  How ParcelKing Can Benefit Retailers with Shorter and Cheaper
                  Last Mile Delivery
                </li>
                <li>
                  Embracing the Future of Delivery: How ParcelKing’s Artificial
                  Intelligence is Modernizing Retail Delivery
                </li>
                <li>
                  Why ParcelKing Collects Proof of Delivery for Every Project
                </li>
                <li>Best Cargo Vans 2023</li>
                <li>Customer Spotlight: Good</li>
              </ul>
              </div>
              <div className="vehiclerequirements-text5">Follow Us</div>
              <div className="twitter-box">
                <div className="twitter-box-text1">Tweets from @ParcelKing3<hr/></div>
                <img src={Xemblem} className="img-fluid x-emblem"/>
                <br/>
                <br/>
                <br/>
                <div className="twitter-box-text2"> Nothing to see here - yet</div> 
                <div className="twitter-box-text3"> When they Tweet, their Tweets will show up here.</div>
                <br/>
                <br/>
                <button className="buttoncustom">View on Twitter</button>
                </div>
            </div>
          </div>
        
        </div>
      </div>

      <Footer />
    </>
  );
}

export default VehicleRequirements;
