import React from "react";
import "./layout.css";
import { Link } from "react-router-dom";

export const SocialLinks = () => {
  return (
    <div className="social-links">
      <Link to="/" className="twitter">
        <i className="fa-brands fa-twitter" />
      </Link>
      <Link to="/" className="facebook">
        <i className="fa-brands fa-facebook" />
      </Link>
      <Link to="/" className="instagram">
        <i className="fa-brands fa-instagram" />
      </Link>
      <Link to="/" className="google-plus">
        <i className="fa-brands fa-skype" />
      </Link>
      <Link to="/" className="linkedin">
        <i className="fa-brands fa-linkedin" />
      </Link>
    </div>
  );
};
