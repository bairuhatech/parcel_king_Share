import React from "react";
import Xemblem from "../../asset/image/X-Logo.jpg";

const Twitterbox = () => {
  const [twitterLink, setTwitterLink] = React.useState("");

  React.useEffect(() => {
    const twitterAccount = "@ParcelKing3";
    setTwitterLink(`https://twitter.com/${twitterAccount}`);
  }, []);

  return (
    <div>
      <div className="vehiclerequirements-text5">Follow Us</div>
      <div className="twitter-box">
        <div>
          <a href={twitterLink} target="_blank" className="twitter-box-text1">
            Tweets from @ParcelKing3
          </a>
          <hr />
        </div>
        <img src={Xemblem} className="img-fluid x-emblem" />
        <br />
        <br />
        <br />
        <div className="twitter-box-text2">
          Nothing to see <br />
          here - yet
        </div>
        <div className="twitter-box-text3">
          When they Tweet, their Tweets will show up here.
        </div>
        <br />
        <br />
        <button className="buttoncustom">
          <a href={twitterLink} target="_blank" className="buttoncustom">
            View on Twitter
          </a>
        </button>
      </div>
    </div>
  );
};

export default Twitterbox;
