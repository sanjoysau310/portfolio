import React from "react";
import { Skills } from "./Skills";
import { Interests } from "./Interests";
import { Counts } from "./Counts";
import { AboutMe } from "./AboutMe";

const AboutPage = () => {
  return (
    <div id="about" className="about mt-5">
      <AboutMe />
      <Counts />
      <Skills />
      <Interests />
      {/* <Testimonials /> */}
    </div>
  );
};

export default AboutPage;
