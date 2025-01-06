import circle8 from '../assets/Circle8.png'; // Import the Circle8 image
import circle9 from '../assets/Circle9.png'; // Import the Circle9 image
import company from '../assets/Companies.png'; // Import the Company image
import benefits from '../assets/benefits.png'; // Import the Benefits image
import frame24 from '../assets/Frame 24.png'; // Import the Frame24 image
import subcontainer3Image from '../assets/casestudycontainer.png'; // Import the Subcontainer3 image
import reviewList from '../assets/Review List.png'; // Import the Review List image
import review2 from '../assets/review2.png'; // Import the Review 2 image
import exp from '../assets/exp.png'; // Import the exp image
import sliderbutton1 from '../assets/sliderbutton1.png'; // Import the Slider Button image
import sliderbutton2 from '../assets/sliderbutton2.png'; // Import the Slider Button 2 image
import blogpost1 from '../assets/blogpost1.png'; // Import the BlogPost1 image
import blogpost2 from '../assets/blogpost2.png'; // Import the BlogPost2 image
import blogpost3 from '../assets/blogpost3.png'; // Import the BlogPost3 image
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

        {/* New Slider Container */}
        <div className="slider-container">
          <div className="slider-title">
            Driving results for leaders across the globe
          </div>
          <div className="slider-subtitle">
            People now recognise that having a good performance<br />
            conversation means that something happens as a result.
          </div>
          <div className="slider-text">
            With Landingfolio, the design team can now build design which<br />
            identifies employees’ career aspirations and goals and from which we<br />
            approach managers and check to see what is happening.
          </div>
          {/* Slider button 1 image positioned wherever you want */}
          <img
            src={sliderbutton1}
            alt="Slider Button 1"
            className="slider-button1"
          />
          {/* Slider button 2 image positioned wherever you want */}
          <img
            src={sliderbutton2}
            alt="Slider Button 2"
            className="slider-button2"
          />
          {/* Slider Name */}
          <div className="slider-name">
            Rajat Shina
          </div>
          {/* Slider Role */}
          <div className="slider-role">
            Product Manager, Sisyphus
          </div>
          {/* Rectangle 3 */}
          <div className="rectangle3">
            <div className="rectangle4">
            </div>
          </div>
        </div>

        {/* New Blog Container with Title and Text */}
        <div className="blog-container">
          <div className="blog-title">
          Blog posts for the community
          </div>
          <div className="blog-text">
            Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          </div>

          {/* New BlogPost1 Container */}
          <div className="blogpost1">
            <img src={blogpost1} alt="BlogPost1" className="blogpost1-image" />
            {/* New Author Text below BlogPost1 image */}
            <div className="blogpost1-author">
              Alec Whitten • 17 Jan 2022
            </div>
            {/* New Title below Author */}
            <div className="blogpost1-title">
              Bill Walsh leadership lessons
            </div>
            {/* New Text below Title */}
            <div className="blogpost1-text">
              Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?
            </div>
          </div>

          {/* New BlogPost2 Container (can be moved anywhere inside the blog-container) */}
          <div className="blogpost2" style={{  position: 'absolute' }}>
            <img src={blogpost2} alt="BlogPost2" className="blogpost2-image" />
            <div className="blogpost2-author">
            Demi WIlkinson • 16 Jan 2022
            </div>
            {/* New Title below Author */}
            <div className="blogpost2-title">
            PM mental models
            </div>
            {/* New Text below Title */}
            <div className="blogpost2-text">
            Mental models are simple expressions of complex processes or relationships.
            </div>
          </div>

          {/* New BlogPost3 Container (can be moved anywhere inside the blog-container) */}
          <div className="blogpost3" style={{  position: 'absolute' }}>
            <img src={blogpost3} alt="BlogPost3" className="blogpost3-image" />
            <div className="blogpost3-author">
            Candice Wu • 15 Jan 2022
            </div>
            {/* New Title below Author */}
            <div className="blogpost3-title">
            What is Wireframing?
            </div>
            {/* New Text below Title */}
            <div className="blogpost3-text">
            Introduction to Wireframing and its Principles. Learn from the best in the industry.
            </div>
          </div>


          <div className="rectangle5">
            <div className="rectangle6">
            </div>
          </div>

        </div>
      </div>

      <img src={circle8} alt="Circle 8" className="circle8" />
      <img src={circle9} alt="Circle 9" className="circle9" />

      {/* New button images below the review section */}
      <div className="button-container">
        <div className="button2-container">
        <button className="Button2">Conatact Us</button>
        </div>

        <div className="button1-container">
        <button className="Button1">Join Us</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
