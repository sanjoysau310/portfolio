import React from "react";
import resume from "../../../data/resume.json";

export const Education = () => {
  const { educations } = resume;
  return (
    <div>
      <h3 className="resume-title">Education</h3>
      {educations.map((education) => {
        return (
          <div className="resume-item" key={education.id}>
            <h4>
              {education.degree} &amp; {education.specification}
            </h4>
            <h5>{education.duration}</h5>
            <p>
              <em>{education.institute}</em>
            </p>
            <p>{education.degree}</p>
          </div>
        );
      })}
      <p>
        <em>Education gap between 2013-2014 for entrance exam preparation</em>
      </p>
    </div>
  );
};
