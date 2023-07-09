import React, { useState } from "react";
import "./resume.css";
import { Summary } from "./Summary";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { SkillAndTools } from "./SkillAndTools";
import { Link } from "react-router-dom";

export const ResumePage = () => {
  const [hoverText, setHoverText] = useState(false);

  const downloadResume = () => {
    fetch("resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "resume.pdf";
        alink.click();
      });
    });
  };
  return (
    <div cid="resume" className="resume container mt-5">
      <div className="section-title">
        <div className="float-end">
          <Link>
            <i
              className={`fa-solid fa-download ${
                !hoverText ? "text-white" : ""
              }`}
              onClick={downloadResume}
              onMouseOver={() => setHoverText(true)}
              onMouseOut={() => setHoverText(false)}
            />
          </Link>
          {hoverText && <div>Download resume to know more in details</div>}
        </div>

        <h2>Resume</h2>
        <p>Check My Resume</p>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <Summary />
          <Experience />
        </div>
        <div className="col-lg-6">
          <SkillAndTools />
          <Education />
        </div>
      </div>
    </div>
  );
};
