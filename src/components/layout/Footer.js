import React from "react";
import "./layout.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="credits">
      Designed by <Link to="/">Sanjoy Sau</Link>
    </div>
  );
};
