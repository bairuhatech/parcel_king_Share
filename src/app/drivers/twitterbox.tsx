import React from "react";
import Xemblem from "../../asset/image/X-Logo.jpg";

const Twitterbox = () => {
  return (
    <div>
      <div className="twitter-box">
        <div className="twitter-box-text1">
          Tweets from @ParcelKing3
          <hr />
        </div>
        <img src={Xemblem} className="img-fluid x-emblem" />
        <br />
        <br />
        <br />
        <div className="twitter-box-text2"> Nothing to see <br/>here - yet</div>
        <div className="twitter-box-text3">
          {" "}
          When they Tweet, their Tweets will show up here.
        </div>
        <br />
        <br />
        <button className="buttoncustom">View on Twitter</button>
      </div>
    </div>
  );
};

export default Twitterbox;
