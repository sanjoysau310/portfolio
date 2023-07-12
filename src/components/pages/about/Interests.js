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
            <i className="fa-solid fa-baseball" style={{ color: "#ffbb2c" }} />
            <h3>Cricket</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
          <div className="icon-box">
            <i className="fa fa-futbol" style={{ color: "#5578ff" }} />
            <h3>Foolball</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
          <div className="icon-box">
            <i className="fa fa-tree" style={{ color: "#18d26e" }} />
            <h3>Gardening</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
          <div className="icon-box">
            <i className="fa fa-earth" style={{ color: "#e361ff" }} />
            <h3>Travelling</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 mt-4">
          <div className="icon-box">
            <i className="fa fa-car" style={{ color: "#ff0000" }} />
            <h3>Driving</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
