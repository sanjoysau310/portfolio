import React from "react";
import ContactForm from "./ContactForm";
import { SocialLinks } from "../../layout/SocialLinks";
import { ContactMe } from "./ContactMe";

export const ContactPage = () => {
  return (
    <div id="contact" className="contact container mt-5">
      <div className="section-title">
        <h2>Contact</h2>
      </div>
      <ContactMe />
      <ContactForm />
    </div>
  );
};