import React from "react";
import Header from "../../../component/websiteHeader";
import Footer from "../../../component/websiteFooter";
import BgCheckImage from "../../../asset/image/irish-courts.jpg";
import Recentposts from "../recentposts";
import Twitterbox from "../twitterbox";
import { BiUnderline } from "react-icons/bi";

const BgCheck = () => {
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
          <div className="vehiclerequirements-text1">Parcel-Kings's Blog</div>
          <div className="headerOfDelivery">
            Why Does Parcel-King Require a Background Check?
          </div>
        
          <br />
          <br />

          <div className="left-side-box1">
            <div className="left-side-box2">
              <img src={BgCheckImage} className="img-fluid" />
              <br />
              <br />
              <div className="Business-HeadTxt">
                Why Does Parcel-King Require a Background Check?
                <br />
                
              </div>
              <hr/>
              <br/>
              <div className="vehiclerequirements-para">
             
                When truck and van owners discover Parcel-King, many are excited to
                start right away. So, it can be dismaying to find that you are
                unable to start on the platform until you have passed a vehicle
                inspection and background check. These steps may seem
                time-consuming and are frustrating to some future Parcel-King
                delivery pros that are eager to begin accepting projects right
                away. But, they are necessary to ensure a high quality of
                service and to help create a safer working environment for
                everyone.
              </div>

              <br />
              <div className="vehiclerequirements-text4">
                Why Does Parcel-King Require a Background Check?
              </div>
              <br />
              <div className="vehiclerequirements-para">
                Background checks are required to ensure that delivery
                professionals on the Parcel-King platform have a safe driving record
                and no recent criminal history.
                <br />
                <br />
                Customers that hire Parcel-King Delivery Professionals want to
                ensure that the individuals they are hiring have no history of
                violence, theft, or substance abuse while driving. After all,
                delivery professionals will be transporting their goods and even
                coming into their homes. While these questions may be asked
                during the application process, it would be irresponsible to
                assume that every applicant is telling the truth. This position
                is subject to a background check for any convictions directly
                related to its duties and responsibilities. Only job-related
                convictions will be considered and will not automatically
                disqualify the candidate.
              </div>
              <br />
              <div className="vehiclerequirements-text4">
                What does the background check look for?{" "}
              </div>
              <br />
              <div className="vehiclerequirements-para">
                Parcel-King uses a third-party service called Turn to perform a
                comprehensive background check that validates the applicant’s
                social security number, address history, as well as looking
                through both national and local criminal and civil records,
                sex-offender registries, global watchlists, and driving records.
                These background checks are compliant with state and federal
                laws and are accredited by the National Association of
                Professional Background Screeners (NAPBS). You can contact Turn
                at 515 N. State St. 14th floor, Chicago, IL 60654, visit their
                support page, or call (888) 499-TURN.
                <br />
                The evaluation of background checks vary from city to city and
                is based on a combination of criteria specified in local laws
                and regulations governing delivery drivers, as well as Parcel-King’s
                internal safety standards. Applicable laws specifying the
                criteria Parcel-King must follow when reviewing background check
                results vary considerably by state, so individuals might be
                disqualified for criminal offenses and driving history not
                indicated here.
              </div>
              <br />
              <div className="vehiclerequirements-text4">
                What could make me fail the background check?
              </div>
              <br />
              <div className="vehiclerequirements-para">
                Subject to and in accordance with state and local law, some
                types of criminal convictions such as murder, sexual assault,
                and terrorism-related offenses will result in disqualification
                if they occurred at any time in your lifetime.
                <br />
                Convictions at any time in your lifetime for violent crimes,
                sexual offenses, and registered sex offender status, among other
                types of criminal records are also disqualifying*(see below).
                Pending charges for those categories of crimes are also
                disqualifying, unless and until such charges are resolved in
                your favor.
              </div>
              <br />
              <div
                className="vehiclerequirements-para"
                style={{ textDecoration: "underline" }}
              >
                Criminal Record
              </div>

              <ul>
                <div className="vehiclerequirements-para">
                  <li>
                    If you were convicted of a felony or violent misdemeanor, we
                    will assess your application on an individual basis. Felony
                    or violent misdemeanor convictions in the last 7 years may
                    be disqualifying.
                  </li>
                  <li>
                    No individuals registered on the National Sex Offender
                    Registry or DOJ50-State Sex Offender Registry.
                  </li>
                  <li>
                    No individuals included on domestic or international
                    government watch lists.
                  </li>
                </div>
              </ul>
              <br />
              <div style={{ textDecoration: "underline" }}>Driving Record</div>
              <ul>
                <div className="vehiclerequirements-para">
                  <li>
                    Must have in-state driver’s license for your state of
                    residence. Active duty military are exempt from the in-state
                    license requirement, but will be asked to provide proof of
                    service. No other exceptions.
                  </li>
                  <li>
                    No driving-related convictions for hit-and-run, speeding
                    100+ mph, reckless driving, street racing, or speed contest.
                  </li>
                  <li>
                    No DUI, DWI, or other drug-related driving violations in the
                    last 7 years.
                  </li>
                  <li>No major vehicle violation in the past 5 years.</li>
                  <li>
                    No violations in the past 3 years for driving on a
                    suspended, revoked or invalid license or insurance.
                  </li>
                  <li>No more than 2 moving violations in the past 3 years.</li>
                  <li>No more than 2 accidents in the past 3 years.</li>
                  <li>
                    No more than 1 moving violation and 1 accident in the past 3
                    years.
                  </li>
                  <li>
                    No more than 3 minor violations in the past 3 years
                    including accidents, traffic light violations, speeding, or
                    moving violations.
                  </li>
                  <li>
                    No infractions or violations if ages 18 to 21 years of age.
                    Must have at least 2 years of clean and unrestricted driving
                    experience.
                  </li>
                  <li>
                    No more than 1 cell phone or distracted driving violation in
                    the past 3 years.
                  </li>
                </div>
              </ul>
              <div className="vehiclerequirements-para">
                If you have one of these instances on your record, we suggest
                not moving forward with the background check or application.
                Background check fees are not refundable.
              </div>
              <br />
              <div className="vehiclerequirements-text4">
                How long does the background check take?
              </div>
              <br />
              <div className="vehiclerequirements-para">
                Every background check is unique to the individual, and so the
                time to complete them varies. In our experience most background
                checks take 3-5 business days to be completed. However if you
                have moved frequently and to many different locations, it may
                take a few extra days to obtain all your records for review.
                Applicants who live or have lived in California and
                Massachusetts may also experience longer than average turn
                arounds as the courts in these states generally take longer to
                respond to records requests.
              </div>
              <br />
              <div className="vehiclerequirements-text4">
                Will I receive a copy of my background check?
              </div>
              <br />
              <div className="vehiclerequirements-para">
                Yes, you will receive a copy of your background check at the
                same time our team receives the results.
              </div>
              <br />
              <div className="vehiclerequirements-text4">
                Can I submit a previous background check?
              </div>
              <br />
              <div className="vehiclerequirements-para">
                We are unable to accept previous background check reports you
                may have. Parcel-King operates with high standards to ensure the
                safety of customers, business partners, and other delivery pros
                on the platform.
              </div>
              <br />
              <div className="vehiclerequirements-text4">
                I believe there was an error on my report, what should I do?
              </div>
              <br />
              <div className="vehiclerequirements-para">
                If you believe there is an error on your report, please contact
                Turn to alert them to this mistake. If they amend your report,
                we will be able to move forward with your application. Be
                prepared to specify what is inaccurate and send any supporting
                documentation you have. Federal law gives background screening
                companies 30 days to reinvestigate the information and correct
                the report if they have made a mistake. If the source of the
                incorrect data was not a mistake from Turn but an error in the
                original records, you may need to file a dispute with the
                appropriate public agency.
              </div>
              <br />
              <div className="vehiclerequirements-text4">
                I failed the check, but I don’t think my past mistakes are an
                accurate reflection of my current self. Does Parcel-King make
                exceptions?
              </div>
              <br />
              <div className="vehiclerequirements-para">
                Unfortunately, we are not able to make exceptions.
              </div>
              <br />
              <div className="vehiclerequirements-text4">
                What does Parcel-King charge me for my background check?
              </div>
              <br />
              <div className="vehiclerequirements-para">
                Parcel-King asks that Delivery Professionals share the cost of the
                background check with our organization. We have found that when
                offered for free, we have a significant number of applicants
                that complete onboarding, but never do a single project. This
                increases our costs of operating the platform. By asking drivers
                to share the cost, we are ensuring that only drivers that are
                truly interested in accepting Parcel-King projects move forward. We
                eliminate the cost of onboarding applicants that are not
                committed and those savings are put back into our platform. This
                is one of the reasons earnings for projects on the Parcel-King
                platform average $42 – $76 an hour when most of our competitors
                average $15 – 30 an hour.
                <br />
                The background check fee is $49, or $154 if you have ever lived,
                worked, or received a citation in the state of New York. In
                2019, New York raised the prices of records requests in their
                state. Unfortunately, the high cost of conducting a background
                check in the state of New York requires us to charge a higher
                amount if you are a current or past resident of the state. The
                background check fee is non-refundable.
              </div>
              <br />
              <div className="vehiclerequirements-text4">
                Will Parcel-King reimburse me for my background check if I fail?
              </div>
              <br />
              <div className="vehiclerequirements-para">
                If you have challenges in your past that make you ineligible
                join the Parcel-King platform, please withdraw your application. You
                will not be reimbursed for a failed background check. The
                background check fee is non-refundable.
                <br />
                <br />
                —
                <br />
                <br />
                Ready to get started? Visit our Delivery Professional page to
                learn more about working Parcel-King and to start your application.
                <br />
                Still have questions? Check out our FAQ page or contact our
                customer service team.
                <br />
                *Depending on applicable regulations, laws, and practices in the
                city where you want to drive, this background screening may
                include an individualized assessment that considers any evidence
                of rehabilitation or good character you may provide.
                <br />
              </div>
            </div>
            {/* //////////////////////////////////////============right section======================////////// */}
            <div className="right-side-box1">
              <Recentposts />
              <Twitterbox />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BgCheck;
