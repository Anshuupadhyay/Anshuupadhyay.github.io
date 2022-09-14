import "./members.css";

const Members = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">Projects</h1>
      <div className="member member-1">
        <div className="member-img pic1"></div>
        <div className="member-info">
          <h1 className="name">Amazon 2.0</h1>
          <h3 className="position">Website</h3>
          <h4 className="about"></h4>
          <div className="gitlink">
          <a target="_blank" href="https://github.com/Anshuupadhyay/myAmazon#heres-how-amazon-20-goes">View</a>
          </div>
          <h4 className="about">
            It is an amazon cloned E-commerce website.
            <br/>
            TechStack<br/>
            JavaScript, CSS
          </h4>
          <a href="#contact" className="contact-member">
            <span>contact</span>
          </a>
        </div>
      </div>

      <div className="member member-2 ">
        <div className="member-img pic2"></div>
        <div className="member-info">
          <h1 className="name">Nearest Rides</h1>
          <h3 className="position">Website</h3>
          <h4 className="about">
          <div className="gitlink">
          <a target="_blank" href="https://edvora-rides.netlify.app/">View</a>
          </div>
            This website is used to find nearest rides according to the users current location.
            <br/>
            <br/>
       Tech stack<br/>
       HTTP, React JS
          </h4>
          <a href="#contact" className="contact-member">
            <span>contact</span>
          </a>
        </div>
      </div>

      <div className="member member-3">
        <div className="member-img pic3"></div>
        <div className="member-info">
          <p className="name">Raghunandan Tiwari <br/>pushtakalaya and club</p>
          <h3 className="position">Website</h3>
          <h4 className="about">
          <div className="gitlink">
          <a target="_blank" href="https://anshuupadhyay.github.io/rpc/ans.html">View</a>
          </div>
            Created a website for "Raghunandan Tiwari and Pushtakalaya and club" which was established in 1956.
            <br/>
            <br/>
            Tech stack
            <br/>
            HTML, CSS, JavaScript
          </h4>
          <a href="#contact" className="contact-member">
            <span>contact</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Members;
