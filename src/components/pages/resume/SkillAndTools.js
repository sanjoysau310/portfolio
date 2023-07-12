import React, { useState } from "react";
import resume from "../../../data/resume.json";

export const SkillAndTools = () => {
  const { skills } = resume;
  const [show, setShow] = useState(false);
  let count = 0;
  return (
    <div>
      <h3 className="resume-title">Skills and Tools</h3>
      <div className="row">
        {/* {skills.map((skill) => {
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
        })} */}

        {!show ? (
          <>
            {skills.map((skill) => {
              count = count + 1;
              if (count < skills.length / 2)
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
            <p>
              <i className="resume-skills" onClick={() => setShow(true)}>
                ....See More
              </i>
            </p>
          </>
        ) : (
          <>
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
            <p>
              <i className="resume-skills" onClick={() => setShow(false)}>
                ....Hide
              </i>
            </p>
          </>
        )}
      </div>
    </div>
  );
};
