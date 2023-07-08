import React from "react";

export const Interests = () => {
  return (
    <div className="interests container mt-4">
      <div className="section-title">
        <h2>Interests</h2>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-4">
          <div className="icon-box">
            <i className="ri-store-line" style={{ color: "#ffbb2c" }} />
            <h3>Cricket</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
          <div className="icon-box">
            <i className="ri-bar-chart-box-line" style={{ color: "#5578ff" }} />
            <h3>Foolball</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
          <div className="icon-box">
            <i className="ri-calendar-todo-line" style={{ color: "#e80368" }} />
            <h3>Gardening</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
          <div className="icon-box">
            <i className="ri-paint-brush-line" style={{ color: "#e361ff" }} />
            <h3>Travelling</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4">
          <div className="icon-box">
            <i className="ri-fingerprint-line" style={{ color: "#29cc61" }} />
            <h3>Driving</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
