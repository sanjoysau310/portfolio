import React from "react";
import "./contact.css";
import ContactForm from "./ContactForm";
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
