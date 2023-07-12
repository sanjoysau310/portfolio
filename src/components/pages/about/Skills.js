import React from "react";
import about from "../../../data/about.json";

export const Skills = () => {
  const { skills } = about;
  return (
    <div className="skills container">
      <div className="section-title">
        <h2>Skills</h2>
      </div>
      <div className="row skills-content">
        {skills.map((skill) => {
          return (
            <div className="col-lg-6" key={skill.title}>
              <div className="progress">
                <span className="skill">
                  {skill.title} <i className="val">{skill.proficiency}%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.proficiency + "%" }}
                    aria-valuenow={skill.proficiency}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
