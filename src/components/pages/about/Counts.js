import React from "react";

export const Counts = () => {
  return (
    <div className="counts container">
      <div className="row">
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div className="count-box">
            <i className="fa fa-face-smile" />
            <span className="purecounter">1</span>
            <p>Companies</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
          <div className="count-box">
            <i className="fa fa-diagram-project"></i>
            <span className="purecounter">1</span>
            <p>Projects</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
          <div className="count-box">
            <i className="fa-solid fa-headset fa-2xl" />
            <span className="purecounter">5</span>
            <p>Years of Experience</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
          <div className="count-box">
            <i className="fa fa-award" />
            <span className="purecounter">1</span>
            <p>Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
};
