import React from "react";
import resume from "../../../data/resume.json";

export const SkillAndTools = () => {
  const { skills } = resume;
  return (
    <div>
      <h3 className="resume-title">Skills and Tools</h3>
      <div className="row">
        {skills.map((skill) => {
          return (
            <div className="col-md-6" key={skill.id}>
              <div className="resume-item">
                <h4>{skill.title}</h4>
                <ul>
                  {skill.specifications.map((spec) => {
                    return <li key={spec}>{spec}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
