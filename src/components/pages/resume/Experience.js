import React, { useState } from "react";
import resume from "../../../data/resume.json";

export const Experience = () => {
  const { role, duration, organisation, tasks } = resume.experience;
  const [show, setShow] = useState(false);
  let count = 0;
  return (
    <div>
      <h3 className="resume-title">Professional Experience</h3>
      <div className="resume-item">
        <h4>{role}</h4>
        <h5>{duration}</h5>
        <p>
          <em>{organisation}</em>
        </p>

        {!show ? (
          <>
            <ul>
              {tasks.map((task) => {
                count = count + 1;
                if (count <= tasks.length / 2)
                  return <li key={task.id}>{task.desc}</li>;
              })}
            </ul>
            <p>
              <i className="button" onClick={() => setShow(true)}>
                ....See More
              </i>
            </p>
          </>
        ) : (
          <>
            <ul>
              {tasks.map((task) => {
                return <li key={task.id}>{task.desc}</li>;
              })}
            </ul>
            <p>
              <i className="button" onClick={() => setShow(false)}>
                ....Hide
              </i>
            </p>
          </>
        )}
      </div>
    </div>
  );
};
