import React from "react";
import resume from "../../../data/resume.json";

export const Experience = () => {
  const { role, duration, organisation, tasks } = resume.experience;
  return (
    <div>
      <h3 className="resume-title">Professional Experience</h3>
      <div className="resume-item">
        <h4>{role}</h4>
        <h5>{duration}</h5>
        <p>
          <em>{organisation}</em>
        </p>
        <ul>
          {tasks.map((task) => {
            return <li key={task.id}>{task.desc}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
