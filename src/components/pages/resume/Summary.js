import React from "react";
import resume from "../../../data/resume.json"
export const Summary = () => {
    const {name,description,contact}=resume.summary
    const {address,phone,email}=contact
  return (
    <div>
      <h3 className="resume-title">Summary</h3>
      <div className="resume-item pb-0">
        <h4>{name}</h4>
        <p>
          <em>
            {description}
          </em>
        </p>
        <ul>
          <li>{address}</li>
          <li>{phone}</li>
          <li>{email}</li>
        </ul>
        <p />
      </div>
    </div>
  );
};
