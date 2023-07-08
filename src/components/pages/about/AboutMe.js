import React from "react";

export const AboutMe = () => {
  return (
    <div className="about-me container">
      <div className="section-title">
        <h2>About</h2>
        <p>Learn more about me</p>
      </div>
      <div className="row">
        <div className="col-lg-4" data-aos="fade-right">
          <img src="" className="img-fluid" alt="profile picture" />
        </div>
        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
          <h3>UI/UX &amp; Web Designer</h3>
          <p className="fst-italic">I have overall 5 years IT experience</p>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li>
                  <i className="fa fa-chevron-right" />
                  <strong>Birthday:</strong> <span>3 October 1994</span>
                </li>
                <li>
                  <i className="fa fa-chevron-right" />
                  <strong>Website:</strong> <span>www.sanjoysau.com</span>
                </li>
                <li>
                  <i className="fa fa-chevron-right" /> <strong>Phone:</strong>
                  <span>+91 9933625153</span>
                </li>
                <li>
                  <i className="fa fa-chevron-right" /> <strong>City:</strong>
                  <span>Kolkata, India</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul>
                <li>
                  <i className="fa fa-chevron-right" /> <strong>Age:</strong>
                  <span>29</span>
                </li>
                <li>
                  <i className="fa fa-chevron-right" />
                  <strong>Degree:</strong>
                  <span>Bachalor of Technology in IT</span>
                </li>
                <li>
                  <i className="fa fa-chevron-right" />
                  <strong>Email:</strong> <span>sanjoysau13@gmail.com</span>
                </li>
                <li>
                  <i className="fa fa-chevron-right" />
                  <strong>Experience:</strong> <span>5+</span>
                </li>
              </ul>
            </div>
          </div>
          <p>
            Over all 5 years of development and testing experience in both Web
            and Desktop based applications with extended expertise in QA and
            Automated Software Testing in Telecom domain. Fast learner looking
            for challenging environment to work. Enthusiastic team player
            focused on achieving project objectives with speed and accuracy.
          </p>
        </div>
      </div>
    </div>
  );
};
