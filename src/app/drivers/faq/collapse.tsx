import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import { Link } from "react-router-dom";

const items: CollapseProps["items"] = [
  {
    key: "1",
    label:
      "How do I sign up join Parcel-King and offer my services as a Delivery Professional driver?",
    children:
     <div>To learn more about joining the Parcel-King platform <Link to="/lernMoreDrivers">click here</Link> or if you want to <Link to="/signUpToDrive">apply now click here.</Link> The sign up process takes less than 5 minutes</div> 
  },
  {
    key: "2",
    label: "How much do Delivery Professionals using Parcel-King make?",
    children:
      "You get paid per delivery. You will know how much you are going to earn before you accept a delivery request. Project earnings vary based on your vehicle type, location, availability and time of year. Top performing Delivery Professionals can earn several thousand dollars per month. We do not make any guarantees of earnings or income. Every project will include unique earning information. Delivery Professionals may earn tips from customers. Tips can be paid in cash or in the app. Delivery professionals keep 100% of their tips.",
  },
  {
    key: "3",
    label: "What is a helper?",
    children: 
      <div>Helpers assist other Parcel-King Delivery Professionals when a customer requests two Delivery Professionals. This is typically for big and bulky items and home moves. All active Delivery Professionals are eligible to accept projects as a Helper. If you accept a Project as a Helper, you will assist with loading and unloading heavy items. The truck or van owner will take the cargo in their vehicle. Learn more about being a helper <Link to="/helper"> here</Link>.</div>
  
  },
  {
    key: "4",
    label: "Are helpers able to assist with or bill for furniture assembly??",
    children:
      "Currently, our platform does not allow a Helper to bill for furniture assembly. At the completion of the delivery, Helpers should end your project and depart. The primary delivery professional with a truck or van is responsible for assembly. Helpers should not participate in the assembly portion of the project as they are not able to bill customers for it.",
  },
  {
    key: "5",
    label:
      "What are the steps to joining the Parcel-King platform and accessing gigs posted there?",
    children: (
      <div>
        The first step is to apply <Link to="/signUpToDrive">online</Link>. The online application form only
        takes a few minutes. Your application will be screened for basic
        compatibility. Within a few minutes, you will receive a response from
        our team. If your application has been approved, you will be invited to
        watch a short information video.In order to accept projects on the
        Parcel-King platform, you will need to pass a <Link to="/vehiclerequirements">vehicle inspection</Link> and
        background check. You will be able to upload your vehicle documents,
        including vehicle registration and insurance, as well as proof of a
        vehicle inspection into your online account. Once your vehicle is
        approved, the final step is a <Link to="/bgcheck">background check</Link>. Once passed, we will
        request your bank information to set up direct deposit payments. Then
        you will be activated on the Parcel-King platform. Many Delivery Pros get
        through the process in about one week. However, the speed at which you
        get through the process will depend on how quickly you provide documents
        and if those documents are correct.
      </div>
    ),
  },
  {
    key: "6",
    label: "My initial application was rejected, can I reapply?",
    children:
      "Unfortunately, you did not pass our initial screening. Please do not reapply. We will not be able to accept your application. If anything changes we will reach out to you.",
  },
  {
    key: "7",
    label: "I have a trailer. Can I drive for Parcel-King?",
    children:
      <div>If your trailer is clean and well kept, it can be used for moving items on Parcel-King. There will be an option to indicate you have a trailer when you apply. To get started with your application, <Link to="/signUpToDrive">click here</Link></div>
  },
  {
    key: "8",
    label: "I have an SUV or minivan, can I drive for Parcel-King?",
    children:
    <div>Yes! You may apply and qualify for small parcel delivery gigs or act as a <Link to="/helper">helper</Link>  to assist with loading and unloading on big and bulky cargo. We sometimes refer to this role as a Courier. Learn more about the types of vehicles on the Parcel-King platform <Link to="/vehiclerequirements">here</Link>.</div>
  },
  {
    key: "9",
    label: "Can I use a vehicle with a salvage title?",
    children: "No, we are not able to accept salvage titles on the platform.",
  },
  {
    key: "10",
    label: "How large does my box truck need to be to qualify for Parcel-King?",
    children:
      "Your box truck should be at least 12 feet long. If you have a box truck that is less than 12 feet, you may still apply and accept projects in the Cargo Van category.",
  },
  {
    key: "11",
    label:
      "Does Parcel-King have programs to help delivery pros buy or lease new vehicles?",
    children:
      "Delivery professionals approved for work on the Parcel-King platform may be eligible to receive discounts on select General Motors vehicle models from GMC, Chevrolet, Buick, and Cadillac. Learn more about this exclusive discount program here.",
  },
  {
    key: "12",
    label: "Do I have to complete a background check?",
    children: (
      <>
        <div>
          Yes. In order to join Parcel-King you must complete a <Link to="/bgcheck">background check</Link>  and
          a motor vehicle record check.
        </div>
        <div>Criminal Record</div>
        <ul>
          <li>
            If you were convicted of a felony or violent misdemeanor, we will
            assess your application on an individual basis. Felony or violent
            misdemeanor convictions in the last 7 years may be disqualifying.
          </li>
          <li>
            No individuals registered on the National Sex Offender Registry or
            DOJ50-State Sex Offender Registry.
          </li>
          <li>
            No individuals included on domestic or international government
            watch lists.
          </li>
        </ul>
        <br />
        <div>Driving Record</div>
        <ul>
          <li>
            Must have in-state driver’s license for your state of residence.
            Active duty military are exempt from the in-state license
            requirement, but will be asked to provide proof of service. No other
            exceptions.
          </li>
          <li>
            No driving-related convictions for hit-and-run, speeding 100+ mph,
            reckless driving, street racing, or speed contest.
          </li>
          <li>
            No DUI, DWI, or other drug-related driving violations in the last 7
            years.
          </li>
          <li>No major vehicle violation in the past 5 years.</li>
          <li>
            No violations in the past 3 years for driving on a suspended,
            revoked or invalid license or insurance.
          </li>
          <li>No more than 2 moving violations in the past 3 years.</li>
          <li>No more than 2 accidents in the past 3 years.</li>
          <li>
            No more than 1 moving violation and 1 accident in the past 3 years.
          </li>
          <li>
            No more than 3 minor violations in the past 3 years including
            accidents, traffic light violations, speeding, or moving violations.
          </li>
          <li>
            No infractions or violations if ages 18 to 21 years of age. Must
            have at least 2 years of clean and unrestricted driving experience.
          </li>
          <li>
            No more than 1 cell phone or distracted driving violation in the
            past 3 years.
          </li>
        </ul>
        <div>
          kground check fees are not refundable. Pending charges for any and all
          Criminal or Driving violations could be disqualifying, unless and
          until such charges are resolved in your favor. To learn more about
          Parcel-King’s background check process, <Link to="/bgcheck">click here</Link>.
        </div>
      </>
    ),
  },
  {
    key: "13",
    label:
      "I tried to log into my account, but it says it is blocked by admin. What does this mean?",
    children:
      "After you apply to join the Parcel-King platform, we will review your application and email you with the next steps. Your account will remain blocked and your status inactive until you complete the entire onboarding process.",
  },
  {
    key: "14",
    label:
      "My vehicle was made before 2001 and in good condition. Can you make an exception?",
    children:
      "Unfortunately, we can not. All vehicles must have a model year of 2001 or newer. This is an insurance requirement and we are unable to make exceptions.",
  },
  {
    key: "15",
    label:
      "What do I do if I can't find my vehicle make and model on the Parcel-King application form ",
    children:
    <div>If you don’t see your truck, van or car listed, please <Link to="/contactus">contact us</Link>  at and let us know the make and model of the vehicle you are trying to register and we will add it.</div>
  },
  {
    key: "16",
    label: "How long does the background check take?",
    children:
      <div>Background checks typically take 3-5 business days to be completed. However, if you have moved frequently it may take a few extra days to obtain all your records for review. Applicants who live or have lived in California and Massachusetts may also experience longer than average turn arounds as the courts in these states generally take longer to respond to records requests. Learn more about our background check process <Link to="/bgcheck">here</Link>.</div>
  },
  {
    key: "17",
    label: "How much work can I expect from Parcel-King?",
    children:
      "The number of projects you do with Parcel-King will vary based on your location, vehicle type, availability and seasonality. Most use Parcel-King as a part-time opportunity to supplement their existing delivery and moving business. Top performing Delivery Professionals can earn several thousand dollars per month. We do not make any guarantees of earnings or income.",
  },
  {
    key: "18",
    label: "Will I get pay for deadhead, or time on the road without freight?",
    children:
      "No, you are billing the customer for the time between the start of the project and the end of the project. You are not able to bill the customer for the time it takes you to arrive at the project location or to return to your home.",
  },
  {
    key: "19",
    label: "Are there any costs associated with joining Parcel-King?",
    children: (
      <div>
        Before you can accept projects through Parcel-King you must pass a
        <Link to="/bgcheck"> background check</Link>. Delivery Professionals cover the costs of the
        background check which is $49, or $154 if you have ever lived in New
        York state. This fee is non-refundable. Background checks typically take
        3-5 business days to be completed. However if you have moved frequently
        it may take a few extra days to obtain all your records for review.
        Applicants who live or have lived in California and Massachusetts may
        also experience longer than average turn arounds as the courts in these
        states generally take longer to respond to records requests. In 2019, NY
        raised the prices of records requests in their state. Unfortunately the
        high cost of conducting a background check in the state of NY applies to
        anyone who has ever lived, worked, or received a citation in the state
        of New York.
        <br />
        Once you are an active delivery professional, Parcel-King will take a % of
        the project fees for each project accepted through our system. This
        covers the cost of Parcel-King’s services, including marketing to customers,
        insurance, customer service, billing and more.",
      </div>
    ),
  },
  {
    key: "20",
    label: "I have a brand new vehicle. Can I skip the vehicle inspection?",
    children:
      "If you have a vehicle that has a model year which is current to or newer than the current calendar year, you will go through a simplified inspection process. Instead of completing a full inspection, you will simply be asked to provide images of the front, back and sides of the vehicle.In 2023, a vehicle considered “new” for the purpose of a simplified vehicle inspection is a model year 2023 or later.",
  },
  {
    key: "21",
    label:
      "My state requires an annual safety inspection. Do I still need to get an inspection for Parcel-King?",
    children:
      "States such as Massachusetts, New York, North Carolina, Pennsylvania, Texas, and Virginia require annual vehicle safety inspections that meet our inspection criteria. Applicants from these states may be eligible for a simplified inspection process. For those doing a simplified inspection, you will still be asked to provide images of the front, back, and sides of the vehicle. You must also provide proof of insurance and registration.",
  },
  {
    key: "22",
    label: "Do I need to have insurance to work with Parcel-King?",
    children: (
      <div>
        Yes! You must always have valid automotive, liability, health and any
        other insurance required in accordance with state and federal laws.
        Check your local state regulations for more information about what is
        required to transport goods in your state. Parcel-King’s supplemental
        insurance covers the cargo being carried for customers. In the event
        that you cause damage to the customers’ item or property, you are
        responsible for cost to replace or repair. At Parcel-King’s sole discretion,
        Parcel-King may charge you any or all of the deductible or other
        out-of-pocket expenses Parcel-King is required to pay as a result of that
        claim. Can’t find your insurance card or aren’t sure what to send? Click
        here to learn more about the documents Parcel-King needs to review. We also
        recommend Worker Compensation, General Liability and Commercial
        Automotive policies to protect you and your business in case on an
        accident. Learn more about recommended insurance for Delivery
        Professionals here.
      </div>
    ),
  },
  {
    key: "23",
    label: "What documents do I need to provide during my application?",
    children:
      "Parcel-King will need to verify your vehicle insurance, registration and license to drive. We will also need a W9 so that we can provide you with a 1099-K at the end of the year. For more information about what these documents are, and how to find them, click here. We may ask for additional documents to prove your eligibility to join Parcel-King.",
  },
  {
    key: "24",
    label:
      "I'm doing business under a company name. Does this change my application?",
    children:
      "If your vehicle registration is in your business’s name, our team will request that you email us a copy of your DBA, articles of formation, or other legal document showing your relationship to the business entity. You will be required to provide proof of insurance that includes your given name as insured on the document, not just your business name. Your insurance company will be able to provide this if you do not already have it.",
  },
  {
    key: "25",
    label: "Do I need any special equipment?",
    children:
      "All delivery professionals using the platform must have a working vehicle and an iPhone or Android phone in order to accept projects. Parcel-King suggests that delivery professionals carry ratchet straps and moving blankets in order to safely secure cargo. We also recommend but do not require, a hand truck, dolly, furniture dolly, and a small tool kit. Lift gates are a common request as well for box trucks. Some projects may include requests for these extra pieces of equipment. You can only accept these projects if you have the equipment on-hand. When additional equipment is requested for a project, such as a tool kit for assembly, the driver will bill the customer an additional fee for bringing and using the item. Here is a list of equipment that you should consider.",
  },
  {
    key: "26",
    label: "What is Parcel-King's distracted driving policy?",
    children:
      "Drivers should minimize all driving distractions when when driving. Delivery professionals should not to be accompanied by any other persons, other than platform employees or an active Parcel-King delivery professional while operating the vehicle while completing a Parcel-King project. All delivery professionals should utilize a hands-free device or Bluetooth technology when using a mobile phone while driving or pull off the road to a safe area if they do not have a hands-free device or Bluetooth technology. Delivery professionals should not use headphones while driving.",
  },
  {
    key: "27",
    label: "How and when do I get paid?",
    children:
      "Parcel-King invoices the customer on your behalf. Payments will be sent through direct deposit using Routable. We will verify your bank account before your account is activated. It usually takes 4-5 days after you complete a project before the money is transferred into your account. On rare occasions we may send you a payment via a trusted online payment processor such as PayPal or Zelle. If you are missing a payment click here.",
  },
  {
    key: "28",
    label: "Does Parcel-King offer cash advances?",
    children:
      "Parcel-King does not offer advances on payment. However, we do work with Level to help drivers get the advances they need to invest in growing their personal business. Learn more and see if you qualify.",
  },
  {
    key: "29",
    label: "I am missing a payment. What do I do?",
    children:
      "It usually takes 3-5 business days after you complete a project before the money is transferred into your account. If more than 7 days has passed and you are missing a payment, please click here to fill out our missing payments form, we do our best to get you paid as soon as possible.",
  },
  {
    key: "30",
    label: "Will I receive a 1099 or W2 form for my taxes?",
    children:
      "If you earned more than $20,000 and completed 200 transactions in a taxable year from Parcel-King projects, you will receive a 1099-K.",
  },
  {
    key: "31",
    label: "Can a customer ride in my vehicle?",
    children:
      "No, customers should never ride in your vehicle. Please only transport cargo, not passengers.",
  },
  {
    key: "32",
    label: "Can I bring a firearm or open carry while on a Parcel-King project?",
    children:
      <div>We understand that some of our Delivery Professionals may own and have a license to carry firearms or guns. As fellow Americans, we respect your second amendment right to own a firearm. With that being said, we highly recommend that you leave your firearms at home or in your vehicle while completing a Parcel-King project. Several of our retail partners prohibit carrying weapons on their property. Some customers may be uncomfortable by the presence of a firearm and request to have you removed from their project. We want to avoid situations where a customer might cancel a project or leave you with a poor review. If you ever come across a Parcel-King project that you feel is not safe enough to complete without carrying a weapon, we suggest canceling that project and <Link to="/contactus">reporting the circumstances to us at here</Link>. We will contact the customer to help make a determination if the situation is safe to proceed. Thank you for understanding and for your cooperation.</div>
  },
  {
    key: "33",
    label: "I saw a project come in, then it disappeared. Where did it go?",
    children:
      "This means that another Delivery Professional has accepted the project request. The first Delivery Professional to accept the request will get the project.",
  },
  {
    key: "34",
    label: "How can I get more deliveries?",
    children:
      <div>Look for tips and ideas on our Driver<Link to="resources-center"> Resource Center</Link>. You may also wish to join the private Parcel-King Delivery Pro Facebook group. In this group, delivery professionals share ideas, tips, provide direct feedback to Parcel-King, and may get access to exclusive content. Please wait until your Parcel-King account is active before requesting to join the private facebook group. Delivery Professionals may be removed from the facebook group at Parcel-King’s discretion.</div>
  },
  {
    key: "35",
    label: "What if I can't safely transport a customer's item?",
    children:
      <div>Inclement weather, extremely heavy cargo, and unsafe loading environments can sometimes occur. We encourage you to reach out immediately to our <Link to="/contactus">customer service team </Link>on our website or using the chat feature in the Driver App. Most customers will understand that it is in everyone’s best interest to keep all people and items safe and will work with you and Parcel-King customer service to find a solution.</div>
  },
  {
    key: "36",
    label: "Will Parcel-King be sending me SMS text messages?",
    children: "Parcel-King delivery professionals receive project notifications through the app. However, there are times Parcel-King will send SMS text messages for specific urgent projects or other important communication. You can stop receiving text messages from Parcel-King at anytime by replying “unsubscribe”.",
  },
  {
    key:"37",
    label:"What happens if I need to cancel a project?",
    children:<div>We understand that life happens and conflicts may arise suddenly. You may click on the project in your app and cancel the project if you are unable to complete the project that you accepted on time.

    Reliability is important to customers that use the Parcel-King platform. Cancellations damage our relationships with customers, reducing the likelihood of future bookings and hurting all delivery professionals that rely on Parcel-King for their livelihood.<br/>
    
    If a delivery professional accepts a project and cancels or does not complete the project as scheduled, Parcel-King may at its discretion impose penalties that include:  (a) temporary suspension of your Parcel-King account; (b) monetary fines not to exceed $50; (c) permanent deactivation of your Parcel-King account. Read our full driver cancellation policy.</div>
  },
  {
    key:"38",
    label:"Do customers rate each Delivery Professional?",
    children:"Yes, customers are able to share feedback on their experience with each delivery professional. Delivery professionals can also send us feedback on each customer."
  },
  {
    key:"39",
    label:"How do I contact customer support?",
    children:<div>You can contact us by <Link to="/contactus">clicking here </Link>. You can also look for the chat feature on the bottom right corner of most pages on our website.</div>
  },
  {
    key:"40",
    label:"Why can't I see the project pickup time in my app?",
    children:"The Parcel-King Driver App is currently compatible with a 12-hour clock only. If you are using a 24-hour clock please edit your settings and change to a 12-hour clock."
  },
  {
    key:"41",
    label:"Can I receive tips from customers?",
    children:"Yes, customers are able to leave tips for exceptional service in the app. You will keep 100% of the tips awarded to you. If you do a Project with another delivery professional, the customer has the ability to tip each of you individually. If a customer offers you a cash tip you may accept it. If a customer gives a cash tip and two delivery professionals worked on the project, the tips should be split evenly 50/50."
  },
  
  {
    key:"42",
    label:"What does the HAZMAT designation mean on certain projects?",
    children:"You may see some GoShare projects offered through our business partners that are considered hazardous materials. Hazmat refers to cargo that contains material or substances that pose a danger to life, property, or the environment if improperly stored, shipped, or handled. These hazardous items require special handling. GoShare expects every delivery professional who accepts a Hazmat designated project to have taken the Hazmat 101 review, which can be accessed here. Once you have taken the Hazmat 101 review there is a short assessment, which you must pass. If you already have a license to transport Hazmat you can send it to us before completing the Hazmat Project."
  },
  
  {
    key:"43",
    label:"What do I need to do in order to accept a HAZMAT designated project?",
    children:"For all projects with a Hazmat designation you must first take the GoShare Hazmat 101 review and pass the corresponding assessment. If you have taken and passed the assessment you must then verify the total weight of the material deemed Hazmat. This will be listed in the project details. For any hazmat project over 1001 lbs, state and federal guidelines REQUIRE the Delivery Professional to have a CDL license with Hazmat Endorsement. In addition the driver must have placards on their vehicle which correspond to the hazardous cargo being transported."
  },
  {
    key:"44",
    label:"Who do I call if I have an issue regarding a HAZMAT project?",
  children:"Please contact GoShare customer service immediately to determine next steps. You can reach customer service through chat in the app or by giving them a call. Depending on the situation, customer service may contact the client or Chemtrec (GoShare’s hazmat emergency response partner)."
  },
    {
    key:"45",
    label:"Am I required to use a mask when using Parcel-King?",
    children:<div>Parcel-King delivery professionals are not required to wear masks. However we recommend that delivery professionals follow all national and regional regulations regarding face coverings. When working on private property, such as a business, that requires masks we encourage you to respect the location’s guidelines regarding face coverings.<br/>

You may take health precautions, such as wearing a mask, avoiding hand shakes, and keeping a six-foot distance between you and the customer, at your own discretion. You can also minimize face-to-face conversation by using the communication tools within the app to reach out to your driver.<br/>

If you feel sick, have had direct contact with someone that has a confirmed diagnosis of COVID-19, or have been asked to quarantine, we do not recommend that you accept a project at this time.</div>
  },
  
];


const Collapse1: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return <Collapse items={items} onChange={onChange} ghost accordion />;
};

export default Collapse1;
