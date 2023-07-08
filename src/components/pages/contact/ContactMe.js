import React from "react";
import { SocialLinks } from "../../layout/SocialLinks";

export const ContactMe = () => {
  return (
    <div className="section-title">
      <p>Contact Me</p>
      <div className="row mt-2">
        <div className="col-md-6 d-flex align-items-stretch">
          <div className="info-box">
            <i className="fa fa-location-dot" />
            <h3>My Address</h3>
            <p>C/6, Katjunagar, Jadavpur, Kolkata- 700032</p>
          </div>
        </div>
        <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
          <div className="info-box">
            <i className="fa fa-share-alt" />
            <h3>Social Profiles</h3>
            <SocialLinks />
          </div>
        </div>
        <div className="col-md-6 mt-4 d-flex align-items-stretch">
          <div className="info-box">
            <i className="fa fa-envelope" />
            <h3>Email Me</h3>
            <p>sanjoysau13@gmail.com</p>
          </div>
        </div>
        <div className="col-md-6 mt-4 d-flex align-items-stretch">
          <div className="info-box">
            <i className="fa fa-phone" />
            <h3>Call Me</h3>
            <p>+91 9933625153</p>
          </div>
        </div>
      </div>
    </div>
  );
};
