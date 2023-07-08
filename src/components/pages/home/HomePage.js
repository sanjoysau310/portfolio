import React from "react";
import { Navbar } from "../../layout/Navbar";
import { SocialLinks } from "../../layout/SocialLinks";

export const HomePage = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="text-start">
          <h1>
            <a href="index.html">Sanjoy Sau</a>
          </h1>
          <h2>
            I'm a passionate <span>web designer</span> from Kolkata, India
          </h2>
        </div>
        <SocialLinks />
      </div>
    </header>
  );
};
