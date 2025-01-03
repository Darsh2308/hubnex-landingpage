import circle8 from '../assets/Circle8.png'; // Import the Circle8 image
import circle9 from '../assets/Circle9.png'; // Import the Circle9 image
import company from '../assets/Companies.png'; // Import the Company image
import button2 from '../assets/Button2.png'; // Import the Button2 image
import button1 from '../assets/Button1.png'; // Import the Button1 image
import benefits from '../assets/benefits.png'; // Import the Benefits image
import frame24 from '../assets/Frame 24.png'; // Import the Frame24 image
import subcontainer3Image from '../assets/casestudycontainer.png'; // Import the Subcontainer3 image
import reviewList from '../assets/Review List.png'; // Import the Review List image
import review2 from '../assets/review2.png'; // Import the Review 2 image
import exp from '../assets/exp.png'; // Import the exp image
import '../pages.css'; // Import the CSS file for LandingPage styles

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="text-container">
        <div className="title-container">
          <p>High-performing remote teams.<br />The future of work.</p>
        </div>
        <div className="subtitle-container">
          <p>
            Powerful, self-serve team engagement tools and analytics.<br />
            Supercharge your managers & keep employees engaged from anywhere.
          </p>
        </div>
        <div className="review-container">
          <p>⭐⭐⭐⭐⭐ 4.5 (from 200+ reviews)</p>
        </div>
      </div>
      <div className="company-image-container">
        <img src={company} alt="Company" className="company-image" />
      </div>

      {/* Benefits image added below the company image */}
      <div className="benefits-image-container">
        <img src={benefits} alt="Benefits" className="benefits-image" />
      </div>

      {/* New Frame24 image added below the benefits image */}
      <div className="frame24-image-container">
        <img src={frame24} alt="Frame 24" className="frame24-image" />
      </div>

      {/* Case Study Container */}
      <div className="case-study-container">
        {/* Subcontainer 1 */}
        <div className="case-study-subcontainer1">
          <div className="case-study-title">
            Case studies for the <br /> community
          </div>
          <div className="case-study-subcontainer-text1">
            Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          </div>
        </div>

        {/* Subcontainer 2 */}
        <div className="case-study-subcontainer2">
          {/* Subcontainer 3 */}
          <div className="case-study-subcontainer3">
            <img
              src={subcontainer3Image}
              alt="Subcontainer 3"
              className="subcontainer3-image"
            />
            <div className="subcontainer3-content-title">
              What is Ad Exposure and Why It <br />Matters?
            </div>
            <div className="subcontainer3-content-text">
              Lorem ipsumLorem ipsumLorem <br /> ipsumLorem ipsumLorem ipsumLorem <br />ipsum
            </div>
            {/* Article Redirect Text */}
            <div className="subcontainer3-article-redirect">
              Read Full Article↗
            </div>
          </div>

          {/* Subcontainer 4 */}
          <div className="case-study-subcontainer4">
            <img
              src={subcontainer3Image}
              alt="Subcontainer 4"
              className="subcontainer4-image"
            />
            <div className="subcontainer4-content-title">
              What is Ad Exposure and Why It <br />Matters?
            </div>
            <div className="subcontainer4-content-text">
              Lorem ipsumLorem ipsumLorem <br /> ipsumLorem ipsumLorem ipsumLorem <br />ipsum
            </div>
            {/* Article Redirect Text */}
            <div className="subcontainer4-article-redirect">
              Read Full Article↗
            </div>
          </div>

          {/* Subcontainer 5 */}
          <div className="case-study-subcontainer5">
            <img
              src={subcontainer3Image}
              alt="Subcontainer 5"
              className="subcontainer5-image"
            />
            <div className="subcontainer5-content-title">
              What is Ad Exposure and Why It <br />Matters?
            </div>
            <div className="subcontainer5-content-text">
              Lorem ipsumLorem ipsumLorem <br /> ipsumLorem ipsumLorem ipsumLorem <br />ipsum
            </div>
            {/* Article Redirect Text */}
            <div className="subcontainer5-article-redirect">
              Read Full Article↗
            </div>
          </div>

          {/* Rectangle Added Below Subcontainer 2 */}
          <div className="rectangle"></div>
          <div className="rectangle1"></div>
        </div>
      </div>

      {/* New Call to Action Container */}
      <div className="call-to-action-container">
        <img
          src={reviewList}
          alt="Review List"
          className="ReviewList"
        />
        <div className="ReviewListTitle">
          Start building high performing <br />website & grow your business fast.
        </div>
        {/* New review2 image below the title */}
        <img
          src={review2}
          alt="Review 2"
          className="review2"
        />
        {/* Removed Nav Items image and added Connect Sales Button */}
        <button className="connect-sales-button1">
          Connect Sales<b>→</b>
        </button>
        {/* New subtitle below Connect Sales Button */}
        <div className="subtitle-below-nav">
          We are big enough to deliver and small enough to care
        </div>

        {/* New subtitle2 below subtitle-below-nav */}
        <div className="subtitle2-below-nav">
          Teams large and small rely on Hubnex Labs
        </div>

        {/* New Connect Sales Button */}
        <button className="connect-sales-button2">
          Connect Sales<b>→</b>
        </button>

        {/* New image added below the Connect Sales button */}
        <img
          src={exp}
          alt="Experience"
          className="exp-image"
        />
      </div>

      <img src={circle8} alt="Circle 8" className="circle8" />
      <img src={circle9} alt="Circle 9" className="circle9" />

      {/* New button images below the review section */}
      <div className="button-container">
        <div className="button2-container">
          <img src={button2} alt="Button 2" className="button2" />
        </div>

        <div className="button1-container">
          <img src={button1} alt="Button 1" className="button1" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
