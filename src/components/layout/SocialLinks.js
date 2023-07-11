import React from "react";
import "./layout.css";

export const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="/" target="_blank" rel="noreferrer" className="twitter">
        <i className="fa-brands fa-twitter" />
      </a>
      <a href="/" target="_blank" rel="noreferrer" className="facebook">
        <i className="fa-brands fa-facebook" />
      </a>
      <a href="/" target="_blank" rel="noreferrer" className="instagram">
        <i className="fa-brands fa-instagram" />
      </a>
      <a href="/" target="_blank" rel="noreferrer" className="google-plus">
        <i className="fa-brands fa-skype" />
      </a>
      <a
        href="https://www.linkedin.com/in/sanjoysau/"
        target="_blank"
        rel="noreferrer"
        className="linkedin">
        <i className="fa-brands fa-linkedin" />
      </a>
    </div>
  );
};
